import { useState, useEffect } from "react";
import { Shield, Activity, BarChart3, Settings, Globe, Server, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Index() {
  const [isBlocking, setIsBlocking] = useState(true);
  const [blockedAds, setBlockedAds] = useState(2847);
  const [timeSaved, setTimeSaved] = useState(142.7);
  const [bandwidthSaved, setBandwidthSaved] = useState(8.3);
  const [proxyPort, setProxyPort] = useState("8080");
  const [proxyStatus, setProxyStatus] = useState("running");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBlocking) {
        setBlockedAds(prev => prev + Math.floor(Math.random() * 3) + 1);
        setTimeSaved(prev => prev + Math.random() * 0.15);
        setBandwidthSaved(prev => prev + Math.random() * 0.03);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isBlocking]);

  const stats = [
    { 
      label: "Ads Blocked", 
      value: blockedAds.toLocaleString(), 
      icon: Shield, 
      color: "text-emerald-600",
      change: "+12% vs yesterday"
    },
    { 
      label: "Time Saved", 
      value: `${timeSaved.toFixed(1)} min`, 
      icon: Activity, 
      color: "text-blue-600",
      change: "~2.4 hours this week"
    },
    { 
      label: "Bandwidth Saved", 
      value: `${bandwidthSaved.toFixed(2)} GB`, 
      icon: BarChart3, 
      color: "text-purple-600",
      change: "22.1 GB this month"
    },
    { 
      label: "Protected Sessions", 
      value: "4", 
      icon: Users, 
      color: "text-orange-600",
      change: "Active across devices"
    }
  ];

  const recentActivity = [
    { 
      time: new Date().toLocaleTimeString(), 
      action: "YouTube pre-roll advertisement blocked", 
      domain: "youtube.com", 
      type: "blocked",
      size: "2.3 MB"
    },
    { 
      time: new Date(Date.now() - 30000).toLocaleTimeString(), 
      action: "Overlay banner intercepted", 
      domain: "youtube.com", 
      type: "blocked",
      size: "1.8 MB"
    },
    { 
      time: new Date(Date.now() - 75000).toLocaleTimeString(), 
      action: "Tracking script from DoubleClick filtered", 
      domain: "googlevideo.com", 
      type: "filtered",
      size: "0.4 MB"
    },
    { 
      time: new Date(Date.now() - 120000).toLocaleTimeString(), 
      action: "Video advertisement skipped", 
      domain: "youtube.com", 
      type: "blocked",
      size: "4.1 MB"
    },
  ];

  const handleProxyToggle = () => {
    setIsBlocking(!isBlocking);
    setProxyStatus(isBlocking ? "stopped" : "running");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="border-b bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  YouTube Ad Blocker Pro
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Advanced content filtering & privacy protection
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant={proxyStatus === "running" ? "default" : "secondary"}>
                {proxyStatus === "running" ? "Active" : "Inactive"}
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6 space-y-6">
        {/* Control Panel */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Content Filtering Control</CardTitle>
                <CardDescription>
                  {isBlocking 
                    ? "YouTube advertisements are being blocked automatically" 
                    : "Content filtering is currently disabled"}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-3">
                <Label htmlFor="blocking-toggle" className="text-sm font-medium">
                  Enable Blocking
                </Label>
                <Switch
                  id="blocking-toggle"
                  checked={isBlocking}
                  onCheckedChange={handleProxyToggle}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Blocking Efficiency
                </div>
                <Progress value={isBlocking ? 96 : 0} className="h-2" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">
                  {isBlocking ? "96%" : "0%"}
                </div>
                <div className="text-sm text-slate-500">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <div className="text-right">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-slate-500">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Log */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Real-time Activity Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-slate-500">{activity.domain}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge variant={activity.type === "blocked" ? "default" : "secondary"} className="text-xs">
                        {activity.type === "blocked" ? "Blocked" : "Filtered"}
                      </Badge>
                      <div className="text-xs text-slate-500">
                        <div>{activity.time}</div>
                        <div>{activity.size}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proxy Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Proxy Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="proxy-port">Proxy Port</Label>
                <Input
                  id="proxy-port"
                  value={proxyPort}
                  onChange={(e) => setProxyPort(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label>Server Status</Label>
                <div className="mt-1 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${proxyStatus === "running" ? "bg-emerald-500" : "bg-slate-400"}`}></div>
                  <span className="text-sm capitalize">{proxyStatus}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uptime:</span>
                  <span className="font-mono">6h 42m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Active Connections:</span>
                  <span className="font-mono">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Data Processed:</span>
                  <span className="font-mono">127.3 MB</span>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Config
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Browser Extension Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Browser Extension Setup
            </CardTitle>
            <CardDescription>
              Install our browser extension for seamless YouTube ad blocking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex-col gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <span>Chrome Extension</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
                <span>Firefox Add-on</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span>Safari Extension</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import {
  Shield,
  Play,
  BarChart3,
  Settings,
  Zap,
  Clock,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Index() {
  const [isBlocking, setIsBlocking] = useState(true);
  const [blockedAds, setBlockedAds] = useState(1247);
  const [timeSaved, setTimeSaved] = useState(86.3);
  const [bandwidthSaved, setBandwidthSaved] = useState(2.4);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isBlocking) {
        setBlockedAds((prev) => prev + Math.floor(Math.random() * 3));
        setTimeSaved((prev) => prev + Math.random() * 0.1);
        setBandwidthSaved((prev) => prev + Math.random() * 0.01);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isBlocking]);

  const stats = [
    {
      label: "Ads Blocked Today",
      value: blockedAds.toLocaleString(),
      icon: Shield,
      color: "text-primary",
    },
    {
      label: "Time Saved",
      value: `${timeSaved.toFixed(1)} min`,
      icon: Clock,
      color: "text-success",
    },
    {
      label: "Bandwidth Saved",
      value: `${bandwidthSaved.toFixed(2)} GB`,
      icon: TrendingUp,
      color: "text-warning",
    },
    {
      label: "Active Sessions",
      value: "3",
      icon: Activity,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  YouTube AdBlocker
                </h1>
                <p className="text-sm text-muted-foreground">
                  Advanced Ad Blocking Dashboard
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge
                variant={isBlocking ? "default" : "secondary"}
                className="px-3 py-1"
              >
                {isBlocking ? "Protected" : "Disabled"}
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Main Control Panel */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    Ad Blocking Status
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {isBlocking
                      ? "Your YouTube experience is protected"
                      : "Ad blocking is currently disabled"}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Disabled</span>
                  <Switch
                    checked={isBlocking}
                    onCheckedChange={setIsBlocking}
                    className="data-[state=checked]:bg-primary"
                  />
                  <span className="text-sm font-medium">Enabled</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    Protection Level
                  </div>
                  <Progress value={isBlocking ? 95 : 0} className="h-3" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {isBlocking ? "95%" : "0%"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Efficiency
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Real-time Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Real-time Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "2:34 PM",
                    action: "Blocked video ad",
                    domain: "youtube.com",
                    type: "success",
                  },
                  {
                    time: "2:33 PM",
                    action: "Blocked overlay ad",
                    domain: "youtube.com",
                    type: "success",
                  },
                  {
                    time: "2:32 PM",
                    action: "Filtered tracking script",
                    domain: "googlevideo.com",
                    type: "warning",
                  },
                  {
                    time: "2:31 PM",
                    action: "Blocked pre-roll ad",
                    domain: "youtube.com",
                    type: "success",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.domain}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          activity.type === "success" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {activity.type === "success" ? "Blocked" : "Filtered"}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proxy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Proxy Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Proxy Server</label>
                  <div className="mt-1 p-3 bg-muted rounded-md font-mono text-sm">
                    127.0.0.1:8080
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Active & Running</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Uptime</label>
                    <p className="text-sm text-muted-foreground">4h 23m</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Connections</label>
                    <p className="text-sm text-muted-foreground">3 active</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Restart Proxy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Shield className="h-6 w-6" />
              <span>Whitelist Site</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Settings className="h-6 w-6" />
              <span>Advanced Settings</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

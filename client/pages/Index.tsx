import { useState, useEffect } from "react";
import { Shield, Play, BarChart3, Settings, Zap, Clock, TrendingUp, Activity, Coffee, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Index() {
  const [isBlocking, setIsBlocking] = useState(true);
  const [blockedAds, setBlockedAds] = useState(1247);
  const [timeSaved, setTimeSaved] = useState(86.3);
  const [bandwidthSaved, setBandwidthSaved] = useState(2.4);

  // Simulate real-time updates (but make it feel less perfect)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isBlocking) {
        setBlockedAds(prev => prev + Math.floor(Math.random() * 5) + 1);
        setTimeSaved(prev => prev + Math.random() * 0.2);
        setBandwidthSaved(prev => prev + Math.random() * 0.02);
      }
    }, Math.random() * 2000 + 2000); // Random intervals between 2-4 seconds

    return () => clearInterval(interval);
  }, [isBlocking]);

  const stats = [
    { label: "Ads Murdered 💀", value: blockedAds.toLocaleString(), icon: Skull, color: "text-red-500", desc: "today" },
    { label: "Life Saved ⏰", value: `${timeSaved.toFixed(1)} min`, icon: Coffee, color: "text-green-600", desc: "for better things" },
    { label: "Data Saved 📊", value: `${bandwidthSaved.toFixed(2)} GB`, icon: TrendingUp, color: "text-blue-500", desc: "your wallet thanks you" },
    { label: "Active Tabs", value: "3", icon: Activity, color: "text-purple-500", desc: "being protected" }
  ];

  const funnyMessages = [
    "Another ad bites the dust! 🎵",
    "Ads? Not in my YouTube! 😤", 
    "Blocked that nonsense ✋",
    "Ad-free and loving it! ❤️",
    "Sayonara, advertisement! 👋"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header - intentionally slightly off-center */}
      <header className="border-b bg-white/70 backdrop-blur-sm dark:bg-slate-900/70 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl rotate-3 shadow-sm">
                <Shield className="h-7 w-7 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">YouTube Ad Destroyer</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Built by someone who got tired of ads 🙄</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant={isBlocking ? "default" : "destructive"} className="px-4 py-1.5 font-medium">
                {isBlocking ? "✅ Ads = Dead" : "⚠️ Disabled"}
              </Badge>
              <Button variant="outline" size="sm" className="shadow-sm">
                <Settings className="h-4 w-4 mr-2" />
                Tweak Stuff
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6">
        {/* Main Control - slightly tilted for human feel */}
        <div className="mb-6">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800 transform -rotate-1 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-3 transform rotate-1">
                    <Zap className="h-6 w-6 text-red-500" />
                    The Big Red Button™
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    {isBlocking ? "Ads are getting obliterated 🔥" : "Uhoh, ads are sneaking through! 😱"}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Off</span>
                  <Switch
                    checked={isBlocking}
                    onCheckedChange={setIsBlocking}
                    className="data-[state=checked]:bg-red-500"
                  />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">ON!</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">How good are we doing?</div>
                  <Progress value={isBlocking ? 94 : 0} className="h-4 bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-500">{isBlocking ? "94%" : "0%"}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">not bad! 👍</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats - uneven spacing for human touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${index % 2 === 0 ? 'mt-2' : ''}`}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  <div className="text-right">
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{stat.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Grid - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Real-time Activity - spans 2 columns */}
          <Card className="lg:col-span-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                Live Feed (watching ads die in real-time 😈)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: "just now", action: funnyMessages[Math.floor(Math.random() * funnyMessages.length)], domain: "youtube.com", type: "success" },
                  { time: "5 sec ago", action: "Blocked some annoying overlay thing", domain: "youtube.com", type: "success" },
                  { time: "12 sec ago", action: "Caught a sneaky tracker trying to spy on you", domain: "googlevideo.com", type: "warning" },
                  { time: "23 sec ago", action: "Pre-roll ad? More like pre-roll NOPE!", domain: "youtube.com", type: "success" },
                  { time: "31 sec ago", action: "Banner ad got the boot 👢", domain: "youtube.com", type: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{activity.action}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{activity.domain}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={activity.type === "success" ? "default" : "secondary"} className="text-xs">
                        {activity.type === "success" ? "💀 RIP" : "🔍 Caught"}
                      </Badge>
                      <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proxy Settings */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5 text-green-500" />
                Proxy Thingy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Server Address</label>
                  <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm border">
                    127.0.0.1:8080
                  </div>
                  <p className="text-xs text-slate-500 mt-1">localhost, because why not? 🤷</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Status</label>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Running like a champ! ✨</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-md">
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Been running for:</label>
                    <p className="text-sm font-mono text-slate-800 dark:text-slate-200">4h 23m 15s</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-md">
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Active connections:</label>
                    <p className="text-sm font-mono text-slate-800 dark:text-slate-200">3 tabs protected 🛡️</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 shadow-sm" variant="default">
                  <Play className="h-4 w-4 mr-2" />
                  Restart This Thing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - casual buttons */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Quick Stuff You Might Wanna Do 🎯</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 border-2 shadow-sm">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Let Some Site Through</span>
              <span className="text-xs text-slate-500">whitelist stuff</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-purple-50 dark:hover:bg-purple-950/20 border-2 shadow-sm">
              <BarChart3 className="h-6 w-6 text-purple-500" />
              <span className="font-medium">See Pretty Charts</span>
              <span className="text-xs text-slate-500">numbers go brrrr</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 dark:hover:bg-orange-950/20 border-2 shadow-sm">
              <Settings className="h-6 w-6 text-orange-500" />
              <span className="font-medium">Fiddle With Settings</span>
              <span className="text-xs text-slate-500">for the brave</span>
            </Button>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Made with ❤️ and caffeine by someone who really, really hates YouTube ads
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            (seriously, they were getting out of hand 🙄)
          </p>
        </div>
      </main>
    </div>
  );
}

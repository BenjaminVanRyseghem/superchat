(defproject superchat "0.0.1"
  :description "Superchat"
  :main "superchat.core"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring/ring-core "1.1.0-SNAPSHOT" :exclusions [javax.servlet/servlet-api]]
                 [org.clojure/clojurescript "0.0-2356" :exclusions [org.clojure/google-closure-library]]
                 [net.thegeez/google-closure-library "0.0-1698"]
                 [net.thegeez/clj-browserchannel-server "0.0.5"]
                 [net.thegeez/clj-browserchannel-jetty-adapter "0.0.1"]
                 #_[net.thegeez/clj-browserchannel-netty-adapter "0.0.1"]
                 ]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.12"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :cljsbuild {
              :builds {
                       :main {
                              :source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/cljs.js"
                                         :optimizations :simple
                                         :pretty-print true}
                              :jar true}}})

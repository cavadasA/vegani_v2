import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Home } from "./components/home"

export const Layout = () => {
    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}


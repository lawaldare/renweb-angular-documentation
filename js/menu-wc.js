'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">renmoney-application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-95514bbb8a315310e42f43c7302a1694"' : 'data-target="#xs-components-links-module-AccountModule-95514bbb8a315310e42f43c7302a1694"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-95514bbb8a315310e42f43c7302a1694"' :
                                            'id="xs-components-links-module-AccountModule-95514bbb8a315310e42f43c7302a1694"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' : 'data-target="#xs-components-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' :
                                            'id="xs-components-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' : 'data-target="#xs-injectables-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' :
                                        'id="xs-injectables-links-module-AppModule-fad4dd5daa3f81bc8e3e5a698f9c92d2"' }>
                                        <li class="link">
                                            <a href="injectables/CoalescingComponentFactoryResolver.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CoalescingComponentFactoryResolver</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-bf31bc36d9d20de740173ba20f4de06a"' : 'data-target="#xs-components-links-module-AuthModule-bf31bc36d9d20de740173ba20f4de06a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-bf31bc36d9d20de740173ba20f4de06a"' :
                                            'id="xs-components-links-module-AuthModule-bf31bc36d9d20de740173ba20f4de06a"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtpVerificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OtpVerificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnlockComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorModule.html" data-type="entity-link">CalculatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalculatorModule-0dee6d2c5a34f9aac277aa387bd19900"' : 'data-target="#xs-components-links-module-CalculatorModule-0dee6d2c5a34f9aac277aa387bd19900"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalculatorModule-0dee6d2c5a34f9aac277aa387bd19900"' :
                                            'id="xs-components-links-module-CalculatorModule-0dee6d2c5a34f9aac277aa387bd19900"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationKnockoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationKnockoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorRoutingModule.html" data-type="entity-link">CalculatorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateModule.html" data-type="entity-link">CreateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' : 'data-target="#xs-components-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' :
                                            'id="xs-components-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' }>
                                            <li class="link">
                                                <a href="components/AddBankComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddBankComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BankStatementNoticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BankStatementNoticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanFinalPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanFinalPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanNokComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanNokComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanRequirementsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanRequirementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanStateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanStateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileBankingLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileBankingLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MorePersonalDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MorePersonalDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoCardstatusIframeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoCardstatusIframeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepaymentIframeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepaymentIframeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectLoanTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectLoanTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignOfferComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignOfferComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingsToKnowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThingsToKnowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnifiedRepaymentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnifiedRepaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadLoanUtiliesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadLoanUtiliesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' : 'data-target="#xs-pipes-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' :
                                            'id="xs-pipes-links-module-CreateModule-3bd62470f356135146d0f078db14a140"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateRoutingModule.html" data-type="entity-link">CreateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InvestModule.html" data-type="entity-link">InvestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InvestModule-479a6892332ebac352e40563cfb7d8c9"' : 'data-target="#xs-components-links-module-InvestModule-479a6892332ebac352e40563cfb7d8c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InvestModule-479a6892332ebac352e40563cfb7d8c9"' :
                                            'id="xs-components-links-module-InvestModule-479a6892332ebac352e40563cfb7d8c9"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InvestRoutingModule.html" data-type="entity-link">InvestRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link">PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageModule-1bee89151f2b42492d4fc6ff3b8983cb"' : 'data-target="#xs-components-links-module-PageModule-1bee89151f2b42492d4fc6ff3b8983cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-1bee89151f2b42492d4fc6ff3b8983cb"' :
                                            'id="xs-components-links-module-PageModule-1bee89151f2b42492d4fc6ff3b8983cb"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileLeftSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileLeftSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaveComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageRoutingModule.html" data-type="entity-link">PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlansModule.html" data-type="entity-link">PlansModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlansModule-1d17ec496c0630c453cac7765635f816"' : 'data-target="#xs-components-links-module-PlansModule-1d17ec496c0630c453cac7765635f816"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlansModule-1d17ec496c0630c453cac7765635f816"' :
                                            'id="xs-components-links-module-PlansModule-1d17ec496c0630c453cac7765635f816"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlansRoutingModule.html" data-type="entity-link">PlansRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' : 'data-target="#xs-components-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' :
                                            'id="xs-components-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' }>
                                            <li class="link">
                                                <a href="components/AddBankModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddBankModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BankTransferComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BankTransferComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BvnModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BvnModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalculatorModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalculatorModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalenderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalenderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeSecurityQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeSecurityQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmploymentDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmploymentDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundInvestmentModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FundInvestmentModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoryModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputBvnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputBvnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputBvnModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputBvnModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvestCalculatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvestCalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvestCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvestCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiquidationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LiquidationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanActiveCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanActiveCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanCalculatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanCalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanRepaymentsModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanRepaymentsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoanSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextOfKinModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NextOfKinModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticeCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoticeCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageDescriptionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageDescriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PartialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentHandlerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentHandlerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PepModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PepModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanAmountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanAmountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanNameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanNameModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanNameModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanReviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortfolioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetSavingsAddCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetSavingsAddCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetSavingsCalculatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetSavingsCalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetSavingsFrequencyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetSavingsFrequencyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetSavingsPartialWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetSavingsPartialWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetSavingsWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TargetSavingsWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadLoanImgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadLoanImgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyIdComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' : 'data-target="#xs-pipes-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' :
                                            'id="xs-pipes-links-module-SharedModule-1a8768ab8ca1748cae23e3ca878aa4b1"' }>
                                            <li class="link">
                                                <a href="pipes/DecimalOnlyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DecimalOnlyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WholeNumberPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WholeNumberPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SingleInvestModule.html" data-type="entity-link">SingleInvestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SingleInvestModule-614dbea6e213777090783319899a2d6d"' : 'data-target="#xs-components-links-module-SingleInvestModule-614dbea6e213777090783319899a2d6d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SingleInvestModule-614dbea6e213777090783319899a2d6d"' :
                                            'id="xs-components-links-module-SingleInvestModule-614dbea6e213777090783319899a2d6d"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketFundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocketWithdrawComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PocketWithdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavingsOnboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavingsOnboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SingleViewRoutingModule.html" data-type="entity-link">SingleViewRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccountComponent.html" data-type="entity-link">AccountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountSetUpComponent.html" data-type="entity-link">AccountSetUpComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddFundTargetSavingsComponent.html" data-type="entity-link">AddFundTargetSavingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgeKnockoutComponent.html" data-type="entity-link">AgeKnockoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BvnModalComponent.html" data-type="entity-link">BvnModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompleteComponent.html" data-type="entity-link">CompleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateComponent.html" data-type="entity-link">CreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateFixedDepositComponent.html" data-type="entity-link">CreateFixedDepositComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateLoanComponent.html" data-type="entity-link">CreateLoanComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateSaveEasyComponent.html" data-type="entity-link">CreateSaveEasyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateTargetSavingsComponent.html" data-type="entity-link">CreateTargetSavingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailComponent.html" data-type="entity-link">DetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FundInvestmentModalComponent.html" data-type="entity-link">FundInvestmentModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HistoryComponent.html" data-type="entity-link">HistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IncomeKnockoutComponent.html" data-type="entity-link">IncomeKnockoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InvestComponent.html" data-type="entity-link">InvestComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InvestmentCalculatorComponent.html" data-type="entity-link">InvestmentCalculatorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InvestmentCalculatorOnlyComponent.html" data-type="entity-link">InvestmentCalculatorOnlyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoanCalculatorPageComponent.html" data-type="entity-link">LoanCalculatorPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoanCalulatorLandingPageComponent.html" data-type="entity-link">LoanCalulatorLandingPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoanLandingPageComponent.html" data-type="entity-link">LoanLandingPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NextOfKinComponent.html" data-type="entity-link">NextOfKinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PartialWithdrawalComponent.html" data-type="entity-link">PartialWithdrawalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link">PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PepModalComponent.html" data-type="entity-link">PepModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlanNameModalComponent.html" data-type="entity-link">PlanNameModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlansComponent.html" data-type="entity-link">PlansComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link">ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RolloverComponent.html" data-type="entity-link">RolloverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SavingsCalculatorComponent.html" data-type="entity-link">SavingsCalculatorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SecurityComponent.html" data-type="entity-link">SecurityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SingleViewComponent.html" data-type="entity-link">SingleViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepperComponent.html" data-type="entity-link">StepperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UtilityBillComponent.html" data-type="entity-link">UtilityBillComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewFixedDepositsComponent.html" data-type="entity-link">ViewFixedDepositsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewSaveEasyComponent.html" data-type="entity-link">ViewSaveEasyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewTargetSavingsComponent.html" data-type="entity-link">ViewTargetSavingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WithdrawComponent.html" data-type="entity-link">WithdrawComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WithdrawComponent-1.html" data-type="entity-link">WithdrawComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardInterface.html" data-type="entity-link">CardInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogModalButton.html" data-type="entity-link">DialogModalButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneralAuth.html" data-type="entity-link">GeneralAuth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Investment.html" data-type="entity-link">Investment</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoticeCardInterface.html" data-type="entity-link">NoticeCardInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetModel.html" data-type="entity-link">ResetModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardsService.html" data-type="entity-link">CardsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link">ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoalescingComponentFactoryResolver.html" data-type="entity-link">CoalescingComponentFactoryResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link">DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralService.html" data-type="entity-link">GeneralService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvestmentService.html" data-type="entity-link">InvestmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoanService.html" data-type="entity-link">LoanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordService.html" data-type="entity-link">PasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link">PaymentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BasicAuthInterceptor.html" data-type="entity-link">BasicAuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AlreadyLoggedInGuard.html" data-type="entity-link">AlreadyLoggedInGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccountInterface.html" data-type="entity-link">AccountInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link">AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanySearchResponse.html" data-type="entity-link">CompanySearchResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeneralAPIResponse.html" data-type="entity-link">GeneralAPIResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvestmentInterface.html" data-type="entity-link">InvestmentInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoanInterface.html" data-type="entity-link">LoanInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/paymentOptionInterface.html" data-type="entity-link">paymentOptionInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResetPasswordResponse.html" data-type="entity-link">ResetPasswordResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tabs.html" data-type="entity-link">Tabs</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
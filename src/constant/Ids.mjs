const Ids = {
    BUTTONS: {
      SEND_OTP: 'send-otp',
      SEND_QUERY: 'send-query',
      VALIDATE_OTP: 'validate-otp',
      FHD_BUTTON: 'fhd-button',
      LEFT_NAV: 'left-nav',
      SETTINGS: 'settings',
      RESET_PROFILE: 'reset-profile',
      CONTINUE_RS_TP: 'continue-reset-testProfile',
      EXP_ARYA: 'explore-with-arya',
      FHD_METRICS: 'fhd-metrics',
      FHD_OVERVIEW: 'fhd-overview',
      BACK_BUTTON: 'back-button',
      BACK_BUTTON_MF_HEADER: 'mf-header-back-button',
      MANAGE_DATA: 'manage-data',
  
      GOALS: {
        SAVE_AND_CONTINUE: 'save-goal-and-continue',
      },
      LOG_OUT: 'log-out',
      LOGOUT_CONFIRMATION: 'logout-confirmation',
      CANCLE_LOGOUT: 'cancle-logout',
      MF_INSIGHTS: 'mf-insights',
      MF_HOLDINGS: 'mf-holdings-tab',
      STOCK_HOLDINGS: 'stock-holdings-tab',
      STOCK_INSIGHTS: 'stock-insights-tab',
      SUGGESTION_CHIP: 'suggestion-chip-',
  
      SHORTS_CTA_BUTTON: 'shorts-button',
  
      MFTAB_FUND_DETAILS: 'mf-details-tab-fund-details',
    },
    INPUT_FIELDS: {
      PHONE_NUM: 'phone-num',
      CHAT_INPUT: 'chat-input',
  
      GOALS: {
        RETIREMENT: {
          CURRENT_AGE: 'retirement-goal-current-age',
          RETIREMENT_YEAR: 'retirement-goal-retirement-year',
          AMOUNT: 'retirement-goal-amount',
          CURRENT_MON_EXPENSE: 'retirement-goal-current-monthly-expense',
          RETIREMENT_EXPENSES: 'retirement-goal-retirement-expenses',
          INFLATION: 'retirement-goal-inflation-rate',
          LIFE_EXPECTANCY: 'retirement-goal-life-expectancy',
        },
      },
    },
    SCREEN: {
      HOME_SCREEN: 'home-screen',
      SIDE_MENU: 'side-menu',
      FHD_SCREEN: 'fhd-screen',
      CHAT_SCREEN: 'chat-screen',
      EQU_PERF_SCREEN: 'equity-perf-screen',
      GOALS_SCREEN: 'goals-screen',
      MF_PERF_SCREEN: 'mf-perf-screen',
      STOCK_PERF_SCREEN: 'equity-perf-screen',
      MF_DETAILS_TAB: 'mf-details-tab',
      LOGIN_SCREEN: 'login-screen',
    },
    COMPONENTS: {
      MESSAGE_REQUEST: 'message-request',
      MESSAGE_RESPONSE: 'message-response',
  
      FHD_AI_INSIGHTS: 'fhd-ai-insights',
      EQ_PERF_AI_INSIGHTS: 'equ-perf-ai-insights',
      MF_PERF_AI_INSIGHTS: 'mf-perf-ai-insights',
      STOCK_PERF_AI_INSIGHTS: 'stock-perf-ai-insights',
  
      FINFIT_SCORE: 'finfit-score',
      EQU_PERF: 'equity-perf',
      MF_PERF: 'mf-perf',
      STOCK_PERF: 'stock-perf',
      ASSET_ALLOCATION: 'asset-allocation',
  
      MF_HOLDINGS: 'mutual-funds-holdings',
  
      MF_RATINGS: 'mutual-fund-ratings',
      MF_RATING_ROW: {
        Consistent: 'mf-rating-consistent',
        Volatile: 'mf-rating-volatile',
        Hold: 'mf-rating-hold',
        Sell: 'mf-rating-sell',
        'Not Rated': 'mf-rating-not-rated',
      },
  
      MF_RATING_ROW_EXPANDED_VIEW: {
        Consistent: 'expandedview-rating-consistent',
        Volatile: 'expandedview-rating-volatile',
        Hold: 'expandedview-rating-hold',
        Sell: 'expandedview-rating-sell',
        'Not Rated': 'expandedview-rating-not-rated',
      },
  
      MFPERF_INSIGHTS: {
        UNDERPERFORMING_FUNDS: 'mf-insights-underperforming',
        SECTOR_ALLOCATION: 'mf-insights-sector-allocation',
        MARKETCAP_ALLOC: 'mf-insights-marketcap-allocation',
        TOPHOLDINGS: 'mf-insights-topholdings',
      },
  
      STOCKPERF_INSIGHTS: {
        UNDERPERFORMING: 'stock-insights-underperforming',
        SECTOR_ALLOCATION: 'stock-insights-sector-allocation',
        MARKETCAP_ALLOC: 'stock-insights-marketcap-allocation',
      },
  
      HOLDINGS_STOCKS: 'stock-holdings',
  
      FUND_DETAILS: {
        ASSET_ALLOCATION: 'fund-details-asset-allocation',
        METRICS: 'fund-details-metrics',
        SECTORWISE_EQU_ALLOC: 'fund-details-sectorwise-equ-alloc',
        TOPHOLDINGS: 'fund-details-topholdings',
        EXPANDED_VIEW: {
          ASSET_ALLOCATION: 'assetalloc-expandedview',
          METRICS: 'metrics-expandedview',
          SECTORWISE_EQU_ALLOC: 'sectorwise-equ-alloc-expandedview',
          TOPHOLDINGS: 'topholings-expandedview',
        },
      },
  
      HOME_SCREEN_SHORTS: 'homescreen-short-',
  
      CHAT_COMPONENTS: {
        MF_PANEL: 'chat-component-mf-panel',
        STOCK_PANEL: 'chat-component-stock-panel',
        AI_Insights: 'chat-component-ai-insights',
        Select_Bank: 'chat-component-select-bank',
        Error: 'chat-component-error',
        Test_Profile: 'chat-component-select-test-profile',
        GOAL_FORM: 'chat-component-goal-form',
        ASSET_ALLOCATION: 'chat-component-asset-allocation',
        EQUITY_BREAKUP: 'chat-component-equity-breakup',
        FUND_ALLOCATION: 'chat-component-fund-allocation',
        NETWORTH: 'chat-component-networth',
      },
  
      SHORTS: {
        LEFT_TAP: 'shorts-left-tap',
        RIGHT_TAP: 'shorts-right-tap',
      },
    },
  
    MFPERF_INSIGHTS_EXPANDED_VIEW: {
      UNDERPERFORMING_FUNDS: 'mfs-underperforming-expanded-view',
      SECTOR_ALLOCATION: 'mfs-allocation-expanded-view',
      MARKETCAP_ALLOC: 'mfs-marketcap-allocation-expanded-view',
      TOPHOLDINGS: 'mfs-topholdings-expanded-view',
    },
  
    STOCKPERF_INSIGHTS_EXPANDED_VIEW: {
      UNDERPERFORMING: 'stocks-underperforming-expanded-view',
      SECTOR_ALLOCATION: 'stocks-sector-allocation-expanded-view',
      MARKETCAP_ALLOC: 'stocks-marketcap-allocation-expanded-view',
    },
  };
  
  export const PERF_YEARS = {
    ONE_YR: '1-year',
    THREE_YR: '3-years',
    FIVE_YR: '5-years',
    ALL_YR: 'all-years',
  };
  
  export const PERF_YEAR_TO_CHART = {
    [PERF_YEARS.ONE_YR]: PERF_YEARS.ONE_YR + '-chart',
    [PERF_YEARS.THREE_YR]: PERF_YEARS.THREE_YR + '-chart',
    [PERF_YEARS.FIVE_YR]: PERF_YEARS.FIVE_YR + '-chart',
    [PERF_YEARS.ALL_YR]: PERF_YEARS.ALL_YR + '-chart',
  };
  
  export const FHD_ITEM_ID = {
    // Text content testIDs (for items without status icons)
    net_worth: 'net_worth-loader',
    risk_profile: 'risk_profile-loader',
    monthly_sip: 'monthly_sip-loader',
    fds: 'fds-loader',
  };
  
  export const FHD_ITEM_STATUS_ID = {
    // Status icon testIDs (for items with status icons)
    emergency_fund: 'emergency_fund-status',
    health_cover: 'health_cover-status',
    savings_ratio: 'savings_ratio-status',
    life_insurance: 'life_insurance-status',
    nominees: 'nominees-status',
    mf_commission: 'mf_commission-status',
  };
  
  // Expose to Maestro when run as a script
  try {
    if (typeof output !== 'undefined' && output) {
      output.ids = Ids;
      output.PERF_YEARS = PERF_YEARS;
      output.PERF_YEAR_TO_CHART = PERF_YEAR_TO_CHART;
      output.FHD_ITEM_ID = FHD_ITEM_ID;
      output.FHD_ITEM_STATUS_ID = FHD_ITEM_STATUS_ID;
      output.env = {
        BUTTONID: '',
        CHARTID: '',
        counter: 0,
        PERF: '',
        SCREENID: '',
        fhdCheckCount: 0,
        AIINSIGHTS: '',
        currentIndex: 0,
        currentRating: '',
        currentExpandedView: '',
        isVisible: false,
        queries: [],
        totalQueries: 0,
      };
    }
  } catch (_) {}
  
  // Support both CommonJS (for Maestro) and default-like access (for Metro/Babel interop)
  // eslint-disable-next-line no-undef
  if (typeof module !== 'undefined') {
    // eslint-disable-next-line no-undef
    // module.exports = Ids;
    // Also mirror on exports.default for ESM-like default interop
    // eslint-disable-next-line no-undef
    // exports.default = Ids;
    // exports.default = Ids
  }
  
  export default Ids;
  
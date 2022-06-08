import {OBAccount2, OBActiveOrHistoricCurrencyAndAmount, OBCashAccount3, OBCashBalance1} from './ob';
import {IntentType} from '../../../src/app/types/IntentType';
import {OBAccountPermissions} from '../../../src/app/types/OBAccountPermissions';

export interface FRAccountWithBalance {
  id: string;
  userId: string;
  updated: string;
  account: OBAccount2;
  balances: OBCashBalance1;
}

export module ApiResponses {
  export interface ConsentDetailsResponse {
    redirectUri: string;
    decisionApiUri: string;
    intentType: IntentType;
    accounts: FRAccountWithBalance[];
    username: string;
    logo: string;
    clientId: string;
    clientName: string;
    merchantName: string;
    aispName?: string;
    pispName?: string;
    aspspName?: string;
    // optional
    permissions?: OBAccountPermissions[];
    expiredDate?: string;
    fromTransaction?: string;
    toTransaction?: string;
    account: OBAccount2;
    debtorAccount?: OBCashAccount3; // vrp payment
    creditorAccount?: OBCashAccount3; // vrp payment
    controlParameters?: ControlParameters; // vrp payment
    debtorReference?: string; // vrp payment
    standingOrder?: {
      Frequency: string;
      Reference: string;
      FirstPaymentDateTime: string;
      FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount;
      NextPaymentDateTime: string;
      NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount;
      FinalPaymentDateTime: string;
      FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount;
    };
    paymentDate?: string; // domestic scheduled payment
    instructedAmount?: OBActiveOrHistoricCurrencyAndAmount;
    rate?: Rate;
    numberOfTransactions?: string;
    totalAmount?: string;
    paymentReference?: string;
    fileReference?: string;
    requestedExecutionDateTime?: string;
    currencyOfTransfer?: string;
    expirationDateTime?: string;
    // special ui treatment
    userActions?: UserActions
    decisionResponse?: ConsentDecisionResponse
  }

  export interface ConsentDecisionResponse {
    consentJwt: string;
    requestMethod: string;
    redirectUri: string
  }

  export interface UserActions {
    acceptedByUser?: boolean;
    rejectedByUser?: boolean;
    canceledByUser?: boolean;
    cancelRedirectUri?: string;
  }
}

export class Rate {
  RateType: string;
  UnitCurrency: string;
  ExchangeRate: number;
  ContractIdentification: string;
}

export class ControlParameters {
  validFromDateTime?: string;
  validToDateTime?: string;
  maximumIndividualAmount?:OBActiveOrHistoricCurrencyAndAmount;
  periodicLimits?: PeriodicLimits;
  vrpType: string;
  psuAuthenticationMethods: string[]
}

export class PeriodicLimits {
  periodType?: string;
  periodAlignment?: string;
  amount?: number;
  currency?: string;
}

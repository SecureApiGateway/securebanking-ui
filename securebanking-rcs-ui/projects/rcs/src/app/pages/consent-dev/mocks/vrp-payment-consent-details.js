module.exports = {
  type: "DomesticVrpPaymentConsentDetails",
  decisionApiUri: "/api/rcs/consent/decision/",
  username: "testUserName",
  userId: "c7303aee-2ff1-44b5-b21f-a7a3aaf39271",
  logo: "https://www.vhv.rs/dpng/d/455-4556963_warner-bros-logo-warner-brothers-logo-png-transparent.png",
  clientId: "8c57af60-39ef-4eec-8309-d17d026843ac",
  clientName: "TPP Test application",
  serviceProviderName: "Forgerock Bank simulation config",
  initiation: {
    type: "FRWriteDomesticVRPDataInitiation",
    debtorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "09090021325555",
      name: "ACME Inc",
      secondaryIdentification: "0002"
    },
    creditorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "08080021325698",
      name: "ACME Inc",
      secondaryIdentification: "0002"
    },
    remittanceInformation: {
      unstructured: "Internal ops code 5120101",
      reference: "FRESCO-101"
    }
  },
  accounts: [
    {
      id: "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
      userId: "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
      account: {
        accountId: "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
        status: "Enabled",
        statusUpdateDateTime: "2023-01-11T07:00:05.000Z",
        currency: "GBP",
        accountType: "Personal",
        accountSubType: "CurrentAccount",
        nickname: "UK Bills",
        openingDate: "2023-01-10T07:00:05.000Z",
        maturityDate: "2023-01-12T07:00:05.000Z",
        accounts: [
          {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "38988076757714",
            name: "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
            secondaryIdentification: "16282771"
          }
        ]
      },
      latestStatementId: "f9ad6fe2-7a2e-4f44-ad58-d87c4f6e110c",
      created: "2023-01-11T07:00:05.000Z",
      balances: [
        {
          accountId: "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
          creditDebitIndicator: "Debit",
          type: "InterimAvailable",
          dateTime: "2023-01-11T07:00:06.000Z",
          amount: {
            amount: "7853.64",
            currency: "GBP"
          }
        }
      ]
    }
  ],
  controlParameters: {
    ValidFromDateTime: "2022-11-28T11:35:30.510Z",
    ValidToDateTime: "2022-11-28T11:35:30.510Z",
    MaximumIndividualAmount: {
      Amount: "10.01",
      Currency: "GBP"
    },
    PeriodicLimits: [
      {
        PeriodType: "Month",
        PeriodAlignment: "Calendar",
        Amount: "10.01",
        Currency: "GBP"
      }
    ],
    VRPType: [
      "UK.OBIE.VRPType.Sweeping"
    ],
    PSUAuthenticationMethods: [
      "UK.OBIE.SCANotRequired"
    ]
  },
  intentType: "DOMESTIC_VRP_PAYMENT_CONSENT"
}


// {
//   "type": "DomesticVrpPaymentConsentDetails",
//   "consentId": "DVRP_601aef75-6ee7-4ae0-9de6-b3c6878a43e0",
//   "decisionApiUri": "/api/rcs/consent/decision/",
//   "username": "psu4test",
//   "userId": "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
//   "logo": "https://forgerock.com",
//   "clientId": "4d393de4-8419-4d65-aba1-dd5686619600",
//   "clientName": "Automating-testing",
//   "serviceProviderName": "Forgerock Bank simulation config",
//   "accounts": [
//   {
//     "id": "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
//     "userId": "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
//     "account": {
//       "accountId": "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
//       "status": "Enabled",
//       "statusUpdateDateTime": "2023-01-11T07:00:05.000Z",
//       "currency": "GBP",
//       "accountType": "Personal",
//       "accountSubType": "CurrentAccount",
//       "nickname": "UK Bills",
//       "openingDate": "2023-01-10T07:00:05.000Z",
//       "maturityDate": "2023-01-12T07:00:05.000Z",
//       "accounts": [
//         {
//           "schemeName": "UK.OBIE.SortCodeAccountNumber",
//           "identification": "3898807675771",
//           "name": "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
//           "secondaryIdentification": "16282771"
//         }
//       ],
//       "firstAccount": {
//         "schemeName": "UK.OBIE.SortCodeAccountNumber",
//         "identification": "3898807675771",
//         "name": "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
//         "secondaryIdentification": "16282771"
//       }
//     },
//     "latestStatementId": "f9ad6fe2-7a2e-4f44-ad58-d87c4f6e110c",
//     "created": "2023-01-11T07:00:05.000Z",
//     "balances": [
//       {
//         "accountId": "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50",
//         "creditDebitIndicator": "Debit",
//         "type": "InterimAvailable",
//         "dateTime": "2023-01-11T07:00:06.000Z",
//         "amount": {
//           "amount": "7853.64",
//           "currency": "GBP"
//         }
//       }
//     ]
//   }
// ],
//   "initiation": {
//   "type": "FRWriteDomesticVRPDataInitiation",
//     "debtorAccount": {
//     "schemeName": "UK.OBIE.SortCodeAccountNumber",
//       "identification": "3898807675771",
//       "name": "3ee885ee-ae0b-45a5-b061-8c19fdaab76f",
//       "secondaryIdentification": "16282771",
//       "accountId": "8614e6bf-2ba3-40eb-9fd4-5a4d77785f50"
//   },
//   "creditorAccount": {
//     "schemeName": "UK.OBIE.SortCodeAccountNumber",
//       "identification": "08080021325698",
//       "name": "Mr Tim Burgess",
//       "secondaryIdentification": "11"
//   },
//   "remittanceInformation": {
//     "unstructured": "Internal ops code 5120103",
//       "reference": "FRESCO-037"
//   }
// },
//   "controlParameters": {
//   "ValidFromDateTime": "2022-11-09T08:17:08.000Z",
//     "ValidToDateTime": "2022-11-19T08:17:08.000Z",
//     "MaximumIndividualAmount": {
//     "Amount": "10.01",
//       "Currency": "GBP"
//   },
//   "PeriodicLimits": [
//     {
//       "PeriodType": "Month",
//       "PeriodAlignment": "Calendar",
//       "Amount": "10.01",
//       "Currency": "GBP"
//     }
//   ],
//     "VRPType": [
//     "UK.OBIE.VRPType.Sweeping"
//   ],
//     "PSUAuthenticationMethods": [
//     "UK.OBIE.SCANotRequired"
//   ]
// },
//   "intentType": "DOMESTIC_VRP_PAYMENT_CONSENT"
// }

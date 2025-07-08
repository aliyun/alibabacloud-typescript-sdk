// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsUserTagsNewResponseBody extends $dara.Model {
  isAnyParamTemplateUser?: boolean;
  isBatchCreateSmsSign?: boolean;
  isInnerUser?: boolean;
  isNewUser?: boolean;
  isNoneStatusNoChargeCust?: boolean;
  isOpenTemplateRule?: boolean;
  isOpenedCard?: boolean;
  isOpenedDigit?: boolean;
  isOpenedInternationalSms?: boolean;
  isOpenedMarket?: boolean;
  isOpenedSaas?: boolean;
  isOpenedSmppStandardProtocol?: boolean;
  isOpenedStandardProtocol?: boolean;
  isVirtualCust?: boolean;
  requestId?: boolean;
  signCheckCommon?: boolean;
  signCheckVerification?: boolean;
  smsInformationSupervision?: boolean;
  static names(): { [key: string]: string } {
    return {
      isAnyParamTemplateUser: 'IsAnyParamTemplateUser',
      isBatchCreateSmsSign: 'IsBatchCreateSmsSign',
      isInnerUser: 'IsInnerUser',
      isNewUser: 'IsNewUser',
      isNoneStatusNoChargeCust: 'IsNoneStatusNoChargeCust',
      isOpenTemplateRule: 'IsOpenTemplateRule',
      isOpenedCard: 'IsOpenedCard',
      isOpenedDigit: 'IsOpenedDigit',
      isOpenedInternationalSms: 'IsOpenedInternationalSms',
      isOpenedMarket: 'IsOpenedMarket',
      isOpenedSaas: 'IsOpenedSaas',
      isOpenedSmppStandardProtocol: 'IsOpenedSmppStandardProtocol',
      isOpenedStandardProtocol: 'IsOpenedStandardProtocol',
      isVirtualCust: 'IsVirtualCust',
      requestId: 'RequestId',
      signCheckCommon: 'SignCheckCommon',
      signCheckVerification: 'SignCheckVerification',
      smsInformationSupervision: 'SmsInformationSupervision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAnyParamTemplateUser: 'boolean',
      isBatchCreateSmsSign: 'boolean',
      isInnerUser: 'boolean',
      isNewUser: 'boolean',
      isNoneStatusNoChargeCust: 'boolean',
      isOpenTemplateRule: 'boolean',
      isOpenedCard: 'boolean',
      isOpenedDigit: 'boolean',
      isOpenedInternationalSms: 'boolean',
      isOpenedMarket: 'boolean',
      isOpenedSaas: 'boolean',
      isOpenedSmppStandardProtocol: 'boolean',
      isOpenedStandardProtocol: 'boolean',
      isVirtualCust: 'boolean',
      requestId: 'boolean',
      signCheckCommon: 'boolean',
      signCheckVerification: 'boolean',
      smsInformationSupervision: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


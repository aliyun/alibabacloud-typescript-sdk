// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappBindWabaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The review state of the WhatsApp Business account (WABA).
   * 
   * >  Valid values:
   * 
   * *   PENDING: The WABA is to be reviewed.
   * 
   * *   APPROVED: The WABA was approved.
   * 
   * *   REJECTED: The WABA was rejected.
   * 
   * *   DISABLED: The WABA was forbidden.
   * 
   * @example
   * APPROVED
   */
  accountReviewStatus?: string;
  /**
   * @remarks
   * WABA related information.
   */
  authInternationalRateEligibility?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the business platform.
   * 
   * @example
   * 19293988***
   */
  businessId?: string;
  /**
   * @remarks
   * The name of the business platform.
   * 
   * @example
   * Alibaba
   */
  businessName?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the WhatsApp Business account.
   * 
   * @example
   * 20393988393993***
   */
  id?: string;
  /**
   * @example
   * Y
   */
  marketingMessageLiteStatus?: string;
  /**
   * @remarks
   * The namespace of the message template.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  messageTemplateNamespace?: string;
  /**
   * @remarks
   * The name of the WhatsApp Business account.
   * 
   * @example
   * Alibaba
   */
  name?: string;
  /**
   * @remarks
   * The start time when the authentication-international rate applies.
   * 
   * @example
   * "start_time":1721952000
   */
  primaryBusinessLocation?: string;
  static names(): { [key: string]: string } {
    return {
      accountReviewStatus: 'AccountReviewStatus',
      authInternationalRateEligibility: 'AuthInternationalRateEligibility',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      currency: 'Currency',
      id: 'Id',
      marketingMessageLiteStatus: 'MarketingMessageLiteStatus',
      messageTemplateNamespace: 'MessageTemplateNamespace',
      name: 'Name',
      primaryBusinessLocation: 'PrimaryBusinessLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountReviewStatus: 'string',
      authInternationalRateEligibility: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessId: 'string',
      businessName: 'string',
      currency: 'string',
      id: 'string',
      marketingMessageLiteStatus: 'string',
      messageTemplateNamespace: 'string',
      name: 'string',
      primaryBusinessLocation: 'string',
    };
  }

  validate() {
    if(this.authInternationalRateEligibility) {
      $dara.Model.validateMap(this.authInternationalRateEligibility);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


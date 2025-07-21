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
   * The business ID.
   * 
   * @example
   * 19293988***
   */
  businessId?: string;
  /**
   * @remarks
   * The business name.
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
   * @remarks
   * The Marketing Messaging Lite status.
   * 
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

export class QueryChatappBindWabaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryChatappBindWabaResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryChatappBindWabaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


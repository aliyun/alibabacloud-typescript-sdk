// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappBindWabaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account review status. Valid values:
   * 
   * - `PENDING`: The account is under review.
   * 
   * - `APPROVED`: The account is approved.
   * 
   * - `REJECTED`: The account is rejected.
   * 
   * - `DISABLED`: The account is disabled.
   * 
   * @example
   * APPROVED
   */
  accountReviewStatus?: string;
  /**
   * @remarks
   * Details about the WABA account.
   */
  authInternationalRateEligibility?: { [key: string]: any };
  /**
   * @remarks
   * The Business platform ID.
   * 
   * @example
   * 19293988***
   */
  businessId?: string;
  /**
   * @remarks
   * The Business platform name.
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
   * The WABA account ID.
   * 
   * @example
   * 20393988393993***
   */
  id?: string;
  /**
   * @example
   * N
   */
  isOnBizApp?: string;
  /**
   * @remarks
   * The MML status.
   * 
   * @example
   * Y
   */
  marketingMessageLiteStatus?: string;
  /**
   * @remarks
   * The template namespace.
   * 
   * @example
   * 93e6b26e_8a67_4163_a093_ebfe645a66b0
   */
  messageTemplateNamespace?: string;
  /**
   * @remarks
   * The WABA account name.
   * 
   * @example
   * Alibaba
   */
  name?: string;
  /**
   * @remarks
   * The international rate capability qualification.
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
      isOnBizApp: 'IsOnBizApp',
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
      isOnBizApp: 'string',
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
   * The access denial details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of `OK` indicates the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryChatappBindWabaResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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


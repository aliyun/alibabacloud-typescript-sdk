// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerAccountInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the account. A value of 1 indicates an enterprise account. A value of 0 indicates an individual account.
   * 
   * @example
   * 1
   */
  accountType?: string;
  /**
   * @remarks
   * The business status of the customer. Valid values:
   * 
   * Freeze: The business is frozen.
   * 
   * Thaw: The business is unfrozen.
   * 
   * Trusteeship: The business is hosted.
   * 
   * TrusteeshipCancel: The business is not hosted.
   * 
   * @example
   * Freeze
   */
  creditLimitStatus?: string;
  /**
   * @remarks
   * The hosting status of the credit information and instances of the customer. If the credit information and instances of the customer are managed on Alibaba Cloud, Alibaba Cloud suspends a customer service upon overdue payment. Valid values:
   * 
   * FREEZE: The business of the customer is frozen.
   * 
   * TRUSTEESHIP: The business of the customer is hosted.
   * 
   * @example
   * FREEZE
   */
  hostingStatus?: string;
  /**
   * @remarks
   * Indicates whether the account passes the real-name verification.
   * 
   * @example
   * true
   */
  isCertified?: boolean;
  /**
   * @remarks
   * The email address of the customer.
   * 
   * @example
   * xxxx@aliyun.com
   */
  loginEmail?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 1051360339779133
   */
  mpk?: number;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      creditLimitStatus: 'CreditLimitStatus',
      hostingStatus: 'HostingStatus',
      isCertified: 'IsCertified',
      loginEmail: 'LoginEmail',
      mpk: 'Mpk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      creditLimitStatus: 'string',
      hostingStatus: 'string',
      isCertified: 'boolean',
      loginEmail: 'string',
      mpk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCustomerAccountInfoResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94017C56-1725-5DD9-AB41-B3BAE791D600
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomerAccountInfoResponseBodyData,
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


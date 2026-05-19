// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubResellerRequestAccountInfoList extends $dara.Model {
  /**
   * @remarks
   * Name of the distribution customer:
   * - If the distribution customer is a company, this is the company name.
   * - If the distribution customer is a T2 reseller partner, this is the partner name.
   * 
   * @example
   * XXX技术有限公司
   */
  accountNickname?: string;
  /**
   * @remarks
   * Total budget quota allocated by the partner to the distribution customer (quota).
   * 
   * @example
   * 100
   */
  creditLine?: string;
  /**
   * @remarks
   * Reason for applying for cross-regional association.
   * 
   * @example
   * XXX
   */
  crossScopeRemark?: string;
  /**
   * @remarks
   * Customer Business Manager (limited to 50 characters).
   * 
   * @example
   * 张三
   */
  customerBd?: string;
  /**
   * @remarks
   * The email address to which the invitation email will be sent.
   * 
   * @example
   * nejatox206@getasail.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * Initial order status:
   * 
   * - ban: Purchase Ban - The customer cannot place orders immediately after successful registration and association. The \\"Order Control\\" must be set to \\"Normal\\" before placing orders.
   * - normal: Normal - The customer can place orders immediately after successful registration and association.
   * 
   * @example
   * Normal
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Country or region of the invited T2 Reseller. The parameter should comply with the ISO 3166-1 two-letter code (Alpha-2). You can use the ListCountries API to get the current UID contract coverage area list.
   * 
   * The system will automatically determine if the invitation is cross-regional based on whether the `registerNation` parameter is within the T1 contract coverage area:
   * 
   * - If it\\"s a cross-regional invitation, a cross-regional approval process will be initiated. After approval by Alibaba Cloud, an invitation registration email will be sent to the invited email address.
   * - If it\\"s not a cross-regional invitation, an invitation registration email will be sent directly.
   * 
   * @example
   * SG
   */
  registerNation?: string;
  /**
   * @remarks
   * Description of the distribution customer.
   * 
   * @example
   * 发展xx为客户的邀请
   */
  remark?: string;
  /**
   * @remarks
   * Do not fill in, deprecated parameter.
   * 
   * @example
   * 5
   */
  subAccountType?: string;
  /**
   * @remarks
   * Management of the shutdown policy for the distribution customer by the partner.
   * 
   * - 1: delayStop - Enjoy delayed shutdown with a grace period: Alibaba Cloud takes over the resources, and when the grace period quota is exhausted, the instance will be shut down. If payment is not made within 15 days, the storage resources will be released.
   * - 2: noStop - Manual management of overdue without stopping: The system does not manage the lifecycle of the sub-account\\"s resources. The partner needs to manually manage the shutdown status of the customer\\"s instances.
   * - 3: immediatelyStop - Immediate shutdown upon overdue: When the available quota of the customer\\"s account is less than 0, the account enters an overdue state, triggering the shutdown of the instance.
   * 
   * @example
   * 1
   */
  zeroCreditShutdownPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      creditLine: 'CreditLine',
      crossScopeRemark: 'CrossScopeRemark',
      customerBd: 'CustomerBd',
      emailAddress: 'EmailAddress',
      newBuyStatus: 'NewBuyStatus',
      registerNation: 'RegisterNation',
      remark: 'Remark',
      subAccountType: 'SubAccountType',
      zeroCreditShutdownPolicy: 'ZeroCreditShutdownPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      creditLine: 'string',
      crossScopeRemark: 'string',
      customerBd: 'string',
      emailAddress: 'string',
      newBuyStatus: 'string',
      registerNation: 'string',
      remark: 'string',
      subAccountType: 'string',
      zeroCreditShutdownPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubResellerRequest extends $dara.Model {
  /**
   * @remarks
   * List of invited account information, up to 5 at a time.
   */
  accountInfoList?: InviteSubResellerRequestAccountInfoList[];
  static names(): { [key: string]: string } {
    return {
      accountInfoList: 'AccountInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoList: { 'type': 'array', 'itemType': InviteSubResellerRequestAccountInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.accountInfoList)) {
      $dara.Model.validateArray(this.accountInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


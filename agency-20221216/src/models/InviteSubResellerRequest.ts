// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubResellerRequestAccountInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the distribution customer.
   * - If the distribution customer is an enterprise, this is the company name.
   * - If the distribution customer is a T2 Reseller partner, this is the partner name.
   * 
   * @example
   * XXX技术有限公司
   */
  accountNickname?: string;
  /**
   * @remarks
   * The total budget quota that the partner allocates to the distribution customer.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  /**
   * @remarks
   * The reason for applying for a cross-region association.
   * 
   * @example
   * XXX
   */
  crossScopeRemark?: string;
  /**
   * @remarks
   * The customer account manager. The value can be up to 50 characters in length.
   * 
   * @example
   * 张三
   */
  customerBd?: string;
  /**
   * @remarks
   * The email address to which the invitation email is sent.
   * 
   * @example
   * nejatox206@getasail.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The initial order placement status. Valid values:
   * 
   * - ban: Purchase is prohibited. After the customer is registered and associated, the customer cannot place orders to purchase cloud resources immediately. You must set the order control to Normal before the customer can place orders.
   * - normal: Normal. After the customer is registered and associated, the customer can place orders to purchase cloud resources immediately.
   * 
   * @example
   * Normal
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * The country or region of the invited T2 Reseller. The value must comply with the ISO 3166-1 alpha-2 code. You can call the ListCountries operation to query the contract coverage area list of the current UID.
   * 
   * The system automatically determines whether the invitation is cross-region based on whether this parameter falls within the T1 contract coverage area.
   * 
   * - If the invitation is cross-region, a cross-region invitation approval process is initiated. After the approval is granted, an invitation registration email is sent to the specified email address.
   * - If the invitation is not cross-region, an invitation registration email is sent directly.
   * 
   * @example
   * SG
   */
  registerNation?: string;
  /**
   * @remarks
   * The description of the distribution customer.
   * 
   * @example
   * 发展xx为客户的邀请
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * 5
   */
  subAccountType?: string;
  /**
   * @remarks
   * The shutdown policy that the partner sets for the distribution customer.
   * 
   * - 1: delayStop. The account uses the delayed shutdown quota for deferred instance shutdown. Alibaba Cloud takes over the resources. When the delayed shutdown quota is exhausted, instance shutdown is triggered. If the payment is not made within 15 days, storage resources are released.
   * - 2: noStop. Manual management with no shutdown on overdue payment. The system does not manage the resource lifecycle of the non-trusteeship linked account. The partner must manually manage the instance shutdown status of the customer.
   * - 3: immediatelyStop. Immediate shutdown on overdue payment. When the active quota of the customer account is less than 0, the account enters the overdue payment status and instance shutdown is triggered.
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
   * The list of account information for the invitation. A maximum of five accounts can be specified at a time.
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


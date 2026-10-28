// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubAccountRequestAccountInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the distribution customer. Valid values:
   * - If the distribution customer is an enterprise, this is the company name.
   * - If the distribution customer is a T2 reseller partner, this is the partner name.
   * 
   * This parameter is required.
   * 
   * @example
   * XXX技术有限公司
   */
  accountNickname?: string;
  /**
   * @remarks
   * The total budget quota that the partner allocates to the distribution customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  /**
   * @remarks
   * The account manager of the customer. Maximum length: 50 characters.
   * 
   * @example
   * 张三
   */
  customerBd?: string;
  /**
   * @remarks
   * The customer ID returned by the CreateCustomer API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  customerId?: string;
  /**
   * @remarks
   * The email address of the distribution customer account. The invitation email is sent to this address.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345@163.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The initial order placement status. Valid values:
   * 
   * - ban: Purchase is prohibited. After the customer is registered and associated, the customer cannot immediately place orders to purchase cloud resources. You must set the order control to normal before the customer can place orders.
   * - normal: Normal. After the customer is registered and associated, the customer can immediately place orders to purchase cloud resources.
   * 
   * This parameter is required.
   * 
   * @example
   * ban
   */
  newBuyStatus?: string;
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
   * The type of the sub-account. Valid values:
   * - 1: end user of Agency.
   * - 2: end user of Reseller. 
   * - 5: T2 partner of Reseller.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subAccountType?: string;
  /**
   * @remarks
   * The shutdown policy that the partner manages for the distribution customer. Valid values:
   * 
   * - 1: delayStop. Alibaba Cloud takes over the resources and the customer enjoys a delayed shutdown quota. When the delayed shutdown quota is exhausted, instance shutdown is triggered. If payment is not made within 15 days, storage resources are released.
   * - 2: noStop. Manual management with no shutdown on overdue payment. The system does not manage the resource lifecycle of the non-trusteeship linked account. The partner must manually manage the instance shutdown status of the customer.
   * - 3: immediatelyStop. Instances are immediately shut down on overdue payment. When the available quota of the customer account is less than 0, the account enters the overdue payment status and instance shutdown is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  zeroCreditShutdownPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      creditLine: 'CreditLine',
      customerBd: 'CustomerBd',
      customerId: 'CustomerId',
      emailAddress: 'EmailAddress',
      newBuyStatus: 'NewBuyStatus',
      remark: 'Remark',
      subAccountType: 'SubAccountType',
      zeroCreditShutdownPolicy: 'ZeroCreditShutdownPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      creditLine: 'string',
      customerBd: 'string',
      customerId: 'string',
      emailAddress: 'string',
      newBuyStatus: 'string',
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

export class InviteSubAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The list of account information for the invitation. A maximum of five accounts can be invited at a time.
   * 
   * This parameter is required.
   */
  accountInfoList?: InviteSubAccountRequestAccountInfoList[];
  static names(): { [key: string]: string } {
    return {
      accountInfoList: 'AccountInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoList: { 'type': 'array', 'itemType': InviteSubAccountRequestAccountInfoList },
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


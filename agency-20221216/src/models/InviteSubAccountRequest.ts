// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubAccountRequestAccountInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of Sub Account:</br>
   * 1. Use the official name of Company, if Sub Account is an enterprise.</br>
   * 2. Use the official name of Partner, if Sub Account is a T2 reseller.</br>
   * 
   * This parameter is required.
   * 
   * @example
   * XXX Technology LTD.
   */
  accountNickname?: string;
  /**
   * @remarks
   * The total budget Credit of Sub Account that distributed by Partner.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  customerBd?: string;
  /**
   * @remarks
   * Customer ID, Returning ID from CreateCustomer API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  customerId?: string;
  /**
   * @remarks
   * The email address of End User,  which will receive the invitation email.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345@163.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * Initial Order Status</br>
   * 1. ban：Ban the new purchase action--After End User finish registration and authorization, they can\\"t issue Cloud Resource order immediately. Partner should manually update the "Order Control" settings as "Normal" to enable new order.</br>
   * 2. normal：Normal--After End User finished registration and authorization, they can issue Cloud Resource order immediately.</br>
   * 
   * This parameter is required.
   * 
   * @example
   * ban
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Description of Sub Account.
   * 
   * @example
   * The invitation to develop XX as a Sub Account
   */
  remark?: string;
  /**
   * @remarks
   * The type of Sub Account</br>
   * 
   * 1 Agency\\"s End User</br>
   * 2 Reseller\\"s End user</br>
   * 5 Reseller\\"s T2 Partner</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subAccountType?: string;
  /**
   * @remarks
   * Partner\\"s Shutdown Policy Management for Sub Account.</br>
   * 1: delayStop. The account have Shutdown-delay Privilege,  After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.</br>
   * 2: noStop. Partner will manually manage Shutdown Status for Sub Account. Meanwhile, System would not manage the resource\\"s life-circle of Sub Account.</br>
   * 3: immediatelyStop. Once valid quota of Sub Account falls below 0 and be identified as defaulting account, it will trigger the instance shutdown immediately.</br>
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
   * List of invited account information,  less than 5 accounts at a time.</br>
   * `Sub-levels <= 5`
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


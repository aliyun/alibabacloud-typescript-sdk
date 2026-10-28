// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreditInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The credit control status of the sub-account. Valid values:
   * 1. normal: Normal.
   * 2. arrearsNotShutdown: The account has an overdue payment but is not shut down.
   * 3. shutdown: Shut down.
   * 
   * @example
   * normal
   */
  accountStatus?: string;
  /**
   * @remarks
   * The percentage value. When the available credit drops below this percentage of the credit limit, an email notification is sent to the main account.
   * 
   * @example
   * 20
   */
  alarmThreshold?: string;
  /**
   * @remarks
   * The available credit.
   * 
   * @example
   * 800
   */
  availableCredit?: string;
  /**
   * @remarks
   * The total outstanding amount of virtual bills before simulated deduction.
   * 
   * @example
   * 0.000000
   */
  consumedUndeductedValue?: string;
  /**
   * @remarks
   * The credit limit of the sub-account.
   * 
   * @example
   * 1000
   */
  creditLine?: string;
  /**
   * @remarks
   * The credit amount consumed by the sub-account that has not yet been paid.
   * 
   * @example
   * 200
   */
  outstandingBalance?: string;
  /**
   * @remarks
   * The freeze status of pay-as-you-go. Valid values:
   * - freeze: Frozen.
   * - normal: Normal.
   * 
   * @example
   * normal
   */
  PAYGFreezeStatus?: string;
  /**
   * @remarks
   * The policy that the system uses to manage resources when the active credit is 0 or less. Valid values:
   * 
   * 1: delayStop. Alibaba Cloud takes over the resources. Instances are shut down after the credit is exhausted with a delay epoch. If payment is not made within 15 days, storage resources are released.
   * 
   * 2: noStop. The system does not manage the resource lifecycle of the non-trusteeship linked account. The partner must manage it manually.
   * 
   * 3: immediatelyStop. Instances are shut down immediately when the account enters the overdue payment state, which triggers instance shutdown.
   * 
   * @example
   * delayStop
   */
  zeroCreditShutdownPolicy?: string;
  /**
   * @remarks
   * The status that manages the purchase actions of the customer. Valid values:
   * 
   * - ban: New purchases are prohibited.
   * - cancelBan: Normal status.
   * 
   * @example
   * ban
   */
  newBuyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      alarmThreshold: 'AlarmThreshold',
      availableCredit: 'AvailableCredit',
      consumedUndeductedValue: 'ConsumedUndeductedValue',
      creditLine: 'CreditLine',
      outstandingBalance: 'OutstandingBalance',
      PAYGFreezeStatus: 'PAYGFreezeStatus',
      zeroCreditShutdownPolicy: 'ZeroCreditShutdownPolicy',
      newBuyStatus: 'newBuyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      alarmThreshold: 'string',
      availableCredit: 'string',
      consumedUndeductedValue: 'string',
      creditLine: 'string',
      outstandingBalance: 'string',
      PAYGFreezeStatus: 'string',
      zeroCreditShutdownPolicy: 'string',
      newBuyStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values:
   * - 200: OK.
   * - 1109: System error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCreditInfoResponseBodyData;
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud uses this ID for error tracking.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call is successful. Valid values:
   * - True: Successful.
   * - False: Failed.
   * 
   * This does not indicate whether the subsequent business operation is successful.
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
      data: GetCreditInfoResponseBodyData,
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


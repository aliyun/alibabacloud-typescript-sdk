// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreditInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Credit Control status, Value Range:</br>
   * 1. normal - Sub Account status is running as usual.
   * 2. arrearsNotShutdown - Sub Account status is running as usual, but have outstanding bill(s).
   * 3. shutdown -  Sub Account status is down.
   * 
   * @example
   * normal
   */
  accountStatus?: string;
  /**
   * @remarks
   * Percentage value, when the available credit limit is lower than this credit limit percentage, a notification E-mail will be sent to the main account.
   * 
   * @example
   * 20
   */
  alarmThreshold?: string;
  /**
   * @remarks
   * The Credit available to consume.
   * 
   * @example
   * 800
   */
  availableCredit?: string;
  /**
   * @remarks
   * Obtain total unpaid amount on demo bill before simulated deduction.
   * 
   * @example
   * 0.000000
   */
  consumedUndeductedValue?: string;
  /**
   * @remarks
   * The Credit Line of Sub Account
   * 
   * @example
   * 1000
   */
  creditLine?: string;
  /**
   * @remarks
   * The Credit have been consumed by Sub Account, and haven\\"t be paid.
   * 
   * @example
   * 200
   */
  outstandingBalance?: string;
  /**
   * @remarks
   * The systematic controlling policy for resource management, specifically when the available Credit of Sub Account falls to 0 or less.</br>
   * 
   * - 1: delayStop. The account have Shutdown-delay Privilege,  After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.</br>
   * - 2: noStop. Partner will manually manage Shutdown Status for Sub Account. Meanwhile, System would not manage the resource\\"s life-circle of Sub Account.</br>
   * - 3: immediatelyStop. Once valid quota of Sub Account falls below 0 and be identified as defaulting account, it will trigger the instance shutdown immediately.</br>
   * 
   * @example
   * delayStop
   */
  zeroCreditShutdownPolicy?: string;
  /**
   * @remarks
   * Manage order operation.
   * - ban：Ban the new purchase action.
   * - normal：The account could raise new purchase order as usual.
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
   * Result Code:
   * - 200 OK
   * - 1109 System Error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCreditInfoResponseBodyData;
  /**
   * @remarks
   * Message Information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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


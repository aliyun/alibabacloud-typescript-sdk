// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * - **China Mobile**.
   * 
   * - **China Unicom**.
   * 
   * - **China Telecom**.
   * 
   * @example
   * 中国移动
   */
  basicCarrier?: string;
  /**
   * @remarks
   * Indicates whether the verification results are consistent. Returned values:
   * 
   * - **1**: Consistent
   * - **0**: Inconsistent
   * - **2**: Not found
   * >The data update timeliness varies by carrier and city, and is typically between T+1 and T+3.
   * The verification results for mobile phone numbers of different carriers in different states are as follows: 
   * 
   * |Carrier/Mobile Phone Number Status|Suspended|Empty Number|Deregistered|
   * |--|--|--|--|
   * |China Mobile|Normal verification|Not found|Not found|
   * |China Unicom|Normal verification|Inconsistent|Inconsistent|
   * |China Telecom|Normal verification|Not found|Not found|
   * 
   * @example
   * 1
   */
  isConsistent?: number;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      isConsistent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThreeElementsVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * - **OK**: The request was successful.
   * - For other error codes, see the error code table in this chapter.
   * - **RequestFrequencyLimit**: Due to carrier restrictions, repeated high-frequency queries on the same number within a short period are prohibited. If this error code is returned, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ThreeElementsVerificationResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ThreeElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
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


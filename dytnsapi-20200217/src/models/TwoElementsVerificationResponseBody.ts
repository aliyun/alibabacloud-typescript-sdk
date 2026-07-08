// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TwoElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic operator. Valid values:
   * 
   * - **China Mobile**.
   * 
   * - **China Unicom**.
   * 
   * - **China Telecom**.
   * 
   * >Notice: China Broadcasting Network numbers are not currently supported.
   * 
   * @example
   * 中国移动
   */
  basicCarrier?: string;
  /**
   * @remarks
   * Indicates whether the verification result is consistent. Returns:
   * 
   * - **1**: Consistent.
   * 
   * - **0**: Inconsistent.
   * 
   * - **2**: Not found.
   * 
   * The data update timeliness for different operators and cities is typically T+1 to T+3.
   * The verification results for different operator phone numbers in different states are as follows: 
   * 
   * |Operator/Phone Number Status|Suspended|Empty Number|Cancelled|
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

export class TwoElementsVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * - **OK**: The request was successful.
   * 
   * - For other error codes, see the error code table in this chapter.
   * - **RequestFrequencyLimit**: Due to operator restrictions, repeated high-frequency queries against the same number or name in a short period are prohibited. If this error code is returned, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The structure.
   */
  data?: TwoElementsVerificationResponseBodyData;
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE****
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
      data: TwoElementsVerificationResponseBodyData,
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


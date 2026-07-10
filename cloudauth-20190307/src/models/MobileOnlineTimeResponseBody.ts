// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineTimeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - 1: Consistent.
   * - 2: Inconsistent.
   * - 3: No record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The name of the telecommunications service provider. Valid values:
   * 
   * - CMCC: China Mobile. 
   * - CUCC: China Unicom. 
   * - CTCC: China Telecom.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The network duration code. Valid values:
   * - 1: [0,3) indicates a network duration of 0 to 3 months.
   * - 2: [3,6) indicates a network duration of 3 to 6 months.
   * - 3: [6,12) indicates a network duration of 6 to 12 months.
   * - 4: [12,24) indicates a network duration of 12 to 24 months.
   * - 5: [24,+) indicates a network duration of more than 24 months.
   * 
   * @example
   * 5
   */
  timeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      timeCode: 'TimeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
      timeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: MobileOnlineTimeResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: MobileOnlineTimeResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


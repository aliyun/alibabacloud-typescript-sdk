// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineTimeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result code.
   * - 1: Verification consistent
   * - 2: Verification inconsistent
   * - 3: No record found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Operator name
   * 
   * - CMCC: China Mobile 
   * - CUCC: China Unicom 
   * - CTCC: China Telecom
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * - 1: [0,3) indicates the online duration is 0~3 months 
   * - 2: [3,6) indicates the online duration is 3~6 months 
   * - 3: [6,12) indicates the online duration is 6~12 months 
   * - 4: [12,24) indicates the online duration is 12~24 months 
   * - 5: [24,+) indicates the online duration is more than 24 months
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
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
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


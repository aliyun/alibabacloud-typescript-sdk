// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineStatusResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result
   * 
   * - 1: Available online 
   * - 2: Not available online (see subCode for details)
   * - 3: No query result
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * ISP name
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
   * Verification details
   * 
   * - 101: Available online 
   * - 201: Suspended 
   * - 202: Disconnected 
   * - 203: Online but not available 
   * - 204: Not online 
   * - 301: No record found
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponseBody extends $dara.Model {
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
  resultObject?: MobileOnlineStatusResponseBodyResultObject;
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
      resultObject: MobileOnlineStatusResponseBodyResultObject,
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


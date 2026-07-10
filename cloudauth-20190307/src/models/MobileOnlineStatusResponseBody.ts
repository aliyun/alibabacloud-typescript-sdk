// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileOnlineStatusResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - 1: active and available. 
   * - 2: not in an active and available state. For more information, see subCode.
   * - 3: no query result.
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
   * The verification details. Valid values:
   * 
   * - 101: active and available. 
   * - 201: suspended. 
   * - 202: canceled. 
   * - 203: active but unavailable. 
   * - 204: not active. 
   * - 301: no record found.
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


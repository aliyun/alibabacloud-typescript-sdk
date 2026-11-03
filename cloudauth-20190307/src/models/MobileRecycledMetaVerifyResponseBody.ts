// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The query result. Valid values:
   * 
   * - 1: A query result is returned.
   * - 3: No query result is returned.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The ISP name. Valid values: China Mobile - CMCC, China Unicom - CUCC, and China Telecom - CTCC.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The detailed verification result. Valid values:
   * 
   * - 101: The registration time is later than or equal to the activation time of the mobile phone number.
   * - 102: The registration time is earlier than the activation time of the mobile phone number.
   * - 103: The newly activated user is not synchronized.
   * - 301: Data exception or disconnected user.
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

export class MobileRecycledMetaVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * Important
   * - This parameter indicates whether the API operation was called successfully. For detailed return code descriptions, see Error codes.
   * - To view the business verification result, check the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: MobileRecycledMetaVerifyResponseBodyResultObject;
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
      resultObject: MobileRecycledMetaVerifyResponseBodyResultObject,
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


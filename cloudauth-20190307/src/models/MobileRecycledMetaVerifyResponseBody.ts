// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The query result. Valid values:
   * 
   * - 1: A query result is found.
   * - 3: No query result is found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The carrier name. China Mobile: CMCC. China Unicom: CUCC. China Telecom: CTCC.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The detailed verification result. Valid values:
   * 
   * - 101: The registration date is equal to or later than the phone number activation date.
   * - 102: The registration date is earlier than the phone number activation date.
   * - 103: The new subscriber has not been synchronized yet.
   * - 301: Data exception or the subscriber has been deactivated.
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
   * The response code. A value of 200 indicates success. Any other value indicates failure.
   * > **Important**
   * - This parameter indicates whether the API operation is called correctly. For more information about return codes, see error codes.
   * - Check the business verification result in the fields of ResultObject.
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


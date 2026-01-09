// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
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
   * @example
   * 200
   */
  code?: string;
  /**
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


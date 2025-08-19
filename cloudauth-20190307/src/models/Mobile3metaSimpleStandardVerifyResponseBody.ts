// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaSimpleStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result:
   * 
   * - 1: Consistent (billable)
   * - 2: Inconsistent (billable)
   * - 3: No record found (non-billable)
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Operator name:
   * 
   * - **CMCC**: China Mobile.
   * - **CUCC**: China Unicom.
   * - **CTCC**: China Telecom.
   * - **CBCC**: China Broadcasting Network.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleStandardVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 for success, others for failure
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
   * ID of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
   */
  resultObject?: Mobile3MetaSimpleStandardVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaSimpleStandardVerifyResponseBodyResultObject,
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


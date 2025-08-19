// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result code:
   * - **1**: Verification consistent.
   * - **2**: Verification inconsistent.
   * - **3**: No record found.
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
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * Detailed verification results:
   * 
   * - **101**: Verification passed.
   * - **201**: Mobile number and name do not match, mobile number and ID number do not match.
   * - **202**: Mobile number and name match, but mobile number and ID number do not match.
   * - **203**: Mobile number and ID number match, but mobile number and name do not match.
   * - **204**: Other inconsistencies.
   * - **301**: No record found.
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

export class Mobile3MetaDetailVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, **200** indicates a successful API response.
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
   * Request ID.
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
   */
  resultObject?: Mobile3MetaDetailVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaDetailVerifyResponseBodyResultObject,
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


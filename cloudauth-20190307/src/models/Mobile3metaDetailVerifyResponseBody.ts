// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - **1**: Consistent.
   * - **2**: Inconsistent.
   * - **3**: No record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The carrier name. Valid values:
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
   * The detailed verification result. Valid values:
   * 
   * - **101**: Verification passed.
   * - **201**: The phone number is inconsistent with the name, and the phone number is inconsistent with the ID card number.
   * - **202**: The phone number is consistent with the name, but the phone number is inconsistent with the ID card number.
   * - **203**: The phone number is consistent with the ID card number, but the phone number is inconsistent with the name.
   * - **204**: Other inconsistency.
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
   * The response code. **200** indicates that the request was successful.
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
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - **1**: Verification is consistent.
   * - **2**: Verification is inconsistent.
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
   * - **CBCC**: China Broadnet.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The detailed verification result. Valid values:
   * 
   * - 101: Verification passed. All three elements are consistent.
   * - 201: The phone number is inconsistent with both the name and the ID card number.
   * - 202: The phone number is consistent with the name but inconsistent with the ID card number.
   * - 203: The phone number is inconsistent with the name but consistent with the ID card number.
   * - 204: Other inconsistency.
   * - 301: No record found.
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

export class Mobile3MetaDetailStandardVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. **200** indicates a successful response.
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
   * The result information.
   */
  resultObject?: Mobile3MetaDetailStandardVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaDetailStandardVerifyResponseBodyResultObject,
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


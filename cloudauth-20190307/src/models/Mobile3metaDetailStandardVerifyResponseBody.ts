// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile3MetaDetailStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result code:
   * - **1**: Verification matches.
   * - **2**: Verification does not match.
   * - **3**: No record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * ISP name:
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
  /**
   * @remarks
   * Detailed verification results:
   * 
   * - 101: Passed, three elements are consistent.
   * - 201: The phone number does not match the name and ID number.
   * - 202: The phone number matches the name but does not match the ID number.
   * - 203: The phone number does not match the name but matches the ID number.
   * - 204: Other inconsistencies.
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
   * Request ID
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
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


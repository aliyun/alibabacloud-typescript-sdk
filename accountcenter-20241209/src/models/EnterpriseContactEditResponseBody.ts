// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactEditResponseBodyDataErrorList extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the diagnosed issue.
   * 
   * @example
   * Mobile Code Illegal
   */
  errorDesc?: string;
  /**
   * @remarks
   * The field with an exception.
   * 
   * @example
   * MOBILE_VERIFY_CODE
   */
  item?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDesc: 'ErrorDesc',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDesc: 'string',
      item: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseContactEditResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * The error message reported by the backup server.
   */
  errorList?: EnterpriseContactEditResponseBodyDataErrorList[];
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      errorList: 'ErrorList',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      errorList: { 'type': 'array', 'itemType': EnterpriseContactEditResponseBodyDataErrorList },
      result: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorList)) {
      $dara.Model.validateArray(this.errorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseContactEditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data result of the current category statistics.
   */
  data?: EnterpriseContactEditResponseBodyData;
  /**
   * @remarks
   * The result message of the call.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 516C2364-18B7-5BAC-9288-AAEA85EEA351
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseContactEditResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


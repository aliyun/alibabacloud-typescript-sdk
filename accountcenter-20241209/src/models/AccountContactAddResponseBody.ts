// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AccountContactAddResponseBodyDataErrorList extends $dara.Model {
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
   * The cause of the issue.
   * 
   * @example
   * MOBILE_CODE_ILLEGAL
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

export class AccountContactAddResponseBodyData extends $dara.Model {
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
   * The error status information.
   */
  errorList?: AccountContactAddResponseBodyDataErrorList[];
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * True
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
      errorList: { 'type': 'array', 'itemType': AccountContactAddResponseBodyDataErrorList },
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

export class AccountContactAddResponseBody extends $dara.Model {
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
  data?: AccountContactAddResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4E192DF-798B-58AE-B8BF-EBC15E2E85F2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
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
      data: AccountContactAddResponseBodyData,
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


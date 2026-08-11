// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactEditResponseBodyDataErrorList extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorCode?: string;
  /**
   * @remarks
   * Cause of the diagnostic issue.
   * 
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorDesc?: string;
  /**
   * @remarks
   * Exception field
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

export class AccountContactEditResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Contact ID
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * Error codes.
   */
  errorList?: AccountContactEditResponseBodyDataErrorList[];
  /**
   * @remarks
   * Whether successful
   * 
   * @example
   * {\\"TeamDesktops\\": [], \\"PrivateDesktops\\": [], \\"UnallocatedTeamDesktops\\": []}
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
      errorList: { 'type': 'array', 'itemType': AccountContactEditResponseBodyDataErrorList },
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

export class AccountContactEditResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data result of the current category statistics
   */
  data?: AccountContactEditResponseBodyData;
  /**
   * @remarks
   * Error message.
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
   * E4E192DF-798B-58AE-B8BF-EBC15E2E85F2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: succeeded. false: failed.
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
      data: AccountContactEditResponseBodyData,
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


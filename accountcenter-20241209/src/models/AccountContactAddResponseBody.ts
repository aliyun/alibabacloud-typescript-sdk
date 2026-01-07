// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AccountContactAddResponseBodyDataErrorList extends $dara.Model {
  /**
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorCode?: string;
  /**
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorDesc?: string;
  /**
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
   * @example
   * xxx
   */
  contactId?: number;
  errorList?: AccountContactAddResponseBodyDataErrorList[];
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: AccountContactAddResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * E4E192DF-798B-58AE-B8BF-EBC15E2E85F2
   */
  requestId?: string;
  /**
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


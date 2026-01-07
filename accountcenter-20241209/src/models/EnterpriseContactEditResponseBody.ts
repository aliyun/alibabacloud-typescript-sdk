// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactEditResponseBodyDataErrorList extends $dara.Model {
  /**
   * @example
   * MOBILE_CODE_ILLEGAL
   */
  errorCode?: string;
  /**
   * @example
   * Mobile Code Illegal
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

export class EnterpriseContactEditResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  contactId?: number;
  errorList?: EnterpriseContactEditResponseBodyDataErrorList[];
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: EnterpriseContactEditResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 516C2364-18B7-5BAC-9288-AAEA85EEA351
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


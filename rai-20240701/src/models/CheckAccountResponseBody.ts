// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkResult?: number;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: CheckAccountResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CheckAccountResponseBodyData,
      httpStatusCode: 'number',
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


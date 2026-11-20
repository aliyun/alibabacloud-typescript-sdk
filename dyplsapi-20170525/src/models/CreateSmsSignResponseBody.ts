// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The signature string of the recipient number. Append this string to the text message content to parse the actual called number.
   * 
   * @example
   * sign23343466
   */
  calledNoSign?: string;
  static names(): { [key: string]: string } {
    return {
      calledNoSign: 'CalledNoSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNoSign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned status code. Valid values:
   * 
   * - 0000: The request is successful.
   * 
   * - Other values: The request failed.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The text message signature creation result.
   * 
   * @example
   * {"CalledNoSign":"sign23343466"}
   */
  data?: CreateSmsSignResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CreateSmsSignResponseBodyData,
      message: 'string',
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


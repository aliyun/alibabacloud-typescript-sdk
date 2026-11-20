// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigXResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned status code. A value of 0000 indicates success. Other values indicate failure.
   * 
   * @example
   * 0000
   */
  code?: string;
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
   * Indicates whether the request is successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned status code. Valid values:
   * 
   * - 0000: Success.
   * 
   * - Other values: Failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The configuration result of the work number.
   * 
   * @example
   * {"Code":"0000","Message":"Success","Success":true}
   */
  data?: ConfigXResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 4A2568E1-7D83-5491-8DEF-600D8AFF97E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: Success.
   *  
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ConfigXResponseBodyData,
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


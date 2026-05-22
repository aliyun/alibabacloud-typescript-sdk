// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushTimesUsageResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  forceFatal?: boolean;
  /**
   * @example
   * 200
   */
  httpStateCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      forceFatal: 'ForceFatal',
      httpStateCode: 'HttpStateCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      forceFatal: 'boolean',
      httpStateCode: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
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


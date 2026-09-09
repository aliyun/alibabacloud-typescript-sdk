// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgendaSumRecordFlowPopResponseBody extends $dara.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 502
   */
  errCode?: string;
  /**
   * @example
   * param error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * request-id
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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


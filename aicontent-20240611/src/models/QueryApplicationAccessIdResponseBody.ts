// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApplicationAccessIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationAccessIdResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: QueryApplicationAccessIdResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryApplicationAccessIdResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceOssMountRamAuthorizeUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The RAM console authorization URL.
   * 
   * @example
   * https://ram.console.aliyun.com/authorize?requestId=xxx
   */
  authorizeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeUrl: 'AuthorizeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceOssMountRamAuthorizeUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The RAM authorization URL information.
   * 
   * @example
   * {}
   */
  data?: GetInstanceOssMountRamAuthorizeUrlResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
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
      data: GetInstanceOssMountRamAuthorizeUrlResponseBodyData,
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


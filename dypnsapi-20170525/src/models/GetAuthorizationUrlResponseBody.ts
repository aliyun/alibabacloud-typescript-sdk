// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization URL.
   * 
   * @example
   * https://render.****.com/p/s/web-call-minapp/auth-bao?page=commauth/index&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiaXpUeXBlIjoiQ29tbUF1dGgiLCJiaXpJZCI6IjVmNWZjNjAzZDQzMTQ0MWZiYTZiNjYzM2QyMjIyNzU0IiwiZXhwIjoxNjA4MTkxODQxfQ.5IvBj2nKgr60APtotaIB13vtPVrdsPQ6avIfWxte1pA&_env=prod
   */
  authorizationUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationUrl: 'AuthorizationUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetAuthorizationUrlResponseBodyData;
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
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAuthorizationUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
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


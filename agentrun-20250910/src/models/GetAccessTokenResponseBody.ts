// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The personal access token. You can use this token to authenticate subsequent API calls. This authentication method is an alternative to using an Alibaba Cloud AccessKey pair or temporary credentials provided by the Security Token Service (STS).
   * 
   * @example
   * accessToken
   */
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. A value of `SUCCESS` indicates that the request was successful. For failures, this parameter returns an error code, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAccessTokenResponseBodyData;
  /**
   * @remarks
   * The unique request ID. This ID is used for troubleshooting purposes.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAccessTokenResponseBodyData,
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


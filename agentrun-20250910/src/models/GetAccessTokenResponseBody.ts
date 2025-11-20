// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessTokenResponseBodyData extends $dara.Model {
  /**
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetAccessTokenResponseBodyData;
  /**
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


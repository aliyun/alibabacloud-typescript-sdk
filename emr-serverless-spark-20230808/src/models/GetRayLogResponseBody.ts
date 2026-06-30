// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file download URL.
   * 
   * @example
   * https://mybucket.cn-hangzhou.com/xxxxxx
   */
  accessUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'accessUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRayLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates a successful request. Other values indicate a failed request. You can view the specific error description in the message parameter.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetRayLogResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B06AADC1-1627-5B1C-B62F-A2226C122897
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRayLogResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResourceUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary OSS access URL with a signature and expiration time (valid for 24 hours). The URL can be used directly for frontend display or download.
   * 
   * @example
   * https://maas-ai-search-center-raw.oss-cn-hangzhou.aliyuncs.com/.../sample.mp4...
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResourceUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `200` indicates a successful request. Other values indicate an exception. For more information, see error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The business data body.
   */
  data?: GetDatasetResourceUrlResponseBodyData;
  /**
   * @remarks
   * The status description. The value is "success" for successful requests and a specific error message for failed requests.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
   * 
   * @example
   * 1a0f40dd17774641794394269ec0e9
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
      code: 'number',
      data: GetDatasetResourceUrlResponseBodyData,
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


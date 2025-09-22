// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4
   */
  charactersCount?: number;
  /**
   * @example
   * 2
   */
  pageCount?: number;
  /**
   * @example
   * translated
   */
  status?: string;
  /**
   * @example
   * d3a2397bc2c14ab4a2e40a4f5b46241b
   */
  taskId?: string;
  /**
   * @example
   * http://translate-ai-data-dev.oss-cn-hangzhou.aliyuncs.com/tongyiTranslate/123456789/a7630164ce894c799cca0f0822c36f84_merge.md?Expires=1756700753&OSSAccessKeyId=LTAI5tRmTwxU5YoHUyrF93Jv&Signature=qB03ldVmRa%2FRwWgJ2wSi7ylayMA%3D
   */
  translateFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      charactersCount: 'charactersCount',
      pageCount: 'pageCount',
      status: 'status',
      taskId: 'taskId',
      translateFileUrl: 'translateFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charactersCount: 'number',
      pageCount: 'number',
      status: 'string',
      taskId: 'string',
      translateFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: GetDocTranslateTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * AC642EEB-C29D-54DF-8F52-622565BBB78A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocTranslateTaskResponseBodyData,
      httpStatusCode: 'string',
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


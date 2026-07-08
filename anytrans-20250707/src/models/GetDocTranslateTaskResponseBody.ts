// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The character count.
   * 
   * @example
   * 4
   */
  charactersCount?: number;
  /**
   * @remarks
   * The page count.
   * 
   * @example
   * 2
   */
  pageCount?: number;
  /**
   * @remarks
   * The translation status. Valid values:
   * 
   * @example
   * translated
   */
  status?: string;
  /**
   * @remarks
   * The document translation task ID.
   * 
   * @example
   * d3a2397bc2c14ab4a2e40a4f5b46241b
   */
  taskId?: string;
  /**
   * @remarks
   * The translation result URL.
   * 
   * @example
   * http://translate-ai-data-dev.oss-cn-hangzhou.aliyuncs.com/tongyiTranslate/123456789/a7630164ce894c799cca0f0822c36f84_merge.md
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
   * @remarks
   * The response status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDocTranslateTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
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
   * The unique identifier for the request.
   * 
   * @example
   * AC642EEB-C29D-54DF-8F52-622565BBB78A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
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


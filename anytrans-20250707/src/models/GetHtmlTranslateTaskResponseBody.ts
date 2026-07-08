// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHtmlTranslateTaskResponseBodyDataUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens in the input.
   * 
   * @example
   * 22
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens in the output.
   * 
   * @example
   * 19
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens for the request.
   * 
   * @example
   * 41
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHtmlTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Translation Result
   * 
   * @example
   * <!DOCTYPE html>
   * 
   * <html lang="zh-CN">
   * <head>
   * <meta charset="utf-8"/>
   * <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
   * <title>My First Webpage</title>
   * </head>
   * <body>
   * <h1>Welcome to my webpage!</h1>
   * <p>This is a simple HTML page.</p>
   * <p>Learning HTML is the first step to entering web development.</p>
   * <a href="https://www.example.com">Click here to visit the sample website</a>
   * </body>
   * </html>
   */
  translation?: string;
  /**
   * @remarks
   * Details about token usage.
   */
  usage?: GetHtmlTranslateTaskResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translation: 'string',
      usage: GetHtmlTranslateTaskResponseBodyDataUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHtmlTranslateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetHtmlTranslateTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the server.
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
   * The ID of the request. Use this ID to trace the request.
   * 
   * @example
   * 04B53310-CB1A-14B4-AC85-26C154D8366A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      data: GetHtmlTranslateTaskResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHtmlTranslateTaskResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 495
   */
  inputTokens?: number;
  /**
   * @example
   * 444
   */
  outputTokens?: number;
  /**
   * @example
   * 939
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
   * @example
   * 200
   */
  code?: string;
  data?: GetHtmlTranslateTaskResponseBodyData;
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
   * 64191A87-C480-53AD-AEA2-2E847D4DFA66
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


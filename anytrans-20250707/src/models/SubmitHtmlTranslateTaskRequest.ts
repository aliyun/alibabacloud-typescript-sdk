// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHtmlTranslateTaskRequestExtConfig extends $dara.Model {
  /**
   * @remarks
   * The callback URL for receiving translation results.
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to skip the Content Moderation check. To skip this check, you must first complete the Content Moderation disablement process before calling the API.
   * 
   * @example
   * false
   */
  skipCsiCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'callbackUrl',
      skipCsiCheck: 'skipCsiCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      skipCsiCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHtmlTranslateTaskRequestExtExamples extends $dara.Model {
  /**
   * @remarks
   * The source text in the example.
   * 
   * @example
   * 你好
   */
  src?: string;
  /**
   * @remarks
   * The target text in the example.
   * 
   * @example
   * hello
   */
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      tgt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHtmlTranslateTaskRequestExtTerminologies extends $dara.Model {
  /**
   * @remarks
   * The source text for the terminology pair.
   * 
   * @example
   * 机器学习
   */
  src?: string;
  /**
   * @remarks
   * The target text for the terminology pair.
   * 
   * @example
   * ML
   */
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      tgt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHtmlTranslateTaskRequestExtTextTransform extends $dara.Model {
  /**
   * @remarks
   * Converts the entire translated text to lowercase.
   * 
   * @example
   * false
   */
  toLower?: boolean;
  /**
   * @remarks
   * Converts the translated text to title case.
   * 
   * @example
   * false
   */
  toTitle?: boolean;
  /**
   * @remarks
   * Converts the entire translated text to uppercase.
   * 
   * @example
   * false
   */
  toUpper?: boolean;
  static names(): { [key: string]: string } {
    return {
      toLower: 'toLower',
      toTitle: 'toTitle',
      toUpper: 'toUpper',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toLower: 'boolean',
      toTitle: 'boolean',
      toUpper: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHtmlTranslateTaskRequestExt extends $dara.Model {
  /**
   * @remarks
   * Provides specific configuration settings for the translation task.
   */
  config?: SubmitHtmlTranslateTaskRequestExtConfig;
  /**
   * @remarks
   * A natural language prompt in English to guide the model\\"s translation style.
   * 
   * @example
   * his sentence from an e-commerce product image, please provide a translation that is both highly concise and no more than 1.2 times the length of the original.
   */
  domainHint?: string;
  /**
   * @remarks
   * A list of translation examples.
   */
  examples?: SubmitHtmlTranslateTaskRequestExtExamples[];
  /**
   * @remarks
   * Provides extended parameter configuration. The `bizUserId` key specifies the business user ID to isolate custom terminology enforcement by user. The `bizType` key specifies the business scenario type to isolate custom terminology enforcement by scenario.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * A list of sensitive words to filter from the translation.
   */
  sensitives?: string[];
  /**
   * @remarks
   * A list of custom terminology pairs to apply to the translation.
   */
  terminologies?: SubmitHtmlTranslateTaskRequestExtTerminologies[];
  /**
   * @remarks
   * Specifies case transformations for the translated text.
   */
  textTransform?: SubmitHtmlTranslateTaskRequestExtTextTransform;
  /**
   * @remarks
   * Custom passthrough data that the service returns unprocessed in the response. Useful for tasks such as event tracking.
   * 
   * @example
   * {"traceId":"trace_123456"}
   */
  trackingData?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      examples: 'examples',
      paramMap: 'paramMap',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
      trackingData: 'trackingData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: SubmitHtmlTranslateTaskRequestExtConfig,
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': SubmitHtmlTranslateTaskRequestExtExamples },
      paramMap: 'any',
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': SubmitHtmlTranslateTaskRequestExtTerminologies },
      textTransform: SubmitHtmlTranslateTaskRequestExtTextTransform,
      trackingData: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.sensitives)) {
      $dara.Model.validateArray(this.sensitives);
    }
    if(Array.isArray(this.terminologies)) {
      $dara.Model.validateArray(this.terminologies);
    }
    if(this.textTransform && typeof (this.textTransform as any).validate === 'function') {
      (this.textTransform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHtmlTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation behavior.
   */
  ext?: SubmitHtmlTranslateTaskRequestExt;
  /**
   * @remarks
   * The format of the input text.
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * The translation model.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * The source language.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The HTML content to be translated.
   * 
   * @example
   * <!DOCTYPE html>
   * <html lang="zh-CN">
   * <head>
   *     <meta charset="UTF-8">
   *     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   *     <title>我的第一个网页</title>
   * </head>
   * <body>
   *     <h1>欢迎来到我的网页！</h1>
   *     <p>这是一个简单的 HTML 页面。</p>
   *     <p>学习 HTML 是进入网页开发的第一步。</p>
   *     <a href="https://www.example.com">点击这里访问示例网站</a>
   * </body>
   * </html>
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace used for this request.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      text: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: SubmitHtmlTranslateTaskRequestExt,
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      text: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


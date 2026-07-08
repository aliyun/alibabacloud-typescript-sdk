// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchTranslateRequestExtConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip the Content Moderation check. To set this to true, you must first complete the required process to disable Content Moderation.
   * 
   * @example
   * false
   */
  skipCsiCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipCsiCheck: 'skipCsiCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class BatchTranslateRequestExtExamples extends $dara.Model {
  /**
   * @remarks
   * The source text.
   * 
   * @example
   * 你好
   */
  src?: string;
  /**
   * @remarks
   * The target text.
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

export class BatchTranslateRequestExtTerminologies extends $dara.Model {
  /**
   * @remarks
   * The source text to be overridden.
   * 
   * @example
   * 应用接口
   */
  src?: string;
  /**
   * @remarks
   * The target text to use for the override.
   * 
   * @example
   * API
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

export class BatchTranslateRequestExtTextTransform extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to convert the entire translated text to lowercase.
   * 
   * @example
   * false
   */
  toLower?: boolean;
  /**
   * @remarks
   * Specifies whether to convert the entire translated text to title case.
   * 
   * @example
   * false
   */
  toTitle?: boolean;
  /**
   * @remarks
   * Specifies whether to convert the entire translated text to uppercase.
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

export class BatchTranslateRequestExt extends $dara.Model {
  /**
   * @remarks
   * Controls the translation behavior.
   */
  config?: BatchTranslateRequestExtConfig;
  /**
   * @remarks
   * A natural language instruction in English that guides the model\\"s translation style.
   * 
   * @example
   * this sentence from an e-commerce product image, please provide a translation that is both highly concise and no more than 1.2 times the length of the original.
   */
  domainHint?: string;
  /**
   * @remarks
   * A list of translation examples.
   */
  examples?: BatchTranslateRequestExtExamples[];
  /**
   * @remarks
   * Specifies whether to enable automatic detection of the source language. If set to true, the `sourceLanguage` parameter is ignored.
   */
  langDetect?: boolean;
  /**
   * @remarks
   * Extended parameters for applying custom terminology that is isolated by user or business scenario.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * A list of sensitive terms.
   */
  sensitives?: string[];
  /**
   * @remarks
   * A list of custom terminology for overriding translations.
   */
  terminologies?: BatchTranslateRequestExtTerminologies[];
  /**
   * @remarks
   * Specifies case transformations for the translated text.
   */
  textTransform?: BatchTranslateRequestExtTextTransform;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      examples: 'examples',
      langDetect: 'langDetect',
      paramMap: 'paramMap',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: BatchTranslateRequestExtConfig,
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': BatchTranslateRequestExtExamples },
      langDetect: 'boolean',
      paramMap: 'any',
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': BatchTranslateRequestExtTerminologies },
      textTransform: BatchTranslateRequestExtTextTransform,
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

export class BatchTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the calling application.
   * 
   * @example
   * baidufanyi
   */
  appName?: string;
  /**
   * @remarks
   * The extended parameters that control translation features.
   */
  ext?: BatchTranslateRequestExt;
  /**
   * @remarks
   * The translation format.
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
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * A map of texts to translate, in which the key is a custom identifier and the value is the source text.
   * 
   * This parameter is required.
   * 
   * @example
   * {"0":"明天天气怎么样？","1":"你中午吃饭了吗"}
   */
  text?: { [key: string]: any };
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
      appName: 'appName',
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
      appName: 'string',
      ext: BatchTranslateRequestExt,
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      text: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(this.text) {
      $dara.Model.validateMap(this.text);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


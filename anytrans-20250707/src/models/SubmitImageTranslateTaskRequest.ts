// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageTranslateTaskRequestExtExamples extends $dara.Model {
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

export class SubmitImageTranslateTaskRequestExtTerminologies extends $dara.Model {
  /**
   * @remarks
   * The source text.
   * 
   * @example
   * 机器学习
   */
  src?: string;
  /**
   * @remarks
   * The custom translation for the source text.
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

export class SubmitImageTranslateTaskRequestExtTextTransform extends $dara.Model {
  /**
   * @remarks
   * Set to `true` to convert the entire translated text to lowercase.
   * 
   * @example
   * false
   */
  toLower?: boolean;
  /**
   * @remarks
   * Set to `true` to convert the entire translated text to title case.
   * 
   * @example
   * false
   */
  toTitle?: boolean;
  /**
   * @remarks
   * Set to `true` to convert the entire translated text to uppercase.
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

export class SubmitImageTranslateTaskRequestExt extends $dara.Model {
  /**
   * @remarks
   * An English string that guides the translation style of the large language model (LLM).
   * 
   * @example
   * this sentence from an e-commerce product image, please provide a translation that is both highly concise and no more than 1.2 times the length of the original.
   */
  domainHint?: string;
  /**
   * @remarks
   * A list of translation examples.
   */
  examples?: SubmitImageTranslateTaskRequestExtExamples[];
  /**
   * @remarks
   * Parameters for isolating terminology to prevent interference between different users or business scenarios. Use `bizUserId` for user-level isolation and `bizType` for scenario-level isolation.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * A list of sensitive words.
   */
  sensitives?: string[];
  /**
   * @remarks
   * A list of custom term pairs to apply to the translation.
   */
  terminologies?: SubmitImageTranslateTaskRequestExtTerminologies[];
  /**
   * @remarks
   * Specifies case conversion for the translated text.
   */
  textTransform?: SubmitImageTranslateTaskRequestExtTextTransform;
  /**
   * @remarks
   * User-defined pass-through data that the service returns unmodified in the response. This is typically used for analytics tracking.
   * 
   * @example
   * {"traceId":"trace_123456"}
   */
  trackingData?: string;
  static names(): { [key: string]: string } {
    return {
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
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': SubmitImageTranslateTaskRequestExtExamples },
      paramMap: 'any',
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': SubmitImageTranslateTaskRequestExtTerminologies },
      textTransform: SubmitImageTranslateTaskRequestExtTextTransform,
      trackingData: 'string',
    };
  }

  validate() {
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

export class SubmitImageTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation features.
   */
  ext?: SubmitImageTranslateTaskRequestExt;
  /**
   * @remarks
   * The translation format.
   * 
   * @example
   * image
   */
  format?: string;
  /**
   * @remarks
   * Specifies the translation model.
   * 
   * This parameter is required.
   * 
   * @example
   * flash
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
   * A list of target languages.
   * 
   * This parameter is required.
   */
  targetLanguage?: string[];
  /**
   * @remarks
   * The URL of the image to translate.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/2214557014466/O1CN0174Thmb1irTsyTXYFO_!!4611686018427386306-0-item_pic.jpg
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace.
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
      ext: SubmitImageTranslateTaskRequestExt,
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.targetLanguage)) {
      $dara.Model.validateArray(this.targetLanguage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


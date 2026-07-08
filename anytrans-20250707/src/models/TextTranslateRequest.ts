// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateRequestExtConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to skip the Green Web check. (To use this option, you must first complete the process to disable Green Web before making the API call.)
   * 
   * @example
   * fasle
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

export class TextTranslateRequestExtExamples extends $dara.Model {
  /**
   * @remarks
   * Source text
   * 
   * @example
   * 你好
   */
  src?: string;
  /**
   * @remarks
   * Target text
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

export class TextTranslateRequestExtTerminologies extends $dara.Model {
  /**
   * @remarks
   * Source text
   * 
   * @example
   * 机器学习
   */
  src?: string;
  /**
   * @remarks
   * Target text
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

export class TextTranslateRequestExtTextTransform extends $dara.Model {
  /**
   * @remarks
   * Convert to lowercase
   * 
   * @example
   * false
   */
  toLower?: boolean;
  /**
   * @remarks
   * First letter capitalized
   * 
   * @example
   * false
   */
  toTitle?: boolean;
  /**
   * @remarks
   * Convert to uppercase
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

export class TextTranslateRequestExt extends $dara.Model {
  /**
   * @remarks
   * Expert agent
   * 
   * @example
   * game
   */
  agent?: string;
  /**
   * @remarks
   * Translation Behavior Control
   */
  config?: TextTranslateRequestExtConfig;
  /**
   * @remarks
   * Domain hint
   * 
   * @example
   * technology
   */
  domainHint?: string;
  /**
   * @remarks
   * List of Translation Examples
   */
  examples?: TextTranslateRequestExtExamples[];
  langDetect?: boolean;
  /**
   * @remarks
   * Extended parameter configuration (bizUserld: A business-level user ID that distinguishes between different business users. It implements "user-based isolation" for terminology intervention so that interventions for one user do not affect others. bizType: A business scenario type or identifier that distinguishes between different scenarios. It implements "scenario-based isolation" for terminology intervention so that interventions for one scenario do not affect others.)
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * Prefix Configuration
   * 
   * @example
   * Today\\"s weather
   */
  prefix?: string;
  /**
   * @remarks
   * Sensitive word list
   */
  sensitives?: string[];
  /**
   * @remarks
   * Translation terminology
   */
  terminologies?: TextTranslateRequestExtTerminologies[];
  /**
   * @remarks
   * Translated Text Conversion
   */
  textTransform?: TextTranslateRequestExtTextTransform;
  static names(): { [key: string]: string } {
    return {
      agent: 'agent',
      config: 'config',
      domainHint: 'domainHint',
      examples: 'examples',
      langDetect: 'langDetect',
      paramMap: 'paramMap',
      prefix: 'prefix',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      config: TextTranslateRequestExtConfig,
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': TextTranslateRequestExtExamples },
      langDetect: 'boolean',
      paramMap: 'any',
      prefix: 'string',
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': TextTranslateRequestExtTerminologies },
      textTransform: TextTranslateRequestExtTextTransform,
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

export class TextTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation behavior
   */
  ext?: TextTranslateRequestExt;
  /**
   * @remarks
   * text format
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * Model type
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * Source language code
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Target Language Code
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Text to be translated
   * 
   * This parameter is required.
   * 
   * @example
   * 今天天气怎么样
   */
  text?: string;
  /**
   * @remarks
   * Workspace ID
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
      ext: TextTranslateRequestExt,
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


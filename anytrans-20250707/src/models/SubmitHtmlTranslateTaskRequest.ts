// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHtmlTranslateTaskRequestExtConfig extends $dara.Model {
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

export class SubmitHtmlTranslateTaskRequestExtExamples extends $dara.Model {
  src?: string;
  /**
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
  src?: string;
  /**
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
   * @example
   * false
   */
  toLower?: boolean;
  /**
   * @example
   * false
   */
  toTitle?: boolean;
  /**
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
  config?: SubmitHtmlTranslateTaskRequestExtConfig;
  /**
   * @example
   * technology
   */
  domainHint?: string;
  examples?: SubmitHtmlTranslateTaskRequestExtExamples[];
  sensitives?: string[];
  terminologies?: SubmitHtmlTranslateTaskRequestExtTerminologies[];
  textTransform?: SubmitHtmlTranslateTaskRequestExtTextTransform;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      examples: 'examples',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: SubmitHtmlTranslateTaskRequestExtConfig,
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': SubmitHtmlTranslateTaskRequestExtExamples },
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': SubmitHtmlTranslateTaskRequestExtTerminologies },
      textTransform: SubmitHtmlTranslateTaskRequestExtTextTransform,
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
  ext?: SubmitHtmlTranslateTaskRequestExt;
  /**
   * @example
   * text
   */
  format?: string;
  /**
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @example
   * en
   */
  targetLanguage?: string;
  text?: string;
  /**
   * @remarks
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


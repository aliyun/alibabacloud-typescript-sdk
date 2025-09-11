// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageTranslateTaskRequestExtExamples extends $dara.Model {
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

export class SubmitImageTranslateTaskRequestExtTerminologies extends $dara.Model {
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

export class SubmitImageTranslateTaskRequestExtTextTransform extends $dara.Model {
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

export class SubmitImageTranslateTaskRequestExt extends $dara.Model {
  /**
   * @example
   * technology
   */
  domainHint?: string;
  examples?: SubmitImageTranslateTaskRequestExtExamples[];
  sensitives?: string[];
  terminologies?: SubmitImageTranslateTaskRequestExtTerminologies[];
  textTransform?: SubmitImageTranslateTaskRequestExtTextTransform;
  static names(): { [key: string]: string } {
    return {
      domainHint: 'domainHint',
      examples: 'examples',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': SubmitImageTranslateTaskRequestExtExamples },
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': SubmitImageTranslateTaskRequestExtTerminologies },
      textTransform: SubmitImageTranslateTaskRequestExtTextTransform,
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
  ext?: SubmitImageTranslateTaskRequestExt;
  /**
   * @example
   * image
   */
  format?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flash
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetLanguage?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
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


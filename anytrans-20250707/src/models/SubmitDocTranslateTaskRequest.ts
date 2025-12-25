// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocTranslateTaskRequestExtConfig extends $dara.Model {
  skipImgTrans?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipImgTrans: 'skipImgTrans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipImgTrans: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocTranslateTaskRequestExtTerminologies extends $dara.Model {
  src?: string;
  /**
   * @example
   * llm
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

export class SubmitDocTranslateTaskRequestExt extends $dara.Model {
  config?: SubmitDocTranslateTaskRequestExtConfig;
  /**
   * @example
   * This text comes from a rigorous academic paper. Please provide a translation that complies with academic standards.
   */
  domainHint?: string;
  paramMap?: any;
  terminologies?: SubmitDocTranslateTaskRequestExtTerminologies[];
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      paramMap: 'paramMap',
      terminologies: 'terminologies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: SubmitDocTranslateTaskRequestExtConfig,
      domainHint: 'string',
      paramMap: 'any',
      terminologies: { 'type': 'array', 'itemType': SubmitDocTranslateTaskRequestExtTerminologies },
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.terminologies)) {
      $dara.Model.validateArray(this.terminologies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocTranslateTaskRequest extends $dara.Model {
  ext?: SubmitDocTranslateTaskRequestExt;
  /**
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * spoke-llm
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
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx-hangzhou.aliyuncs.com/docs/tmp/%E6%A0%B7%E4%BE%8B_%E6%97%A0%E5%9B%BE.pdf
   */
  text?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xc
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
      ext: SubmitDocTranslateTaskRequestExt,
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


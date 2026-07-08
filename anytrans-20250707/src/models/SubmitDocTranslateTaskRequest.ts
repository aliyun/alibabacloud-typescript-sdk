// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocTranslateTaskRequestExtConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate a bilingual document containing both the source and target text.
   * 
   * @example
   * false
   */
  isBilingual?: boolean;
  /**
   * @remarks
   * Specifies whether to translate images in PDF documents.
   * 
   * @example
   * false
   */
  skipImgTrans?: boolean;
  static names(): { [key: string]: string } {
    return {
      isBilingual: 'isBilingual',
      skipImgTrans: 'skipImgTrans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBilingual: 'boolean',
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
  /**
   * @remarks
   * The source text that the custom translation will replace.
   * 
   * @example
   * 机器学习
   */
  src?: string;
  /**
   * @remarks
   * The custom translation for the corresponding source term.
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

export class SubmitDocTranslateTaskRequestExt extends $dara.Model {
  /**
   * @remarks
   * Configuration settings for the translation job.
   */
  config?: SubmitDocTranslateTaskRequestExtConfig;
  /**
   * @remarks
   * A prompt that tailors the translation style to a specific domain.
   * 
   * @example
   * This text comes from a rigorous academic paper. Please provide a translation that complies with academic standards.
   */
  domainHint?: string;
  /**
   * @remarks
   * A map for advanced configuration. Use `bizUserId` to apply terminologies on a per-user basis and `bizType` to apply them on a per-scenario basis. This prevents terminology conflicts between different users or scenarios.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * The glossary to apply to the translation.
   */
  terminologies?: SubmitDocTranslateTaskRequestExtTerminologies[];
  /**
   * @remarks
   * User-defined pass-through data. The service does not process this data and returns it as-is in the response. This is useful for scenarios such as tracking.
   * 
   * @example
   * {"traceId":"trace_123456"}
   */
  trackingData?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      paramMap: 'paramMap',
      terminologies: 'terminologies',
      trackingData: 'trackingData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: SubmitDocTranslateTaskRequestExtConfig,
      domainHint: 'string',
      paramMap: 'any',
      terminologies: { 'type': 'array', 'itemType': SubmitDocTranslateTaskRequestExtTerminologies },
      trackingData: 'string',
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
  /**
   * @remarks
   * Extension parameters that control translation features.
   */
  ext?: SubmitDocTranslateTaskRequestExt;
  /**
   * @remarks
   * The format for the translation.
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * The translation model.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * The source language code.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The URL of the document to translate.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx-hangzhou.aliyuncs.com/docs/tmp/%E6%A0%B7%E4%BE%8B_%E6%97%A0%E5%9B%BE.pdf
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace for the current request.
   * 
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


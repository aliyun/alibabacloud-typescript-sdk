// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermEditRequestExtTerms extends $dara.Model {
  /**
   * @remarks
   * The source text.
   * 
   * This parameter is required.
   * 
   * @example
   * 大模型
   */
  src?: string;
  /**
   * @remarks
   * The intervention term ID.
   * 
   * @example
   * 92669964
   */
  termId?: string;
  /**
   * @remarks
   * The post-intervention translation.
   * 
   * This parameter is required.
   * 
   * @example
   * LLM
   */
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      termId: 'termId',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      termId: 'string',
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

export class TermEditRequestExt extends $dara.Model {
  /**
   * @remarks
   * The extended parameter configuration.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  /**
   * @remarks
   * The intervention term list.
   * 
   * This parameter is required.
   */
  terms?: TermEditRequestExtTerms[];
  static names(): { [key: string]: string } {
    return {
      paramMap: 'paramMap',
      terms: 'terms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramMap: 'any',
      terms: { 'type': 'array', 'itemType': TermEditRequestExtTerms },
    };
  }

  validate() {
    if(Array.isArray(this.terms)) {
      $dara.Model.validateArray(this.terms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TermEditRequest extends $dara.Model {
  /**
   * @remarks
   * The action type.
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  action?: string;
  /**
   * @remarks
   * The extended parameters.
   * 
   * This parameter is required.
   */
  ext?: TermEditRequestExt;
  /**
   * @remarks
   * The model type.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * The source language. The value must be a valid BCP-47 language code.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language. The value must be a valid BCP-47 language code.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
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
      action: 'action',
      ext: 'ext',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      ext: TermEditRequestExt,
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
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


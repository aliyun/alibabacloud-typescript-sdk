// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermEditRequestExtTerms extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  src?: string;
  /**
   * @example
   * 92669964
   */
  termId?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  terms?: TermEditRequestExtTerms[];
  static names(): { [key: string]: string } {
    return {
      terms: 'terms',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ext?: TermEditRequestExt;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
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


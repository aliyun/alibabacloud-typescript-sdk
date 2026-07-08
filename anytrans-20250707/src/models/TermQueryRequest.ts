// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermQueryRequestExt extends $dara.Model {
  /**
   * @remarks
   * Specifies extended parameters to isolate term interventions.
   * 
   * @example
   * {"bizUserld":"123456","bizType":session"}
   */
  paramMap?: any;
  static names(): { [key: string]: string } {
    return {
      paramMap: 'paramMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramMap: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TermQueryRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters.
   */
  ext?: TermQueryRequestExt;
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
   * The source text to search for intervention terms.
   * 
   * @example
   * 今天的天气非常不错，我准备去跟我的好朋友去学习一些大模型相关和应用接口的知识。
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace used for the request.
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
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      text: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: TermQueryRequestExt,
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


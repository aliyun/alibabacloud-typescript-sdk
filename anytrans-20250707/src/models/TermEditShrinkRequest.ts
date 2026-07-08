// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermEditShrinkRequest extends $dara.Model {
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
  extShrink?: string;
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
      extShrink: 'ext',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      extShrink: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


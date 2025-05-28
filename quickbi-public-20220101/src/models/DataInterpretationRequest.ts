// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataInterpretationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  modelCode?: string;
  promptForceOverride?: boolean;
  userPrompt?: string;
  userQuestion?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      modelCode: 'ModelCode',
      promptForceOverride: 'PromptForceOverride',
      userPrompt: 'UserPrompt',
      userQuestion: 'UserQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      modelCode: 'string',
      promptForceOverride: 'boolean',
      userPrompt: 'string',
      userQuestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


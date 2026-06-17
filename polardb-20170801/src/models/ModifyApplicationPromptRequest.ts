// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationPromptRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @remarks
   * The name of the prompt.
   * 
   * @example
   * prompt name
   */
  promptName?: string;
  /**
   * @remarks
   * The content of the prompt.
   * 
   * @example
   * prompt value
   */
  promptValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      promptId: 'PromptId',
      promptName: 'PromptName',
      promptValue: 'PromptValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      promptId: 'string',
      promptName: 'string',
      promptValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


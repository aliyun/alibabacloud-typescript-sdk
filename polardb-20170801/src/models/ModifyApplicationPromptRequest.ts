// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationPromptRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * papt-xx
   * 
   * This parameter is required.
   * 
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @example
   * prompt name
   */
  promptName?: string;
  /**
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


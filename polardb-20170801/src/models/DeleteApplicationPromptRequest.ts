// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationPromptRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      promptId: 'PromptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      promptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


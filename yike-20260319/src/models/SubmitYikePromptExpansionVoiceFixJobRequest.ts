// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikePromptExpansionVoiceFixJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobParams?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobParams: 'JobParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParams: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


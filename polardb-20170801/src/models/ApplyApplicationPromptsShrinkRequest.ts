// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApplicationPromptsShrinkRequest extends $dara.Model {
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
   * An array of prompt IDs to disable.
   * 
   * @example
   * papt-************
   */
  disabledPromptIdsShrink?: string;
  /**
   * @remarks
   * An array of prompt IDs to enable.
   * 
   * @example
   * papt-************
   */
  enabledPromptIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      disabledPromptIdsShrink: 'DisabledPromptIds',
      enabledPromptIdsShrink: 'EnabledPromptIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      disabledPromptIdsShrink: 'string',
      enabledPromptIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


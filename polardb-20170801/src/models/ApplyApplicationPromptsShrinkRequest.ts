// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApplicationPromptsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of prompt IDs to disable. You must provide a non-empty list for at least one of EnabledPromptIds and DisabledPromptIds. Otherwise, the InvalidApplicationPromptId.Malformed error is returned.
   * 
   * @example
   * ["papt-************"]
   */
  disabledPromptIdsShrink?: string;
  /**
   * @remarks
   * The list of prompt IDs to enable. You must provide a non-empty list for at least one of EnabledPromptIds and DisabledPromptIds. Otherwise, the InvalidApplicationPromptId.Malformed error is returned.
   * 
   * @example
   * ["papt-************"]
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


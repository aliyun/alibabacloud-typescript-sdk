// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApplicationPromptsRequest extends $dara.Model {
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
  disabledPromptIds?: string[];
  /**
   * @remarks
   * The list of prompt IDs to enable. You must provide a non-empty list for at least one of EnabledPromptIds and DisabledPromptIds. Otherwise, the InvalidApplicationPromptId.Malformed error is returned.
   * 
   * @example
   * ["papt-************"]
   */
  enabledPromptIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      disabledPromptIds: 'DisabledPromptIds',
      enabledPromptIds: 'EnabledPromptIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      disabledPromptIds: { 'type': 'array', 'itemType': 'string' },
      enabledPromptIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.disabledPromptIds)) {
      $dara.Model.validateArray(this.disabledPromptIds);
    }
    if(Array.isArray(this.enabledPromptIds)) {
      $dara.Model.validateArray(this.enabledPromptIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApplicationPromptsRequest extends $dara.Model {
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
  disabledPromptIds?: string[];
  /**
   * @remarks
   * An array of prompt IDs to enable.
   * 
   * @example
   * papt-************
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


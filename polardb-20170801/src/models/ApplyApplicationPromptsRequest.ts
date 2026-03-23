// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyApplicationPromptsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * papt-************
   */
  disabledPromptIds?: string[];
  /**
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


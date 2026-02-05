// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAIAgentVoiceprintRequest extends $dara.Model {
  registrationMode?: string;
  /**
   * @remarks
   * The unique identifier for the voiceprint.
   * 
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationMode: 'RegistrationMode',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationMode: 'string',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAIAgentVoiceprintRequest extends $dara.Model {
  /**
   * @remarks
   * The voiceprint registration mode. Default value: Explicit.
   * 
   * @example
   * Explicit
   */
  registrationMode?: string;
  /**
   * @remarks
   * The identity identifier used to uniquely identify a voiceprint.
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


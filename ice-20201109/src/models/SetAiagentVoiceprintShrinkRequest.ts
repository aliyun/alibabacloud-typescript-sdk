// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIAgentVoiceprintShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input file.
   */
  inputShrink?: string;
  /**
   * @remarks
   * A unique identifier for the voiceprint. Generate this ID based on your own business rules. Requirement: 1 to 127 characters in length.
   * 
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
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


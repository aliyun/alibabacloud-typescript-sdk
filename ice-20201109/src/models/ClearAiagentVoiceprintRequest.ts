// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAIAgentVoiceprintRequest extends $dara.Model {
  /**
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


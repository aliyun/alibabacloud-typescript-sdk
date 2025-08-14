// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIAgentVoiceprintResponseBody extends $dara.Model {
  /**
   * @example
   * 550e8400********55440000
   */
  requestId?: string;
  /**
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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


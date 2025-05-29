// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentConfigVoiceprintConfig extends $dara.Model {
  useVoiceprint?: boolean;
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      useVoiceprint: 'UseVoiceprint',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useVoiceprint: 'boolean',
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


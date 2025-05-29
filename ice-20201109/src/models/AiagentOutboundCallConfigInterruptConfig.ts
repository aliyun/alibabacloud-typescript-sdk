// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigInterruptConfig extends $dara.Model {
  enableVoiceInterrupt?: boolean;
  interruptWords?: string[];
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVoiceInterrupt: 'boolean',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentConfigVcrConfigStillFrameMotion extends $dara.Model {
  callbackDelay?: number;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackDelay: 'CallbackDelay',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackDelay: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


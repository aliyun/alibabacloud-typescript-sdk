// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequestVoiceChatConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  chatMode?: number;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  static names(): { [key: string]: string } {
    return {
      chatMode: 'ChatMode',
      interruptMode: 'InterruptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatMode: 'number',
      interruptMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


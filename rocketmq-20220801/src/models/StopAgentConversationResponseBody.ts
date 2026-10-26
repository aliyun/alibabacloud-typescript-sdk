// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAgentConversationResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  stopped?: boolean;
  static names(): { [key: string]: string } {
    return {
      stopped: 'stopped',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopped: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


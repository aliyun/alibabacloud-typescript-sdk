// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConversationEventsRequest extends $dara.Model {
  /**
   * @example
   * 42
   */
  after?: number;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


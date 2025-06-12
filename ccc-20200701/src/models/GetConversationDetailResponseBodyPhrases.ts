// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationDetailResponseBodyPhrases extends $dara.Model {
  /**
   * @example
   * 240
   */
  begin?: number;
  /**
   * @example
   * 1280
   */
  end?: number;
  finished?: boolean;
  /**
   * @example
   * agent@ccc-test
   */
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      finished: 'Finished',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      finished: 'boolean',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


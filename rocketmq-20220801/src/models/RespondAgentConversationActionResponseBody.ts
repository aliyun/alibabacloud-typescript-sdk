// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RespondAgentConversationActionResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  accepted?: boolean;
  /**
   * @example
   * true
   */
  continuationCreated?: boolean;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e98
   */
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      accepted: 'accepted',
      continuationCreated: 'continuationCreated',
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
      continuationCreated: 'boolean',
      runId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


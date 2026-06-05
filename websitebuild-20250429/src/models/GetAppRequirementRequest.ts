// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRequirementRequest extends $dara.Model {
  /**
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


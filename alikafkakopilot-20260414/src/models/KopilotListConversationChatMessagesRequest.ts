// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotListConversationChatMessagesRequest extends $dara.Model {
  beforeTurnId?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      beforeTurnId: 'BeforeTurnId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTurnId: 'number',
      pageSize: 'number',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


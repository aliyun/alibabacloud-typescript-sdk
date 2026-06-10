// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * Appended message metadata (JSON format)
   * 
   * @example
   * 123
   */
  addedMetaData?: string;
  /**
   * @remarks
   * Message content
   * 
   * @example
   * FormatVersion: OOS-2019-06-01nTasks:n  - Name: runCommandn    Action: \\"ACS::ECS::RunCommand\\"n    Properties:n      commandContent: \\" echo Hksqj@@883289
   */
  content?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * 7baf7d67-1897-42ed-a380-f6ae825d6907
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      addedMetaData: 'AddedMetaData',
      content: 'Content',
      conversationId: 'ConversationId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedMetaData: 'string',
      content: 'string',
      conversationId: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


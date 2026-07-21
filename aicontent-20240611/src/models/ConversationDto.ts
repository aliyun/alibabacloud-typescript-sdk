// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationDTO extends $dara.Model {
  /**
   * @remarks
   * A JSON-formatted string that represents the complete state of the conversation.
   * 
   * @example
   * {}
   */
  chatData?: string;
  /**
   * @remarks
   * The status of the conversation, where 0 means enabled and any non-zero value means disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The creation time of the conversation, in ISO 8601 format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time of the conversation, in ISO 8601 format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The total number of messages in the conversation.
   * 
   * @example
   * 10
   */
  messageCount?: number;
  /**
   * @remarks
   * A JSON-formatted string that contains an array of model IDs.
   * 
   * @example
   * [1,2,3]
   */
  modelIds?: string;
  /**
   * @remarks
   * The title of the conversation.
   * 
   * @example
   * 我的对话
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatData: 'chatData',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      messageCount: 'messageCount',
      modelIds: 'modelIds',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatData: 'string',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      messageCount: 'number',
      modelIds: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


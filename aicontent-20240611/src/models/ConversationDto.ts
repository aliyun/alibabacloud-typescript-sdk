// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationDTO extends $dara.Model {
  /**
   * @example
   * {}
   */
  chatData?: string;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 10
   */
  messageCount?: number;
  /**
   * @example
   * [1,2,3]
   */
  modelIds?: string;
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


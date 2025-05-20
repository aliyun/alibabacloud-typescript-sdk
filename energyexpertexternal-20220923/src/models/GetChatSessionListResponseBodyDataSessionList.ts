// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionListResponseBodyDataSessionList extends $dara.Model {
  /**
   * @remarks
   * Report creation timestamp, in milliseconds.
   * 
   * @example
   * 2025-01-01T14:45:17Z
   */
  createTime?: number;
  /**
   * @remarks
   * Folder ID, used to specify the scope of documents to be queried.
   * 
   * @example
   * 3493370b-4884-47dd-95ed-49038769af53
   */
  folderId?: string;
  /**
   * @remarks
   * Session name
   * 
   * @example
   * student_app_spelling
   */
  name?: string;
  /**
   * @remarks
   * Q&A session ID, used to record multiple Q&As of the same user.
   * 
   * @example
   * 5c748ef9-3f23-4b5a-916f-966c0d2c6dcd
   */
  sessionId?: string;
  /**
   * @remarks
   * Modification time, in milliseconds.
   * 
   * @example
   * 2024-12-30T02:05:03Z
   */
  updateTime?: number;
  /**
   * @remarks
   * User ID of the current session.
   * 
   * @example
   * 12222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      folderId: 'folderId',
      name: 'name',
      sessionId: 'sessionId',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      folderId: 'string',
      name: 'string',
      sessionId: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Folder ID, to search for Q&A content within the current folder and its subfolders.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a851c4a-1d65-11ef-99a7-ssfsfdd
   */
  folderId?: string;
  /**
   * @remarks
   * Name of the current session.
   * 
   * This parameter is required.
   * 
   * @example
   * analyzer_1744684195
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the user. If not provided, the SDK calling account will be used as the user ID by default.
   * 
   * @example
   * 1233333
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      name: 'string',
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


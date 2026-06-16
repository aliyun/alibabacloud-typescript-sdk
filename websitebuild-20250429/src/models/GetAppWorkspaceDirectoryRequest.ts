// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppWorkspaceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  /**
   * @remarks
   * The directory depth. This parameter is optional. If set to null or 0, all levels are returned.
   * 
   * @example
   * 1
   */
  deep?: number;
  /**
   * @remarks
   * The directory path. This parameter is optional.
   * 
   * @example
   * 1
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      deep: 'Deep',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      deep: 'number',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


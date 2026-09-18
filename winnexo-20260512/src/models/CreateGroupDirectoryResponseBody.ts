// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In failure cases, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * ProjectDescription
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The folder type.
   * 
   * @example
   * GROUP
   */
  directoryType?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The root folder ID of the knowledge base.
   * 
   * @example
   * dir_root
   */
  kbRootDirectoryId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The name of the worksheet.
   * 
   * @example
   * ProjectFiles
   */
  name?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_parent
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4A9EB1C-6952-5CCC-B1DC-355576FC82A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      directoryType: 'directoryType',
      groupId: 'groupId',
      kbRootDirectoryId: 'kbRootDirectoryId',
      message: 'message',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      directoryType: 'string',
      groupId: 'string',
      kbRootDirectoryId: 'string',
      message: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


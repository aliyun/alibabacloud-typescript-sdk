// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. For failures, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
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
   * Project Description
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
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
   * The knowledge base root directory ID.
   * 
   * @example
   * dir_root
   */
  kbRootDirectoryId?: string;
  /**
   * @remarks
   * The returned message.
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
   * Project Materials
   */
  name?: string;
  /**
   * @remarks
   * The directory ID.
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


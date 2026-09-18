// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder description.
   * 
   * @example
   * Project description
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
   * The folder type. The value is fixed as GROUP.
   * 
   * @example
   * GROUP
   */
  directoryType?: string;
  /**
   * @remarks
   * The ID of the collaborative share.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the internal root folder in the collaborative share. This folder cannot be modified.
   * 
   * @example
   * dir_root
   */
  kbRootDirectoryId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * Project Materials
   */
  name?: string;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * dir_parent
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
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


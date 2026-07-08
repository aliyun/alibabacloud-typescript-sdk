// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * Folder description.
   * 
   * @example
   * 目录1
   */
  description?: string;
  /**
   * @remarks
   * Space ID to which the folder belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Folder name.
   * 
   * This parameter is required.
   * 
   * @example
   * 目录1
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * Parent folder ID.
   * 
   * > When you create a device space, the system automatically creates a root directory for that space. Use the [DescribeDirectories](https://next.api.aliyun.com/document/vs/2018-12-12/DescribeDirectories) API to query the corresponding root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      ownerId: 'number',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


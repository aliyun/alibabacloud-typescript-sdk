// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-09-10T10:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The directory description.
   * 
   * @example
   * 目录1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group that owns the folder.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * 目录1
   */
  name?: string;
  /**
   * @remarks
   * The parent directory ID.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
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


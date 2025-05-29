// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesResponseBodyDevicesDirectory extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


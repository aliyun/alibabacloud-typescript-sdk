// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * 310101*****7542007
   */
  gbId?: string;
  /**
   * @example
   * 3484*****8732174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3487*****323380-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 3614*****766212-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
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


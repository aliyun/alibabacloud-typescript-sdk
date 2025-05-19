// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMyGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  instanceIdList?: string;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIdList: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


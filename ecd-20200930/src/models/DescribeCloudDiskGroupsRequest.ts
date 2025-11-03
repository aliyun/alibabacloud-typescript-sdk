// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-0456357992
   */
  cdsId?: string;
  groupId?: string[];
  groupName?: string;
  /**
   * @example
   * root
   */
  parentOrgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      parentOrgId: 'ParentOrgId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      parentOrgId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupId)) {
      $dara.Model.validateArray(this.groupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


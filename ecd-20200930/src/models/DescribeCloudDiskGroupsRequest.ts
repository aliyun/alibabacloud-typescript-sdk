// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise cloud drive that you created.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-0456357992
   */
  cdsId?: string;
  /**
   * @remarks
   * The group ID.
   */
  groupId?: string[];
  /**
   * @remarks
   * The team space name.
   * 
   * @example
   * Test team 1
   */
  groupName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * root
   */
  parentOrgId?: string;
  /**
   * @remarks
   * The region ID.
   * 
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


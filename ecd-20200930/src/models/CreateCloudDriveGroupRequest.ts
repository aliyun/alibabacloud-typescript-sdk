// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveGroupRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  adminUserIds?: string[];
  /**
   * @remarks
   * The ID of the cloud disk in Cloud Drive Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-532033****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the team.
   * 
   * This parameter is required.
   * 
   * @example
   * 7f4bbccda0cf40bb85981b65fb5e****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the cloud disk in Cloud Drive Service. Unit: bytes. The size is unlimited.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024000
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminUserIds: 'AdminUserIds',
      cdsId: 'CdsId',
      groupId: 'GroupId',
      regionId: 'RegionId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserIds: { 'type': 'array', 'itemType': 'string' },
      cdsId: 'string',
      groupId: 'string',
      regionId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adminUserIds)) {
      $dara.Model.validateArray(this.adminUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


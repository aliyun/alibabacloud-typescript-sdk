// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudDriveGroupsRequest extends $dara.Model {
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
   * The IDs of the teams that you want to delete. You can delete multiple teams at a time.
   */
  groupId?: string[];
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudDriveGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk in Cloud Drive Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The IDs of the teams.
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
  /**
   * @remarks
   * The status of the team space. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the team space.
   * 
   * @example
   * 32212254720
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      groupId: 'GroupId',
      regionId: 'RegionId',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      status: 'string',
      totalSize: 'number',
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


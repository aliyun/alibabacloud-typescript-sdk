// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers for which you want to modify end users.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The IDs of the users.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The number of cloud computers allocated to each user.
   * 
   * @example
   * 0
   */
  maxDesktopPerUser?: number;
  /**
   * @remarks
   * The number of users assigned to each cloud computer.
   * 
   * @example
   * 1
   */
  maxUserPerDesktop?: number;
  /**
   * @remarks
   * Whether to preview the assign results instead of actually assigning cloud computers.
   * 
   * @example
   * true
   */
  preview?: boolean;
  /**
   * @remarks
   * The ID of the region. Call the DescribeRegions operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The disproportional assignment policy. Valid values:
   * 
   * AVERAGE: The system preferentially guarantees that each user is assigned with at least a cloud computer. If the number of selected cloud computers cannot be proportionally assigned to the selected users, ensure that each user is assigned a cloud computer.
   * 
   * CENTRAL: The system preferentially assigns the designated number of cloud computers to each user. If the number of selected cloud computers cannot be proportionally assigned to the selected users, ensure that each user is assigned the specified number of cloud computers.
   * 
   * @example
   * AVERAGE
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      maxDesktopPerUser: 'MaxDesktopPerUser',
      maxUserPerDesktop: 'MaxUserPerDesktop',
      preview: 'Preview',
      regionId: 'RegionId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxDesktopPerUser: 'number',
      maxUserPerDesktop: 'number',
      preview: 'boolean',
      regionId: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


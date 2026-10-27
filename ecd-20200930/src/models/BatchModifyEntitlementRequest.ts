// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud desktops for which you want to modify the authorized users.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The user IDs, which are the usernames.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The number of cloud desktops assigned to each user.
   * 
   * @example
   * 0
   */
  maxDesktopPerUser?: number;
  /**
   * @remarks
   * The number of users assigned to each cloud desktop.
   * 
   * @example
   * 1
   */
  maxUserPerDesktop?: number;
  /**
   * @remarks
   * Specifies whether to preview the assignment. A preview does not perform the actual assignment.
   * 
   * @example
   * true
   */
  preview?: boolean;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The policy used when proportional matching is not possible. Valid values:
   * 
   * - AVERAGE: Prioritizes assigning cloud desktops to each user. When the number of selected cloud desktops and users cannot be matched proportionally, cloud desktops are assigned to each user first.
   * - CENTRAL: Prioritizes assigning a specified number of cloud desktops to users. When the number of selected cloud desktops and users cannot be matched proportionally, the specified number of cloud desktops are assigned to users first.
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


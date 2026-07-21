// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers for which you want to modify authorized users.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The user IDs (usernames).
   */
  endUserId?: string[];
  /**
   * @remarks
   * The number of cloud computers to assign to each user.
   * 
   * @example
   * 0
   */
  maxDesktopPerUser?: number;
  /**
   * @remarks
   * The number of users to assign to each cloud computer.
   * 
   * @example
   * 1
   */
  maxUserPerDesktop?: number;
  /**
   * @remarks
   * Specifies whether to preview the assignment. If set to true, the assignment is not actually performed.
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
   * The policy used when the ratio of cloud computers to users cannot be evenly matched. Valid values:
   * 
   * - AVERAGE: prioritizes assigning a cloud computer to each user. When the number of selected cloud computers and users cannot be evenly matched, the system prioritizes assigning a cloud computer to each user.
   * 
   * - CENTRAL: prioritizes assigning the specified number of cloud computers to users. When the number of selected cloud computers and users cannot be evenly matched, the system prioritizes assigning the specified number of cloud computers to users.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of cloud computers. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The member IP address of the target node for migration.
   * 
   * @example
   * 192.168.1.10
   */
  targetMemberIp?: string;
  /**
   * @remarks
   * The ID of the target office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen+dir-388505****
   */
  targetOfficeSiteId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * vsw-bp1m3o4kbjxwe****
   */
  targetSubnetId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      targetMemberIp: 'TargetMemberIp',
      targetOfficeSiteId: 'TargetOfficeSiteId',
      targetSubnetId: 'TargetSubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      targetMemberIp: 'string',
      targetOfficeSiteId: 'string',
      targetSubnetId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


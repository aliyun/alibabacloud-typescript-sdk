// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers to migrate. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The region ID. To get a list of supported regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
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
   * This parameter is not publicly available.
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


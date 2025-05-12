// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen+dir-388505****
   */
  targetOfficeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      targetOfficeSiteId: 'TargetOfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      targetOfficeSiteId: 'string',
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


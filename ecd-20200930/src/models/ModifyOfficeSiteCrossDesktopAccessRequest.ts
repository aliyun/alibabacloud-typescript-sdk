// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteCrossDesktopAccessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the communication between cloud computers in an office network. If you enable the communication between cloud computers in an office network, the cloud computers can access each other.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-068266****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossDesktopAccess: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


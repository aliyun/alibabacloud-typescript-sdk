// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel. Valid values:
   * - Enterprise: Enterprise Edition.
   * - Business: Business Edition.
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The cloud computer ID. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * Specifies whether to return the extended information of the cloud computer.
   */
  needExtraInfo?: boolean;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      desktopId: 'DesktopId',
      needExtraInfo: 'NeedExtraInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      needExtraInfo: 'boolean',
      regionId: 'string',
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


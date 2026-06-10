// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopHostNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  desktopIds?: string[];
  /**
   * @remarks
   * The new hostname of the cloud desktop. The hostname must meet the following requirements:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * 
   * - The hostname can contain letters, digits, and hyphens (-). It cannot start or end with a hyphen, contain consecutive hyphens, or consist of only digits.
   * 
   * This parameter is required.
   * 
   * @example
   * NewName
   */
  newHostName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the available regions for Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopIds: 'DesktopIds',
      newHostName: 'NewHostName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      newHostName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


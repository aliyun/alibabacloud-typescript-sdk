// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The username IDs. End users specified by this parameter become the end users of the cloud computer, and the original end users of the cloud computer are removed. You can specify 1 to 100 IDs.
   * 
   * @example
   * alice
   */
  endUserId?: string[];
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
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


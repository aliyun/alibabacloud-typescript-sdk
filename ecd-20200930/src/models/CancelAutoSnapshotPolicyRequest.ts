// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop. You can specify 1 to 50 IDs. If this parameter is specified, it cannot be an empty string. The value can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-78lhzpe7kjfnd****
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by cloud desktops.
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
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
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


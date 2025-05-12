// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 20 IDs.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-ejtum8j5tfcw7****
   */
  policyId?: string;
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


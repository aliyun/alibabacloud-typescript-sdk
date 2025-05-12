// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the automatic snapshot policies that you want to delete.
   * 
   * This parameter is required.
   */
  policyId?: string[];
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
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyId)) {
      $dara.Model.validateArray(this.policyId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


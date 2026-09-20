// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the target resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the list of resource groups.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzrk6zzsy****
   */
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      newResourceGroupId: 'NewResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      newResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


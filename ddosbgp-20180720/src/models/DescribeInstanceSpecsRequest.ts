// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Anti-DDoS Origin instances to query. The value is a JSON array converted to a string. Each element in the JSON array represents an instance ID in string format. Multiple IDs are separated by commas (,).
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * ["ddosbgp-cn-n6w1r7nz****"]
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance. Default value: **cn-hangzhou**, which indicates the China (Hangzhou) region.
   * 
   * > If your instance is not in the China (Hangzhou) region, you must specify the region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. Default value: empty, which indicates the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID to query. Default value: **ap-southeast-1**, which indicates that the regions of cloud assets that can be protected by the Anti-DDoS Origin instance in the China (Hangzhou) region are queried.
   * 
   * To query other region IDs, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html) to obtain the corresponding **RegionId**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. By default, this parameter is empty, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


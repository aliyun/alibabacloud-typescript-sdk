// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to manage.
   * 
   * > Call [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-npk1z7t9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IP addresses to add to the Anti-DDoS Origin instance for protection. The value is a string that is converted from a JSON array. Each element in the JSON array is a struct that contains the following fields:
   * 
   * - **ip**: The IP address to add. This parameter is of the String type and is required.
   * 
   * - **member_uid**: The ID of the member account that owns the asset. This parameter is of the String type and is optional. Specify this parameter only when you add an asset that belongs to a member account. For example: [{"ip":"121.41.XX.XX","member_uid":"120100811162\\*\\*\\*\\*"}]
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ip":"121.41.XX.XX"},{"ip":"121.42.XX.XX"}]
   */
  ipList?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > Call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query information about all regions that Anti-DDoS Origin supports.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group in Resource Management to which the Anti-DDoS Origin instance belongs. If you leave this parameter empty, the instance is added to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   * 
   * @deprecated
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
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


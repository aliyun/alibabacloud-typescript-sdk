// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
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
   * A list of IP addresses to remove from the protected objects of the Anti-DDoS Origin instance. Specify the list as a string that is a JSON array. Each element in the array is a struct that contains the following field:
   * 
   * - **ip**: The IP address to remove. This parameter is a string and is required.
   * 
   *   > The IP address must be in the protection list of the Anti-DDoS Origin instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ip":"1.XX.XX.1"},{"ip":"2.XX.XX.2"}]
   */
  ipList?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > Call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query all regions that Anti-DDoS Origin supports.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. If you leave this parameter empty, the instance belongs to the default resource group.
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


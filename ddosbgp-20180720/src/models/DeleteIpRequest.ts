// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the Anti-DDoS Origin instance.
   * 
   * > You can call [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) to query instance IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-npk1z7t9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IP addresses to remove from the protected objects of the Anti-DDoS Origin instance. The value is a string converted from a JSON array. Each element in the JSON array is a struct that contains the following fields:
   * 
   * - **ip**: String | Required | The IP address to remove.
   *     
   *     > The IP address must already be in the protection list of the Anti-DDoS Origin instance.
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
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query all regions supported by Anti-DDoS Origin.
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


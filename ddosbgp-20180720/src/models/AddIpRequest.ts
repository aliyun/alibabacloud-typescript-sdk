// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query instance IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-npk1z7t9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IP addresses to add to the Anti-DDoS Origin instance for protection. The list is represented in a character string format converted from a JSON array. Each element in the JSON array is a structure that contains the following fields:
   * 
   * - **ip**: String | Required | The IP address to add.
   * 
   * - **member_uid**: String | Optional | The member accounts to which the asset belongs. This field is required only when you add an asset under member accounts. Example: [{"ip":"121.41.XX.XX","member_uid":"120100811162****"}]
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all regions supported by Anti-DDoS Origin.
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


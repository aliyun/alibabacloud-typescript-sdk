// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBlackholeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * > You can call [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protected IP address for which you want to deactivate blackhole filtering status.
   * 
   * > You can invoke [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) to query all IP assets protected by Anti-DDoS Origin instances and their protection status, including whether the IP addresses are in blackhole filtering status.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query all region IDs supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the default resource group is used.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
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


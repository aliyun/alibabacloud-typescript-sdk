// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance for which you want to set a remark.
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
   * The remark for the Anti-DDoS Origin instance.
   * 
   * @example
   * test-remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudProcessMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-7mz****hw0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The machine identifier (MID). You can call the [DescribeHybridCloudSdkServers](https://help.aliyun.com/document_detail/2982006.html) operation to query the hybrid cloud SDK list and obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 2fdb63fea03b173bc9e65c24****d7d5
   */
  mid?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mid: 'Mid',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mid: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


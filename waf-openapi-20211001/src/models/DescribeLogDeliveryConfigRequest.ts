// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the log delivery configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  deliveryName?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryName: 'DeliveryName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryName: 'string',
      instanceId: 'string',
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


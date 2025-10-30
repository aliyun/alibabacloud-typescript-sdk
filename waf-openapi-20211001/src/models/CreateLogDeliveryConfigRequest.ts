// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogDeliveryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the log delivery configuration. Set the value to a JSON string that contains multiple parameters.
   * 
   * >  The parameters vary based on the type of the **log delivery configuration** specified by **DeliveryType**. For more information, see **Parameter description for log delivery configuration**.
   * 
   * This parameter is required.
   */
  deliveryDetail?: string;
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
   * The type of the log delivery configuration. Valid values:
   * 
   * *   **syslog**: Logs are delivered to a syslog service.
   * *   **kafka**: Logs are delivered to a Kafka service.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
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
      deliveryDetail: 'DeliveryDetail',
      deliveryName: 'DeliveryName',
      deliveryType: 'DeliveryType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDetail: 'string',
      deliveryName: 'string',
      deliveryType: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogDeliveryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the log delivery configuration. The value is a JSON string that is generated from a series of parameters.
   * 
   * > The parameters vary based on the value of **DeliveryType**. For more information, see **Parameters for log delivery configuration details**.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "rfcVersion": "rfc3164",
   *   "protocol": "tcp",
   *   "servers": [
   *     {
   *       "address": "1.1.1.1",
   *       "port": 20
   *     }
   *   ]
   * }
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
   * - **syslog**: Delivers logs to a syslog service.
   * 
   * - **kafka**: Delivers logs to a Kafka service.
   * 
   * This parameter is required.
   * 
   * @example
   * syslog
   */
  deliveryType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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


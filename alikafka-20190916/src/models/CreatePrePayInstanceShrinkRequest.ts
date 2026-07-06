// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * -
   * 
   * -
   * 
   * - The key must be 1 to 128 characters long. It cannot start with aliyun or acs:, nor can it contain http\\:// or https\\://.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * -
   * 
   * -
   * 
   * - The value can be 0 to 128 characters long. It cannot start with aliyun or acs:, nor can it contain http\\:// or https\\://.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrePayInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Confluent components.
   * 
   * > This parameter is required if you create a Confluent instance.
   */
  confluentConfigShrink?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: an instance accessible from the internet and a VPC
   * 
   * - **5**: an instance accessible from a VPC only
   * 
   * > If you create a Confluent instance, you cannot specify the deployment type and must set this parameter to 5. After the instance is created, you can configure internet access for each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity, in GB.
   * 
   * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: ultra disk
   * 
   * - **1**: SSD
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 1
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration, in months. Default value: 1. Valid values:
   * 
   * - Confluent instances: **1** and **12**
   * 
   * - Kafka instances: **1**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The peak internet bandwidth.
   * 
   * - This parameter is required if you set **DeployType** to **4**.
   * 
   * - For the value range, see [pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * The I/O specification.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **0**: subscription
   * 
   * - **4**: subscription for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a Confluent instance.
   * 
   * @example
   * 1000
   */
  partitionNum?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * If you do not specify this parameter, the instance is placed in the default resource group. You can find the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values for Kafka instances:
   * 
   * - **normal**: Standard Edition (High-write)
   * 
   * - **professional**: Professional Edition (High-write)
   * 
   * - **professionalForHighRead**: Professional Edition (High-read)
   * 
   * Valid values for Confluent instances:
   * 
   * - **professional**: Professional Edition
   * 
   * - **enterprise**: Enterprise Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The tags to attach to the instance. You can specify up to 20 tags.
   */
  tag?: CreatePrePayInstanceShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      duration: 'Duration',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfigShrink: 'string',
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      duration: 'number',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePrePayInstanceShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


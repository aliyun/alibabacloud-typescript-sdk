// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - This parameter can be left empty.
   * 
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * FinanceJoshua
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

export class CreatePrePayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Confluent component configurations.
   * 
   * 
   * > This parameter is required when you create a Confluent instance.
   */
  confluentConfigShrink?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: Internet- and VPC-connected instance
   * 
   * - **5**: VPC-connected instance
   * 
   * 
   * > If you create a Confluent instance, the deployment type is not supported. You can only set this parameter to 5. After the purchase, you can configure whether to enable public access for each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: ultra cloud disk
   * 
   * - **1**: SSD
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Default value: 1. Valid values:
   * 
   * - **Confluent instances: 1 or 12**
   * - **Kafka instances: 1**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The public network traffic.
   * 
   * - This parameter is required if **DeployType** is set to **4**.
   * 
   * - For the value range, see [Pay-as-you-go billing method](https://help.aliyun.com/document_detail/72142.html).
   * 
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The peak traffic (not recommended).
   * 
   * - You must specify at least one of **IoMax** and **IoMaxSpec**. If you specify both, **IoMaxSpec** takes precedence. We recommend that you specify only **IoMaxSpec**.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - You must specify at least one of **IoMax** and **IoMaxSpec**. If you specify both, **IoMaxSpec** takes precedence. We recommend that you specify only **IoMaxSpec**.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **0**: subscription
   * 
   * - **4**: Confluent subscription
   * 
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * * If you specify both the number of partitions and the topic specification, the system verifies whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 50
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
   * The resource group ID.
   * 
   * If you do not specify this parameter, the instance is placed in the default resource group. You can view the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values for ApsaraMQ for Kafka instances:
   * 
   * - **normal**: Normal Edition (shared high-write)
   * 
   * - **professional**: Professional Edition (shared high-write)
   * 
   * - **professionalForHighRead**: Professional Edition (shared high-read)
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
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePrePayOrderShrinkRequestTag[];
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system verifies whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. Additional fees are charged if the value exceeds the default value.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If you create a Confluent instance, you do not need to specify this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      duration: 'Duration',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      tag: 'Tag',
      topicQuota: 'TopicQuota',
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
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePrePayOrderShrinkRequestTag },
      topicQuota: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   If this parameter is left empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * *   Valid values of N: 1 to 20.
   * *   This parameter can be left empty.
   * *   The tag value can be 1 to 128 characters in length and cannot start with acs: or aliyun or contain [http:// or https://.](http://https://。)
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
   * The configurations of Confluent.
   * 
   * >  When you create an ApsaraMQ for Confluent instance, you must configure this parameter.
   */
  confluentConfigShrink?: string;
  /**
   * @remarks
   * The type of the network in which the instance is deployed. Valid values:
   * 
   * *   **4**: Internet and virtual private cloud (VPC)
   * *   **5**: VPC
   * 
   * >  If you create an ApsaraMQ for Confluent instance, set the value to 5. After the instance is created, you can specify whether to enable each component.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size. Unit: GB
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The subscription duration. Unit: months. Default value: 1. Valid values:
   * 
   * *   **1 to 12**
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The maximum Internet traffic in the instance.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values, see [Pay-as-you-go](https://help.aliyun.com/document_detail/72142.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must set one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure one of **IoMax** and **IoMaxSpec**. If both parameters are configured, the value of **IoMaxSpec** is used. We recommend that you configure only **IoMaxSpec**.
   * *   For more information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **0**: the subscription billing method
   * *   **4**: the subscription billing method for ApsaraMQ for Confluent instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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
   * The ID of the resource group.
   * 
   * If this parameter is left empty, the default resource group is used. You can view the resource group ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **normal**: Standard Edition (High Write)
   * *   **professional**: Professional Edition (High Write)
   * *   **professionalForHighRead**: Professional Edition (High Read)
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create an ApsaraMQ for Confluent instance, you do not need to configure this parameter.
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


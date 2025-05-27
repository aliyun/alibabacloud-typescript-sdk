// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePostPayOrderRequestServerlessConfig } from "./CreatePostPayOrderRequestServerlessConfig";
import { CreatePostPayOrderRequestTag } from "./CreatePostPayOrderRequestTag";


export class CreatePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: deploys the instance that allows access from the Internet and a VPC.
   * *   **5**: deploys the instance that allows access only from a VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk size.
   * 
   * For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type of the instance. Valid values:
   * 
   * *   **0**: ultra disk
   * *   **1**: standard SSD
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * *   If you set **DeployType** to **4**, you must configure this parameter.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic in the instance. We recommend that you do not configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   1: pay-as-you-go (reserved capacity).
   * *   3: pay-as-you-go (reserved capacity) + pay-as-you-go (on-demand capacity)
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
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
   * The parameters configured for the serverless ApsaraMQ for Kafka instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfig?: CreatePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information about the instance editions, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePostPayOrderRequestTag[];
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only ParittionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you consume exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If you create a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfig: CreatePostPayOrderRequestServerlessConfig,
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayOrderRequestTag },
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


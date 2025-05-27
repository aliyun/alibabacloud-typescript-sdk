// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradePostPayOrderRequestServerlessConfig } from "./UpgradePostPayOrderRequestServerlessConfig";


export class UpgradePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * *   The disk size that you specify must be greater than or equal to the current disk size of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The maximum Internet traffic of the instance.
   * 
   * *   The Internet traffic that you specify must be greater than or equal to the current Internet traffic of the instance.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > 
   * 
   * *   If you set **EipModel** to **true**, set **EipMax** to a value that is greater than 0.
   * 
   * *   If you set **EipModel** to **false**, set **EipMax** to **0**.
   * 
   * *   If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether to enable Internet access for the instance. Valid values:
   * 
   * *   true: enables Internet access.
   * *   false: disables Internet access.
   * 
   * @example
   * false
   */
  eipModel?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum traffic of the instance. We recommend that you do not configure this parameter.
   * 
   * *   The maximum traffic that you specify must be greater than or equal to the current maximum traffic of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 60
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification of the instance. We recommend that you configure this parameter.
   * 
   * *   The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * *   You must configure at least one of IoMax and IoMaxSpec. If you configure both parameters, the value of IoMaxSpec takes effect. We recommend that you configure only IoMaxSpec.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * alikafka.hw.6xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The number of partitions. We recommend that you configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
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
   * The parameters that are configured for the serverless instance. These parameters are required only when you create a serverless instance.
   */
  serverlessConfig?: UpgradePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The instance edition.
   * 
   * Valid values for this parameter if you set PaidType to 1:
   * 
   * *   normal: Standard Edition (High Write)
   * *   professional: Professional Edition (High Write)
   * *   professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values for this parameter if you set PaidType to 3:
   * 
   * *   normal: Serverless Standard Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics. We recommend that you do not configure this parameter.
   * 
   * *   You must configure one of PartitionNum and TopicQuota. We recommend that you configure only PartitionNum.
   * *   If you configure PartitionNum and TopicQuota at the same time, the system verifies whether the price of the partitions equals the price of the topics based on the previous topic-based selling mode. If the price of the partitions does not equal the price of the topics, an error is returned. If the price of the partitions equals the price of the topics, the instance is purchased based on the partition number.
   * *   The default value of TopicQuota varies based on the value of IoMaxSpec. If the number of topics that you use exceeds the default value, you are charged additional fees.
   * *   For information about the valid values of this parameter, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * >  If the instance is a serverless ApsaraMQ for Kafka instance, you do not need to configure this parameter.
   * 
   * @example
   * 80
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      partitionNum: 'number',
      regionId: 'string',
      serverlessConfig: UpgradePostPayOrderRequestServerlessConfig,
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePrePayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Confluent component configurations.
   */
  confluentConfigShrink?: string;
  /**
   * @remarks
   * The disk capacity.
   * 
   * - The disk capacity that you specify must be greater than or equal to the current disk capacity of the instance.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * The public network traffic.
   * 
   * - The public network traffic that you specify must be greater than or equal to the current public network traffic of the instance.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > - If **EipModel** is set to **true**, the value of **EipMax** must be greater than 0.
   * > - If **EipModel** is set to **false**, the value of **EipMax** must be **0**.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether public network access is required. Valid values:
   * 
   * - true: Public network access is required.
   * 
   * - false: Public network access is not required.
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * true
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
   * The peak traffic (not recommended).
   * 
   * - The peak traffic that you specify must be greater than or equal to the current peak traffic of the instance.
   * 
   * - You must specify one of peak traffic and traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 40
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * 
   * - You must specify one of peak traffic and traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **0**: subscription.
   * 
   * - **4**: Confluent series subscription.
   * 
   * @example
   * 4
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify one of the number of partitions and the topic specification. Specify only the number of partitions.
   * 
   * * If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you upgrade a Confluent instance, you do not need to specify this parameter. This parameter is required for subscription instances.
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
   * The specification type.
   * 
   * Valid values for ApsaraMQ for Kafka instances:
   * 
   * - **normal**: Standard Edition (shared throughput)
   * 
   * - **professional**: Professional Edition (shared throughput)
   * 
   * - **professionalForHighRead**: Professional Edition (shared read)
   * 
   * Valid values for Confluent instances:
   * 
   * - **professional**: Professional Edition.
   * 
   * - **enterprise**: Enterprise Edition.
   * 
   * Downgrading an instance from Professional Edition to Standard Edition is not supported. For more information about the specification types, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify one of the number of partitions and the topic specification. Specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. Additional fees are charged if the value exceeds the default value.
   * 
   * - For valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfigShrink: 'string',
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


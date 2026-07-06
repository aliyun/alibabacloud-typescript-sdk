// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePostPayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * - The disk capacity that you specify must be greater than or equal to the current disk capacity of the instance.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If the instance is a serverless instance, you do not need to specify this parameter. This parameter is required for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - The Internet traffic that you specify must be greater than or equal to the current Internet traffic of the instance.
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > - If EipModel is set to true, the value of EipMax must be greater than 0.
   * > - If EipModel is set to false, the value of EipMax must be 0.
   * > - If the instance is a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether the instance requires Internet access. Valid values:
   * 
   * - true: Internet access is required.
   * 
   * - false: Internet access is not required.
   * > This parameter is optional for pay-as-you-go instances. This parameter is required for serverless instances.
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
   * The peak traffic (not recommended).
   * 
   * - The peak traffic that you specify must be greater than or equal to the current peak traffic of the instance.
   * 
   * - You must specify either the peak traffic or the traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - The traffic specification that you specify must be greater than or equal to the current traffic specification of the instance.
   * 
   * - You must specify either the peak traffic or the traffic specification. If you specify both, the traffic specification takes precedence. Specify only the traffic specification.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter. This parameter is required for pay-as-you-go instances.
   * 
   * @example
   * alikafka.hw.6xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify either the number of partitions or the topic specification. Specify only the number of partitions.
   * 
   * * If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, an error is returned. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter. This parameter is required for pay-as-you-go instances.
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
   * The settings of the serverless instance. This parameter is required when you change the specifications of a serverless instance.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * If the PaidType of the instance is 1 (pay-as-you-go), valid values:
   * 
   * - normal: Standard Edition (shared throughput)
   * - professional: Professional Edition (shared throughput)
   * - professionalForHighRead: Professional Edition (shared read throughput)
   * 
   * If the PaidType of the instance is 3 (reserved specification pay-as-you-go + serverless elastic scaling pay-as-you-go), valid values:
   * - normal: Serverless Standard Edition
   * 
   * For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify either the number of partitions or the topic specification. Specify only the number of partitions.
   * 
   * - If you specify both the number of partitions and the topic specification, the system validates whether the number of partitions and the topic specification are equivalent based on the legacy topic sales model. If they are not equivalent, an error is returned. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. Additional fees are charged if the value exceeds the default value.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter.
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
      serverlessConfigShrink: 'ServerlessConfig',
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
      serverlessConfigShrink: 'string',
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


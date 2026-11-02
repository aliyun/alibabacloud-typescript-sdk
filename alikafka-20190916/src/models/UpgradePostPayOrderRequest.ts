// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePostPayOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved traffic specification for message publishing. Only integers are supported, and the minimum value is 60. This parameter is required for a serverless instance.
   * > The actual upper limit is subject to the inventory in the current region. Refer to the available range on the buy page.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved traffic specification for message consumption. Only integers are supported, and the minimum value is 20. This parameter is required for a serverless instance.
   * 
   * > The actual upper limit is subject to the inventory in the current region. Refer to the available range on the buy page.
   * 
   * @example
   * 60
   */
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * - The specified disk capacity must be greater than or equal to the current disk capacity of the instance.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If the instance is a serverless instance, you do not need to specify this parameter. You must specify this parameter for a pay-as-you-go instance.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - The specified Internet traffic must be greater than or equal to the current Internet traffic of the instance.
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > - If **EipModel** is set to **true**, **EipMax** must be greater than 0.
   * > - If **EipModel** is set to **false**, **EipMax** must be set to **0**.
   * > - If the instance is a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * Specifies whether to enable Internet access. Valid values:
   * 
   * - true: enables Internet access.
   * 
   * - false: disables Internet access.
   * > You can specify this parameter for a pay-as-you-go instance. You must specify this parameter for a serverless instance.
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
   * The peak traffic. We do not recommend that you specify this parameter.
   * 
   * - The specified peak traffic must be greater than or equal to the current peak traffic of the instance.
   * 
   * - You must specify either the peak traffic or the traffic specification. If both are specified, the traffic specification takes precedence. We recommend that you specify only the traffic specification.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification. We recommend that you specify this parameter.
   * 
   * - The specified traffic specification must be greater than or equal to the current traffic specification of the instance.
   * 
   * - You must specify either the peak traffic or the traffic specification. If both are specified, the traffic specification takes precedence. We recommend that you specify only the traffic specification.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter. You must specify this parameter for a pay-as-you-go instance.
   * 
   * @example
   * alikafka.hw.6xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The number of partitions. We recommend that you specify this parameter.
   * 
   * * You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * * If both the number of partitions and the topic specification are specified, the system verifies whether they are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > If the instance is a serverless instance, you do not need to specify this parameter. You must specify this parameter for a pay-as-you-go instance.
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
   * The settings for the serverless instance. This parameter is required when you change the specifications of a serverless instance.
   */
  serverlessConfig?: UpgradePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values when the PaidType parameter of the instance is set to 1 (pay-as-you-go):
   * 
   * - normal: Standard Edition (High Write)
   * - professional: Professional Edition (High Write)
   * - professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values when the PaidType parameter of the instance is set to 3 (pay-as-you-go for reserved specifications + pay-as-you-go for serverless elastic scaling):
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
   * The number of topics. We do not recommend that you specify this parameter.
   * 
   * - You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * - If both the number of partitions and the topic specification are specified, the system verifies whether they are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. If the number of topics exceeds the default value, you are charged extra fees.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
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


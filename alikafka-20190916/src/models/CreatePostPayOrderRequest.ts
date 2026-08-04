// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved publish traffic specification value. Only integers are supported. The minimum value is 60. This parameter is required for serverless instances.
   * 
   * 
   * > The actual upper limit depends on the inventory in the current region. Refer to the purchase page for the available range.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved subscribe traffic specification value. Only integers are supported. The minimum value is 20. This parameter is required for serverless instances.
   * 
   * > The actual upper limit depends on the inventory in the current region. Refer to the purchase page for the available range.
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

export class CreatePostPayOrderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * - N ranges from 1 to 20.
   * - If this parameter is left empty, all tag keys are matched.
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
   * - N ranges from 1 to 20.
   * - If the tag key is left empty, this parameter must also be left empty. If this parameter is left empty, all tag values are matched.
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

export class CreatePostPayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - **4**: Internet- and VPC-connected instance
   * 
   * - **5**: VPC-connected instance
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity.
   * 
   * For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * > If you create a serverless instance, you do not need to set this parameter.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: premium cloud disk
   * 
   * - **1**: SSD
   * > If you create a serverless instance, you do not need to set this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - If **DeployType** is set to **4**, this parameter is required.
   * 
   * - For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to set this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The maximum traffic (not recommended).
   * 
   * - You must specify one of IoMax and IoMaxSpec. If both parameters are specified, the value of IoMaxSpec takes precedence. Specify only IoMaxSpec.
   * 
   * - For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to set this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - You must specify one of IoMax and IoMaxSpec. If both parameters are specified, the value of IoMaxSpec takes precedence. Specify only IoMaxSpec.
   * 
   * - For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to set this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - 1 (default): reserved instance with pay-as-you-go billing.
   * - 3: serverless instance with reserved specification pay-as-you-go billing + serverless elastic scaling pay-as-you-go billing.
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify one of PartitionNum and TopicQuota. Specify only PartitionNum.
   * 
   * * If both PartitionNum and TopicQuota are specified, the system verifies whether the values are equivalent based on the legacy topic sales model. If the values are not equivalent, the request fails. If the values are equivalent, the purchase is made based on the number of partitions.
   * 
   * * For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to set this parameter.
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
   * If this parameter is not specified, the instance is placed in the default resource group. You can view the resource group ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings of the serverless instance. This parameter is required when you create a serverless instance.
   */
  serverlessConfig?: CreatePostPayOrderRequestServerlessConfig;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values when PaidType is set to 1 (reserved instance with pay-as-you-go billing):
   * 
   * - normal: Standard Edition (shared throughput for writes)
   * - professional: Professional Edition (shared throughput for writes)
   * - professionalForHighRead: Professional Edition (shared throughput for reads)
   * 
   * Valid values when PaidType is set to 3 (serverless instance with reserved specification pay-as-you-go billing + serverless elastic scaling pay-as-you-go billing):
   * 
   * - basic: Serverless Basic Edition
   * - normal: Serverless Standard Edition
   * - professional: Serverless Professional Edition
   * 
   * For more information about these specification types, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreatePostPayOrderRequestTag[];
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify one of PartitionNum and TopicQuota. Specify only PartitionNum.
   * 
   * - If both PartitionNum and TopicQuota are specified, the system verifies whether the values are equivalent based on the legacy topic sales model. If the values are not equivalent, the request fails. If the values are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. If the value exceeds the default value, additional fees are charged.
   * 
   * - For the value range, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to set this parameter.
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


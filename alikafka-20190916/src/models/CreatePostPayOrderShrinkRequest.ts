// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * - N ranges from 1 to 20.
   * - If this parameter is left empty, all tag keys are matched.
   * - The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * - If the tag key is empty, this parameter must be empty. If this parameter is left empty, all tag values are matched.
   * - The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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

export class CreatePostPayOrderShrinkRequest extends $dara.Model {
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
   * For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * > If you create a serverless instance, you do not need to specify this parameter.
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
   * - **1**: standard SSD
   * > If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - This parameter is required if **DeployType** is set to **4**.
   * 
   * - For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The peak traffic (not recommended).
   * 
   * - You must specify either the peak traffic or the traffic specification. If both are specified, the traffic specification takes precedence. We recommend that you specify only the traffic specification.
   * 
   * - For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification (recommended).
   * 
   * - You must specify either the peak traffic or the traffic specification. If both are specified, the traffic specification takes precedence. We recommend that you specify only the traffic specification.
   * 
   * - For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to specify this parameter.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - 1 (default): pay-as-you-go for reserved instances
   * - 3: pay-as-you-go for reserved specifications and elastic scaling of serverless instances
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions (recommended).
   * 
   * * You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * * If both the number of partitions and the topic specification are specified, the system verifies whether they are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the instance is purchased based on the number of partitions.
   * 
   * * For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to specify this parameter.
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
   * If you do not specify this parameter, the instance is added to the default resource group. You can view the resource group ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings for the serverless instance. This parameter is required when you create a serverless instance.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values when the PaidType parameter is set to 1 (pay-as-you-go for reserved instances):
   * 
   * - normal: Standard Edition (High Write)
   * - professional: Professional Edition (High Write)
   * - professionalForHighRead: Professional Edition (High Read)
   * 
   * Valid values when the PaidType parameter is set to 3 (pay-as-you-go for reserved specifications and elastic scaling of serverless instances):
   * 
   * - basic: Serverless Basic Edition
   * - normal: Serverless Standard Edition
   * - professional: Serverless Professional Edition
   * 
   * For more information about the preceding specification types, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * normal
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreatePostPayOrderShrinkRequestTag[];
  /**
   * @remarks
   * The number of topics (not recommended).
   * 
   * - You must specify either the number of partitions or the topic specification. We recommend that you specify only the number of partitions.
   * 
   * - If both the number of partitions and the topic specification are specified, the system verifies whether they are equivalent based on the legacy topic sales model. If they are not equivalent, the request fails. If they are equivalent, the instance is purchased based on the number of partitions.
   * 
   * - The default value varies based on the traffic specification. If the number of topics exceeds the default value, you are charged extra fees.
   * 
   * - For more information about the valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > If you create a serverless instance, you do not need to specify this parameter.
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
      serverlessConfigShrink: 'ServerlessConfig',
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
      serverlessConfigShrink: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayOrderShrinkRequestTag },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayOrderShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * - N can be an integer from 1 to 20.
   * 
   * - If this parameter is empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length. It cannot start with \\`aliyun\\` or \\`acs:\\` and cannot contain \\`http\\://\\` or \\`https\\://\\`.
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
   * - N can be an integer from 1 to 20.
   * 
   * - This parameter must be empty if the tag key is empty. If this parameter is empty, all tag values are matched.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with \\`aliyun\\` or \\`acs:\\` and cannot contain \\`http\\://\\` or \\`https\\://\\`.
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
   * - **4**: An instance that is accessible from the Internet and a VPC.
   * 
   * - **5**: An instance that is accessible only from a VPC.
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
   * For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
   * 
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: Ultra disk
   * 
   * - **1**: SSD
   * 
   * > Do not specify this parameter if you create a Serverless instance.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - This parameter is required if you set **DeployType** to **4**.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
   * 
   * @example
   * 0
   */
  eipMax?: number;
  /**
   * @remarks
   * The peak traffic. This parameter is not recommended.
   * 
   * - You must specify this parameter or \\`IoMaxSpec\\`. If you specify both parameters, the value of \\`IoMaxSpec\\` takes precedence. We recommend that you specify only \\`IoMaxSpec\\`.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
   * 
   * @example
   * 20
   */
  ioMax?: number;
  /**
   * @remarks
   * The traffic specification. This parameter is recommended.
   * 
   * - You must specify this parameter or \\`IoMax\\`. If you specify both parameters, the value of this parameter takes precedence. We recommend that you specify only this parameter.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - 1 (default): Pay-as-you-go for a reserved instance.
   * 
   * - 3: Pay-as-you-go for a reserved Serverless instance and pay-as-you-go for elastic scaling of a Serverless instance.
   * 
   * @example
   * 1
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions. This parameter is recommended.
   * 
   * - You must specify this parameter or \\`TopicQuota\\`. We recommend that you specify only this parameter.
   * 
   * - If you specify both this parameter and \\`TopicQuota\\`, the system verifies whether the values of the two parameters are equivalent based on the previous topic-based sales model. If the values are not equivalent, the system returns a failure. If the values are equivalent, the purchase is made based on the number of partitions.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
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
   * If you do not set this parameter, the instance is added to the default resource group. You can view the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings of the Serverless instance. This parameter is required if you create a Serverless instance.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * If you set \\`PaidType\\` to 1 (pay-as-you-go for a reserved instance), valid values are:
   * 
   * - normal: Standard Edition (High-write)
   * 
   * - professional: Professional Edition (High-write)
   * 
   * - professionalForHighRead: Professional Edition (High-read)
   * 
   * If you set \\`PaidType\\` to 3 (pay-as-you-go for a reserved Serverless instance and pay-as-you-go for elastic scaling of a Serverless instance), valid values are:
   * 
   * - basic: Serverless Basic Edition
   * 
   * - normal: Serverless Standard Edition
   * 
   * - professional: Serverless Professional Edition
   * 
   * For more information about these specification types, see [Billing](https://help.aliyun.com/document_detail/84737.html).
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
   * The number of topics. This parameter is not recommended.
   * 
   * - You must specify this parameter or \\`PartitionNum\\`. We recommend that you specify only \\`PartitionNum\\`.
   * 
   * - If you specify both this parameter and \\`PartitionNum\\`, the system verifies whether the values of the two parameters are equivalent based on the previous topic-based sales model. If the values are not equivalent, the system returns a failure. If the values are equivalent, the purchase is made based on the number of partitions.
   * 
   * - The default value of this parameter varies based on the traffic specification. You are charged for the extra topics that exceed the default value.
   * 
   * - For the valid values, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > Do not specify this parameter if you create a Serverless instance.
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


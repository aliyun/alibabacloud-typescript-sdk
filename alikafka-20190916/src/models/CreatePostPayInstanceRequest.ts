// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved publish throughput specification. Only integers are supported. The minimum value is 60. Required for Serverless instances.
   * 
   * > The actual upper limit is subject to available inventory in the current region. Refer to the available options on the purchase page.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved subscribe throughput specification. Only integers are supported. The minimum value is 20. Required for Serverless instances.
   * 
   * > The actual upper limit is subject to available inventory in the current region. Refer to the available options on the purchase page.
   * 
   * @example
   * 20
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

export class CreatePostPayInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * - N ranges from 1 to 20.
   * - If left empty, all tag keys are matched.
   * - The value can be up to 128 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
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
   * - If the tag key is empty, this parameter must also be empty. If empty, all tag values are matched.
   * - The value can be up to 128 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * test
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

export class CreatePostPayInstanceRequest extends $dara.Model {
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
   * 4
   */
  deployType?: number;
  /**
   * @remarks
   * The cloud disk capacity.
   * 
   * For valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required when you create a Serverless instance.
   * 
   * @example
   * 1500
   */
  diskSize?: number;
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   * - **0**: premium performance disk
   * 
   * - **1**: SSD
   * > This parameter is not required when you create a Serverless instance.
   * 
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @remarks
   * The Internet traffic.
   * 
   * - Required if **DeployType** is set to **4**.
   * 
   * - For valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required when you create a Serverless instance.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * The traffic specification.
   * 
   * - For valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required when you create a Serverless instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - 1 (default): pay-as-you-go for reserved instances.
   * - 3: pay-as-you-go for reserved capacity of Serverless instances plus pay-as-you-go for Serverless elastic scaling.
   * 
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions to purchase.
   * 
   * * For valid values, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required for Serverless instances.
   * 
   * @example
   * 100
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
   * If not specified, the instance is added to the default resource group. You can view resource group IDs in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings for the Serverless instance. Required when creating a Serverless instance.
   */
  serverlessConfig?: CreatePostPayInstanceRequestServerlessConfig;
  /**
   * @remarks
   * The instance type.
   * 
   * When PaidType is set to 1 (pay-as-you-go for reserved instances), valid values are:
   * 
   * - normal: Standard Edition (high-write)
   * - professional: Professional Edition (high-write)
   * - professionalForHighRead: Professional Edition (high-read)
   * 
   * When PaidType is set to 3 (pay-as-you-go for reserved capacity of Serverless instances plus pay-as-you-go for Serverless elastic scaling), valid values are:
   * 
   * - basic: Serverless Basic Edition
   * - normal: Serverless Standard Edition
   * - professional: Serverless Professional Edition
   * 
   * For descriptions of the above instance types, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreatePostPayInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessConfig: 'ServerlessConfig',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessConfig: CreatePostPayInstanceRequestServerlessConfig,
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePostPayInstanceRequestTag },
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


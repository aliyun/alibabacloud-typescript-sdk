// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved publish traffic. The value must be an integer. Minimum value: 60. This parameter is required for Serverless instances.
   * 
   * > The actual upper limit is subject to the inventory in the current region. For more information, see the value range on the buy page.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved subscribe traffic. The value must be an integer. Minimum value: 20. This parameter is required for Serverless instances.
   * 
   * > The actual upper limit is subject to the inventory in the current region. For more information, see the value range on the buy page.
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
   * 
   * - The value of N can be from 1 to 20.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http\\:// or https\\://.
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
   * 
   * - The value of N can be from 1 to 20.
   * 
   * - If the tag key is empty, this parameter must also be empty. If this parameter is empty, all tag values are matched.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http\\:// or https\\://.
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
   * - **4**: instance that is accessible over the internet and a VPC
   * 
   * - **5**: instance that is accessible only over a VPC
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @remarks
   * The disk capacity.
   * 
   * For more information about the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required when you create a Serverless instance.
   * 
   * @example
   * 1500
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - **0**: ultra disk
   * 
   * - **1**: SSD
   * 
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
   * - This parameter is required if you set **DeployType** to **4**.
   * 
   * - For more information about the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
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
   * - For more information about the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
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
   * 
   * - 3: pay-as-you-go for reserved capacity and elastic scaling of Serverless instances.
   * 
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * - For more information about the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if the instance is a Serverless instance.
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
   * The ID of the resource group.
   * 
   * If you do not specify this parameter, the instance is added to the default resource group. You can view the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings of the Serverless instance. This parameter is required when you create a Serverless instance.
   */
  serverlessConfig?: CreatePostPayInstanceRequestServerlessConfig;
  /**
   * @remarks
   * The edition of the instance.
   * 
   * If you set the PaidType parameter to 1 (pay-as-you-go for reserved instances), valid values are:
   * 
   * - normal: Standard Edition (High-write)
   * 
   * - professional: Professional Edition (High-write)
   * 
   * - professionalForHighRead: Professional Edition (High-read)
   * 
   * If you set the PaidType parameter to 3 (pay-as-you-go for reserved capacity and elastic scaling of Serverless instances), valid values are:
   * 
   * - basic: Serverless Basic Edition
   * 
   * - normal: Serverless Standard Edition
   * 
   * - professional: Serverless Professional Edition
   * 
   * For more information about these instance editions, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The tags.
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


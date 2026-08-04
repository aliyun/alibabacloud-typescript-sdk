// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved publish traffic specification value. Only integers are supported. The minimum value is 60. This parameter is required for serverless instances.
   * 
   * 
   * > The actual upper limit is subject to the inventory in the current region. Refer to the purchase page for the available range.
   * 
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved subscribe traffic specification value. Only integers are supported. The minimum value is 20. This parameter is required for serverless instances.
   * 
   * > The actual upper limit is subject to the inventory in the current region. Refer to the purchase page for the available range.
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
   * The disk capacity.
   * 
   * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required if you create a serverless instance.
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
   * > This parameter is not required if you create a serverless instance.
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
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a serverless instance.
   * 
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @remarks
   * The traffic specification.
   * 
   * - For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * > This parameter is not required if you create a serverless instance.
   * 
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - 1 (default): pay-as-you-go for reserved instances.
   * - 3: pay-as-you-go for serverless reserved specifications + pay-as-you-go for serverless elastic scaling.
   * 
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @remarks
   * The number of partitions to purchase.
   * 
   * * For the value range, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * > This parameter is not required if the instance is a serverless instance.
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
   * If this parameter is not specified, the instance is placed in the default resource group. You can view the resource group ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The settings for the serverless instance. This parameter is required when you create a serverless instance.
   */
  serverlessConfig?: CreatePostPayInstanceRequestServerlessConfig;
  /**
   * @remarks
   * The specification type.
   * 
   * Valid values when PaidType is set to 1 (pay-as-you-go for reserved instances):
   * 
   * - normal: Standard Edition (shared throughput)
   * - professional: Professional Edition (shared throughput)
   * - professionalForHighRead: Professional Edition (shared throughput for high read)
   * 
   * Valid values when PaidType is set to 3 (pay-as-you-go for serverless reserved specifications + pay-as-you-go for serverless elastic scaling):
   * 
   * - basic: Serverless Basic Edition
   * - normal: Serverless Standard Edition
   * - professional: Serverless Professional Edition
   * 
   * For more information about the specification types, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @example
   * professional
   */
  specType?: string;
  /**
   * @remarks
   * The tag list.
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


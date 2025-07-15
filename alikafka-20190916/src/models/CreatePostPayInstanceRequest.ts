// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @example
   * 60
   */
  reservedPublishCapacity?: number;
  /**
   * @example
   * 50
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
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @example
   * 1500
   */
  diskSize?: number;
  /**
   * @example
   * 0
   */
  diskType?: string;
  /**
   * @example
   * 3
   */
  eipMax?: number;
  /**
   * @example
   * alikafka.hw.2xlarge
   */
  ioMaxSpec?: string;
  /**
   * @example
   * 0
   */
  paidType?: number;
  /**
   * @example
   * 100
   */
  partitionNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  serverlessConfig?: CreatePostPayInstanceRequestServerlessConfig;
  /**
   * @example
   * professional
   */
  specType?: string;
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


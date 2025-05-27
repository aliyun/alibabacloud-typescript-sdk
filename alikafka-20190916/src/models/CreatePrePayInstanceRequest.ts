// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePrePayInstanceRequestConfluentConfig } from "./CreatePrePayInstanceRequestConfluentConfig";
import { CreatePrePayInstanceRequestTag } from "./CreatePrePayInstanceRequestTag";


export class CreatePrePayInstanceRequest extends $dara.Model {
  confluentConfig?: CreatePrePayInstanceRequestConfluentConfig;
  /**
   * @example
   * 5
   */
  deployType?: number;
  /**
   * @example
   * 500
   */
  diskSize?: number;
  /**
   * @example
   * 1
   */
  diskType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
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
   * 1
   */
  paidType?: number;
  /**
   * @example
   * 1000
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
  /**
   * @example
   * professional
   */
  specType?: string;
  tag?: CreatePrePayInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      confluentConfig: 'ConfluentConfig',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      duration: 'Duration',
      eipMax: 'EipMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specType: 'SpecType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfig: CreatePrePayInstanceRequestConfluentConfig,
      deployType: 'number',
      diskSize: 'number',
      diskType: 'string',
      duration: 'number',
      eipMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specType: 'string',
      tag: { 'type': 'array', 'itemType': CreatePrePayInstanceRequestTag },
    };
  }

  validate() {
    if(this.confluentConfig && typeof (this.confluentConfig as any).validate === 'function') {
      (this.confluentConfig as any).validate();
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


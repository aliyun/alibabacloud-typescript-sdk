// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory size. This value is meaningful for GPU-accelerated cloud desktops. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @example
   * RTX 5880
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The current specification of the instance for specification change.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.32c64g.48g1x
   */
  instanceTypeForModify?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 10240
   */
  memory?: number;
  /**
   * @example
   * demo-model
   */
  modelId?: string;
  /**
   * @remarks
   * The resource specification type to query. If this parameter is not specified, all specification types are returned.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * appstreaming.vgpu
   */
  nodeInstanceTypeFamily?: string;
  /**
   * @remarks
   * CPU/Memory
   * 
   * @example
   * CPU
   */
  orderBy?: string;
  /**
   * @remarks
   * The specification change type.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The supported operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The page number of the query results to display.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * DESC/ASC
   * 
   * @example
   * ASC
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      instanceTypeForModify: 'InstanceTypeForModify',
      language: 'Language',
      memory: 'Memory',
      modelId: 'ModelId',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      bizType: 'number',
      chargeType: 'string',
      cpu: 'number',
      gpu: 'number',
      gpuMemory: 'number',
      gpuSpec: 'string',
      instanceTypeForModify: 'string',
      language: 'string',
      memory: 'number',
      modelId: 'string',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      orderBy: 'string',
      orderType: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      sortType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


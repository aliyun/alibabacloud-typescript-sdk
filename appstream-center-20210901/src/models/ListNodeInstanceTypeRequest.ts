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
   * The GPU memory size. This parameter is meaningful only for GPU-accelerated cloud desktops. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
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
   * @remarks
   * The resource specification type to query. If you leave this parameter empty, all specification types are returned.
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
   * CPU/Memory.
   * 
   * @example
   * CPU
   */
  orderBy?: string;
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
   * DESC/ASC.
   * 
   * @example
   * ASC
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      instanceTypeForModify: 'InstanceTypeForModify',
      language: 'Language',
      memory: 'Memory',
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
      cpu: 'number',
      gpu: 'number',
      gpuMemory: 'number',
      instanceTypeForModify: 'string',
      language: 'string',
      memory: 'number',
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


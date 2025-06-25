// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the resource resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  cpu?: number;
  gpu?: number;
  gpuMemory?: number;
  /**
   * @remarks
   * The language that you want to use.
   * 
   * Valid values:
   * 
   * *   en-US: English (US)
   * *   zh-CN: Simplified Chinese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  memory?: number;
  /**
   * @remarks
   * The resource type that you want to query. If you do not configure this parameter, all resource types are returned.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  nodeInstanceTypeFamily?: string;
  orderBy?: string;
  /**
   * @remarks
   * The operating system that is supported.
   * 
   * Valid value:
   * 
   * *   Windows: the Windows operating system
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
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
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      language: 'Language',
      memory: 'Memory',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      orderBy: 'OrderBy',
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
      language: 'string',
      memory: 'number',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      orderBy: 'string',
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


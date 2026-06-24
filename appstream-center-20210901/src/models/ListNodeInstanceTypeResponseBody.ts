// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 2
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The maximum number of concurrent sessions, which is the number of sessions that can be simultaneously connected to a single resource. If too many sessions are connected simultaneously, the application experience may degrade. The valid values vary depending on the resource specification. The valid values for each resource specification are as follows:
   * 
   * - appstreaming.general.2c4g: 1
   * - appstreaming.general.4c8g: 1 to 2
   * - appstreaming.general.8c16g: 1 to 4
   * - appstreaming.vgpu.8c16g.4g: 1 to 4
   * - appstreaming.vgpu.8c31g.16g: 1 to 4
   * - appstreaming.vgpu.14c93g.12g: 1 to 7
   * - appstreaming.vgpu.4c10g.2gt4: 1 to 2
   * - appstreaming.vgpu.4c16g.2ga10: 1 to 2
   * - appstreaming.vgpu.8c16g.4g: 1 to 4
   * - appstreaming.vgpu.8c31g.16g: 1 to 4
   * - appstreaming.vgpu.8c16g.4gt4: 1 to 4
   * - appstreaming.vgpu.8c32g.4ga10: 1 to 4
   * - appstreaming.vgpu.12c46g.11g28: 1 to 6
   * - appstreaming.vgpu.14c93g.12g: 1 to 7
   * - appstreaming.vgpu.16c32g.8g: 1 to 8
   * - appstreaming.vgpu.16c62g.8ga10: 1 to 8.
   * 
   * @example
   * 4
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the resource specification type.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The resource specification family.
   * 
   * @example
   * appstreaming.vgpu
   */
  nodeInstanceTypeFamily?: string;
  /**
   * @remarks
   * The name of the resource specification.
   * 
   * @example
   * 无影-通用型_4核8G
   */
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      maxCapacity: 'MaxCapacity',
      memory: 'Memory',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
      maxCapacity: 'number',
      memory: 'number',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      nodeTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resource specifications.
   */
  nodeInstanceTypeModels?: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels[];
  /**
   * @remarks
   * The page number of the query results currently displayed.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceTypeModels: 'NodeInstanceTypeModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceTypeModels: { 'type': 'array', 'itemType': ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInstanceTypeModels)) {
      $dara.Model.validateArray(this.nodeInstanceTypeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


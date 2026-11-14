// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The application image ID. The current session specification query does not filter based on this parameter. Omit this parameter. Do not infer image compatibility based on whether this parameter is specified.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The session specification code. Exact match is performed based on the complete code. If this parameter and `AppInstanceTypeList` are specified at the same time, the results are filtered by intersection. You can perform a conditional query without this parameter by using this operation first, and then select the returned codes.
   * 
   * @example
   * appstreaming.vgpu.4c8g
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The specification family code. Exact match is performed based on the complete code. Use the specification family value from the query results. Do not extract it from the specification name.
   * 
   * @example
   * ecs.g6
   */
  appInstanceTypeFamily?: string;
  /**
   * @remarks
   * The list of session specification codes. Up to 100 items are supported. This parameter takes effect by intersection with other filtering conditions. If this parameter and `AppInstanceType` are specified at the same time, the results must also match the single code.
   * 
   * **if can be null:**
   * true
   */
  appInstanceTypeList?: string[];
  /**
   * @remarks
   * The business region ID. If this parameter is omitted, the region of the current request is used. The specifications that can be queried may vary by region and account. You can call [ListRegions](https://api.aliyun.com/document/appstream-center/2021-09-01/ListRegions) to obtain the business region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The specification category filtering condition. If this parameter is omitted, no category filtering condition is added. Valid values:
   * 
   * - `Cpu`: CPU specification.
   * - `Gpu`: GPU specification.
   * 
   * @example
   * Gpu
   */
  category?: string;
  /**
   * @remarks
   * The billing method for filtering available specifications. If this parameter is omitted, no billing method condition is added. Valid values:
   * 
   * - `PrePaid`: Subscription.
   * - `PostPaid`: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of CPU cores for exact filtering. Use a decimal numeric string. Unit: cores. If this parameter is omitted, the number of CPU cores is not limited.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The GPU memory capacity for exact filtering. Unit: MB. If this parameter is omitted, the GPU memory capacity is not limited.
   * 
   * @example
   * 4096
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The language for the specification name.
   * 
   * - `zh-CN`: Use the Chinese name of the specification.
   * - Other values or omitted: Use the specification code as the name.
   * 
   * This parameter only affects the display of `InstanceTypeName` and does not change the specification code.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The memory capacity for exact filtering. Unit: MB. If this parameter is omitted, the memory capacity is not limited.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The operating system type. Use the following value for the Wuying Cloud Application (CloudApp) scenario:
   * 
   * - `Windows`: Windows operating system.
   * 
   * If this parameter is omitted, no operating system filtering condition is added.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The page number. Explicitly specify a page number starting from 1. If this parameter is omitted, the default value 0 is used to query the first batch of results. For subsequent pages, request in the order of 1, 2, and 3.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of specifications returned per page. Unit: entries. Default value: 200. Explicitly set a positive integer that meets your business needs. The default value here does not represent the maximum value allowed by the service.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Set the value to the following fixed value when you call this operation:
   * 
   * - `CloudApp`: Wuying Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * Specifies whether to query the specification inventory at the same time. Default value: `false`.
   * 
   * - `true`: Queries the inventory and returns InventoryInfo when inventory information is available.
   * - `false`: Queries only the specifications and does not query the inventory.
   * 
   * @example
   * false
   */
  queryInventory?: boolean;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceType: 'AppInstanceType',
      appInstanceTypeFamily: 'AppInstanceTypeFamily',
      appInstanceTypeList: 'AppInstanceTypeList',
      bizRegionId: 'BizRegionId',
      category: 'Category',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gpuMemory: 'GpuMemory',
      language: 'Language',
      memory: 'Memory',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      queryInventory: 'QueryInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceType: 'string',
      appInstanceTypeFamily: 'string',
      appInstanceTypeList: { 'type': 'array', 'itemType': 'string' },
      bizRegionId: 'string',
      category: 'string',
      chargeType: 'string',
      cpu: 'string',
      gpuMemory: 'number',
      language: 'string',
      memory: 'number',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      queryInventory: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceTypeList)) {
      $dara.Model.validateArray(this.appInstanceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


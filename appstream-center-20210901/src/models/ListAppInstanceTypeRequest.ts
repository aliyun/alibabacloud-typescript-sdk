// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The application image ID. The current session instance type query does not filter based on this parameter. Omit this parameter. Do not infer image compatibility based on whether this parameter is specified.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The session instance type code. An exact match is performed based on the complete code. If this parameter and AppInstanceTypeList are specified at the same time, the results are filtered by intersection. You can first call this operation without this condition, and then select a returned code.
   * 
   * @example
   * appstreaming.vgpu.4c8g
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The instance type family code. Exact match is performed based on the complete code. Use the instance type family value from the query results. Do not extract it from the instance type name.
   * 
   * @example
   * ecs.g6
   */
  appInstanceTypeFamily?: string;
  /**
   * @remarks
   * The list of session instance type codes. A maximum of 100 items can be specified. This parameter takes effect by intersection with other filtering conditions. If this parameter and AppInstanceType are specified at the same time, the results must also match the single code.
   * 
   * **if can be null:**
   * true
   */
  appInstanceTypeList?: string[];
  /**
   * @remarks
   * The business region ID. If this parameter is omitted, the region of the current request is used. The available instance types may vary by region and account. You can call [ListRegions](https://api.aliyun.com/document/appstream-center/2021-09-01/ListRegions) to obtain the business region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The instance type category filtering condition. If this parameter is omitted, no category filtering condition is added. Valid values:
   * 
   * - Cpu: CPU instance type.
   * - Gpu: GPU instance type.
   * 
   * @example
   * Gpu
   */
  category?: string;
  /**
   * @remarks
   * The billing method for filtering available instance types. If this parameter is omitted, no billing method condition is added. Valid values:
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
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
   * The language of the instance type name.
   * 
   * - zh-CN: The Chinese name of the instance type.
   * - Other values or omitted: The instance type code is used as the name.
   * 
   * This parameter only affects the display of InstanceTypeName and does not change the instance type code.
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
   * The operating system type. For the Wuying Cloud App (CloudApp) scenario, use the following values:
   * 
   * - Windows: Windows operating system.
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
   * The number of instance types to return on each page. Unit: entries. Default value: 200. Explicitly set a positive integer that meets your business requirements. The default value here does not indicate the maximum value allowed by the service.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Set the value to the following fixed value when you call this operation:
   * 
   * - CloudApp: Wuying Cloud App.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * Specifies whether to query the instance type inventory at the same time. Default value: false.
   * 
   * - true: Queries the inventory and returns InventoryInfo if the inventory information is available.
   * - false: Queries only the instance types and does not query the inventory.
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


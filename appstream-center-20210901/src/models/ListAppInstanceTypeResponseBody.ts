// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfoZoneInventoryInfo extends $dara.Model {
  /**
   * @remarks
   * The available quantity in the zone obtained in the current query. Unit: instances. This value is an inventory snapshot and does not indicate that resources have been reserved for the current account.
   * 
   * @example
   * 10
   */
  amount?: string;
  /**
   * @remarks
   * The zone ID. You can call [ListZones](https://api.aliyun.com/document/appstream-center/2021-09-01/ListZones) to query the zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfo extends $dara.Model {
  /**
   * @remarks
   * The business region ID corresponding to the inventory query.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance type inventory status obtained in the current query.
   * 
   * - Available: The total inventory of the queried zones is greater than 0.
   * - SoldOut: The total inventory of the queried zones is not greater than 0.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of inventory information returned by zone.
   */
  zoneInventoryInfo?: ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfoZoneInventoryInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      zoneInventoryInfo: 'ZoneInventoryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      zoneInventoryInfo: { 'type': 'array', 'itemType': ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfoZoneInventoryInfo },
    };
  }

  validate() {
    if(Array.isArray(this.zoneInventoryInfo)) {
      $dara.Model.validateArray(this.zoneInventoryInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceTypeResponseBodyAppInstanceTypeModels extends $dara.Model {
  /**
   * @remarks
   * The session instance type code. This can be used as the session instance type parameter for subsequent operations.
   * 
   * @example
   * appstreaming.vgpu.4c8g
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The instance type family code to which the session instance type belongs.
   * 
   * @example
   * ecs.g6
   */
  appInstanceTypeFamily?: string;
  /**
   * @remarks
   * The number of CPU cores included in the instance type. This is represented by a numeric string. Unit: cores.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The data cloud disk capacity of the instance type. Unit: GB.
   * 
   * @example
   * 100
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * This parameter is not enabled. The example value is only used to demonstrate the format and does not represent the actual number of GPUs returned by this operation.
   * 
   * @example
   * 1
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU memory capacity of the instance type. Unit: MB.
   * 
   * @example
   * 4096
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The display value or display range of the GPU memory. Display it as the returned text. Do not directly use it as a numeric value for capacity conversion.
   * 
   * @example
   * 1~2
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The identifier of the instance type record. When you connect to the price inquiry or creation operation, use AppInstanceType. Do not use this field to replace the instance type code.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The display name of the instance type. The Chinese name is used only when Language is set to zh-CN. Otherwise, the instance type code is used.
   * 
   * @example
   * appstreaming.vgpu.4c8g
   */
  instanceTypeName?: string;
  /**
   * @remarks
   * The inventory information of the instance type. This is returned only when the inventory is queried and the relevant information is obtained. If this field is not returned, it does not mean that the inventory is 0.
   */
  inventoryInfo?: ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfo;
  /**
   * @remarks
   * The memory capacity of the instance type. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The type of the product to which the instance type belongs. The current document displays the following values:
   * 
   * - CloudApp: Wuying Cloud App.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The system cloud disk capacity of the instance type. Unit: GB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceType: 'AppInstanceType',
      appInstanceTypeFamily: 'AppInstanceTypeFamily',
      cpu: 'Cpu',
      dataDiskSize: 'DataDiskSize',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      id: 'Id',
      instanceTypeName: 'InstanceTypeName',
      inventoryInfo: 'InventoryInfo',
      memory: 'Memory',
      productType: 'ProductType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceType: 'string',
      appInstanceTypeFamily: 'string',
      cpu: 'string',
      dataDiskSize: 'number',
      gpu: 'string',
      gpuMemory: 'number',
      gpuSpec: 'string',
      id: 'number',
      instanceTypeName: 'string',
      inventoryInfo: ListAppInstanceTypeResponseBodyAppInstanceTypeModelsInventoryInfo,
      memory: 'number',
      productType: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(this.inventoryInfo && typeof (this.inventoryInfo as any).validate === 'function') {
      (this.inventoryInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of session instance types on the current page.
   */
  appInstanceTypeModels?: ListAppInstanceTypeResponseBodyAppInstanceTypeModels[];
  /**
   * @remarks
   * The page number used in the current query. This corresponds to the request parameter and the total number of entries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page used in the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance types that meet all filtering conditions. This is not the number of entries on the current page.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceTypeModels: 'AppInstanceTypeModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceTypeModels: { 'type': 'array', 'itemType': ListAppInstanceTypeResponseBodyAppInstanceTypeModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceTypeModels)) {
      $dara.Model.validateArray(this.appInstanceTypeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


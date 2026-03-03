// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList extends $dara.Model {
  /**
   * @example
   * Standard
   */
  autoScaleType?: string;
  /**
   * @example
   * 2
   */
  clusterCount?: string;
  /**
   * @example
   * 32
   */
  clusterCpu?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  defaultWarehouse?: boolean;
  elasticCpu?: number;
  /**
   * @example
   * auto
   */
  elasticType?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 2
   */
  initClusterCount?: string;
  /**
   * @example
   * 4
   */
  maxClusterCount?: string;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the virtual warehouse instance.
   * 
   * @example
   * MyWarehouse
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  rebalanceStatus?: string;
  /**
   * @remarks
   * The status.
   * 
   * Valid values:
   * 
   * *   kRunning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kSuspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kInit
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kAllocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * kRunning
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoScaleType: 'AutoScaleType',
      clusterCount: 'ClusterCount',
      clusterCpu: 'ClusterCpu',
      cpu: 'Cpu',
      defaultWarehouse: 'DefaultWarehouse',
      elasticCpu: 'ElasticCpu',
      elasticType: 'ElasticType',
      id: 'Id',
      initClusterCount: 'InitClusterCount',
      maxClusterCount: 'MaxClusterCount',
      mem: 'Mem',
      name: 'Name',
      nodeCount: 'NodeCount',
      rebalanceStatus: 'RebalanceStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaleType: 'string',
      clusterCount: 'string',
      clusterCpu: 'string',
      cpu: 'number',
      defaultWarehouse: 'boolean',
      elasticCpu: 'number',
      elasticType: 'string',
      id: 'number',
      initClusterCount: 'string',
      maxClusterCount: 'string',
      mem: 'number',
      name: 'string',
      nodeCount: 'number',
      rebalanceStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarehouseDetailResponseBodyWarehouseDetail extends $dara.Model {
  autoElasticCpu?: string;
  /**
   * @remarks
   * The remaining unallocated computing resources of the virtual warehouse instance.
   * 
   * @example
   * 32
   */
  remainingCpu?: string;
  /**
   * @remarks
   * The reserved computing resources. The amount of computing resources in all running virtual warehouses in an instance cannot exceed the amount of reserved computing resources in the virtual warehouses.
   * 
   * @example
   * 64
   */
  reservedCpu?: string;
  timedElasticCpu?: string;
  /**
   * @remarks
   * The list of virtual warehouses.
   */
  warehouseList?: GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList[];
  static names(): { [key: string]: string } {
    return {
      autoElasticCpu: 'AutoElasticCpu',
      remainingCpu: 'RemainingCpu',
      reservedCpu: 'ReservedCpu',
      timedElasticCpu: 'TimedElasticCpu',
      warehouseList: 'WarehouseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoElasticCpu: 'string',
      remainingCpu: 'string',
      reservedCpu: 'string',
      timedElasticCpu: 'string',
      warehouseList: { 'type': 'array', 'itemType': GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList },
    };
  }

  validate() {
    if(Array.isArray(this.warehouseList)) {
      $dara.Model.validateArray(this.warehouseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarehouseDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The returned values.
   */
  warehouseDetail?: GetWarehouseDetailResponseBodyWarehouseDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warehouseDetail: 'WarehouseDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warehouseDetail: GetWarehouseDetailResponseBodyWarehouseDetail,
    };
  }

  validate() {
    if(this.warehouseDetail && typeof (this.warehouseDetail as any).validate === 'function') {
      (this.warehouseDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


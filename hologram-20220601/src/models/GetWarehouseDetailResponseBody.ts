// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList extends $dara.Model {
  /**
   * @remarks
   * The auto-scaling type.
   * 
   * @example
   * Standard
   */
  autoScaleType?: string;
  /**
   * @remarks
   * The number of clusters.
   * 
   * @example
   * 2
   */
  clusterCount?: string;
  /**
   * @remarks
   * The cluster specifications.
   * 
   * @example
   * 32
   */
  clusterCpu?: string;
  /**
   * @remarks
   * cpu
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the compute group is the default compute group.
   * 
   * @example
   * true
   */
  defaultWarehouse?: boolean;
  /**
   * @remarks
   * The elastic compute resources.
   * 
   * @example
   * 32
   */
  elasticCpu?: number;
  /**
   * @remarks
   * The elastic type.
   * 
   * @example
   * auto
   */
  elasticType?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The number of reserved clusters.
   * 
   * @example
   * 2
   */
  initClusterCount?: string;
  /**
   * @remarks
   * The maximum number of clusters.
   * 
   * @example
   * 4
   */
  maxClusterCount?: string;
  /**
   * @remarks
   * The memory.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the compute group.
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
  /**
   * @remarks
   * The rebalance status of the compute group.
   * 
   * @example
   * DONE
   */
  rebalanceStatus?: string;
  /**
   * @remarks
   * The status.
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
  /**
   * @remarks
   * The total auto-scaling elastic compute resources of the compute group.
   * 
   * @example
   * 32
   */
  autoElasticCpu?: string;
  /**
   * @remarks
   * The unallocated compute resources. The remaining unallocated compute resources for compute groups in the instance.
   * 
   * @example
   * 32
   */
  remainingCpu?: string;
  /**
   * @remarks
   * The reserved compute resources. The total compute resources of all running compute groups in the instance cannot exceed the reserved compute resources of the compute group.
   * 
   * @example
   * 64
   */
  reservedCpu?: string;
  /**
   * @remarks
   * The total time-based elastic compute resources of the compute group.
   * 
   * @example
   * 64
   */
  timedElasticCpu?: string;
  /**
   * @remarks
   * The warehouse list.
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
   * Id of the request
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The return value.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The cluster specifications.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  classCode?: string;
  /**
   * @remarks
   * The family of the cluster specifications. Valid values:
   * 
   * - Exclusive package
   * 
   * - Exclusive physical machine
   * 
   * - Beginner
   * 
   * - Historical specifications
   * 
   * @example
   * Exclusive package
   */
  classGroup?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * @example
   * enterprise
   */
  classTypeLevel?: string;
  /**
   * @remarks
   * The number of CPU cores. Unit: cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The maximum storage capacity of an ESSD. Unit: TB.
   * 
   * @example
   * 64
   */
  essdMaxStorageCapacity?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections to the cluster.
   * 
   * @example
   * 8000
   */
  maxConnections?: string;
  /**
   * @remarks
   * The maximum IOPS. Unit: IOPS.
   * 
   * @example
   * 32000
   */
  maxIOPS?: string;
  /**
   * @remarks
   * The maximum storage capacity. Unit: TB.
   * 
   * @example
   * 20
   */
  maxStorageCapacity?: string;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 32
   */
  memoryClass?: string;
  /**
   * @remarks
   * The maximum IOPS of an Enhanced SSD (ESSD) at performance level 1 (PL1). Unit: IOPS.
   * 
   * @example
   * 50000
   */
  pl1MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS of an ESSD at PL2. Unit: IOPS.
   * 
   * @example
   * 100000
   */
  pl2MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS of an ESSD at PL3. Unit: IOPS.
   * 
   * @example
   * 1000000
   */
  pl3MaxIOPS?: string;
  /**
   * @remarks
   * The maximum storage capacity of PSL4/PSL5. Unit: TB.
   * 
   * @example
   * 500
   */
  polarStoreMaxStorageCapacity?: string;
  /**
   * @remarks
   * The maximum input/output operations per second (IOPS) of PSL4. Unit: IOPS.
   * 
   * @example
   * 48000
   */
  psl4MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS of PSL5. Unit: IOPS.
   * 
   * @example
   * 96000
   */
  psl5MaxIOPS?: string;
  /**
   * @remarks
   * The additional price.
   * 
   * <props="china">Unit: cents (CNY).
   * <props="intl">Unit: cents (USD).
   * 
   * > - If you set the MasterHa parameter to cluster or single, the value of this parameter is the same as the value of the ReferencePrice parameter.
   * >
   * > - If you set the MasterHa parameter to cluster or single, the price for a single-node commodity is returned.
   * 
   * @example
   * 200000
   */
  referenceExtPrice?: string;
  /**
   * @remarks
   * The price.
   * 
   * <props="china">Unit: cents (CNY).
   * <props="intl">Unit: cents (USD).
   * 
   * > - If you set the CommodityCode parameter to a pay-as-you-go commodity code, the hourly price is returned.
   * >
   * > - If you set the CommodityCode parameter to a subscription commodity code, the monthly price is returned.
   * 
   * @example
   * 200000
   */
  referencePrice?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      classTypeLevel: 'ClassTypeLevel',
      cpu: 'Cpu',
      essdMaxStorageCapacity: 'EssdMaxStorageCapacity',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      maxStorageCapacity: 'MaxStorageCapacity',
      memoryClass: 'MemoryClass',
      pl1MaxIOPS: 'Pl1MaxIOPS',
      pl2MaxIOPS: 'Pl2MaxIOPS',
      pl3MaxIOPS: 'Pl3MaxIOPS',
      polarStoreMaxStorageCapacity: 'PolarStoreMaxStorageCapacity',
      psl4MaxIOPS: 'Psl4MaxIOPS',
      psl5MaxIOPS: 'Psl5MaxIOPS',
      referenceExtPrice: 'ReferenceExtPrice',
      referencePrice: 'ReferencePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      classGroup: 'string',
      classTypeLevel: 'string',
      cpu: 'string',
      essdMaxStorageCapacity: 'string',
      maxConnections: 'string',
      maxIOPS: 'string',
      maxStorageCapacity: 'string',
      memoryClass: 'string',
      pl1MaxIOPS: 'string',
      pl2MaxIOPS: 'string',
      pl3MaxIOPS: 'string',
      polarStoreMaxStorageCapacity: 'string',
      psl4MaxIOPS: 'string',
      psl5MaxIOPS: 'string',
      referenceExtPrice: 'string',
      referencePrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cluster specifications.
   */
  items?: DescribeClassListResponseBodyItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeClassListResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


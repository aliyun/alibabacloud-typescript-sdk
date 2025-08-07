// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family of the cluster. Valid values:
   * 
   * *   Exclusive package: dedicated
   * *   Exclusive physical machine: dedicated host
   * *   Beginner: starter
   * *   Historical specifications: historical
   * 
   * @example
   * Exclusive package
   */
  classGroup?: string;
  /**
   * @remarks
   * The specification type of the cluster.
   * 
   * @example
   * enterprise
   */
  classTypeLevel?: string;
  /**
   * @remarks
   * The number of vCPU cores. Unit: cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The maximum ESSD storage capacity. Unit: TB.
   * 
   * @example
   * 64
   */
  essdMaxStorageCapacity?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections in the cluster.
   * 
   * @example
   * 8000
   */
  maxConnections?: string;
  /**
   * @remarks
   * The maximum IOPS. Unit: operations per second.
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
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memoryClass?: string;
  /**
   * @remarks
   * The maximum IOPS of an enhanced SSD (ESSD) of performance level 1 (PL1). Unit: operations per second.
   * 
   * @example
   * 50000
   */
  pl1MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS of an ESSD of performance level 2 (PL2). Unit: operations per second.
   * 
   * @example
   * 100000
   */
  pl2MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS of an ESSD of performance level 3 (PL3). Unit: operations per second.
   * 
   * @example
   * 1000000
   */
  pl3MaxIOPS?: string;
  /**
   * @remarks
   * The maximum PSL4/PSL5 storage capacity. Unit: TB.
   * 
   * @example
   * 500
   */
  polarStoreMaxStorageCapacity?: string;
  /**
   * @remarks
   * The maximum Input/output operations per second (IOPS) for PolarStore Level 4 (PSL4). Unit: operations per second.
   * 
   * @example
   * 48000
   */
  psl4MaxIOPS?: string;
  /**
   * @remarks
   * The maximum IOPS for PolarStore Level 5 (PSL5). Unit: operations per second.
   * 
   * @example
   * 96000
   */
  psl5MaxIOPS?: string;
  /**
   * @remarks
   * The additional price.
   * 
   * Unit: cents (USD).
   * 
   * >- If you set MasterHa to cluster or single, the value of ReferenceExtPrice is the same as the value of ReferencePrice.
   * >- If you set MasterHa to cluster or single, the value of ReferenceExtPrice is the price of the single-node cluster.
   * 
   * @example
   * 200000
   */
  referenceExtPrice?: string;
  /**
   * @remarks
   * The price.
   * 
   * Unit: cents (USD).
   * 
   * >- If you set CommodityCode to a commodity that uses the pay-as-you-go billing method, ReferencePrice indicates the hourly fee that you need to pay.
   * >- If you set CommodityCode to a commodity that uses the subscription billing method, ReferencePrice indicates the monthly fee that you need to pay.
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
   * The cluster specifications.
   */
  items?: DescribeClassListResponseBodyItems[];
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
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


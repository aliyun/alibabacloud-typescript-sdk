// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems extends $dara.Model {
  /**
   * @remarks
   * Available capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61360
   */
  availableSize?: number;
  /**
   * @remarks
   * Total capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61440
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      availableSize: 'AvailableSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned metrics.
   */
  monitorItems?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems;
  /**
   * @remarks
   * The ID list of the resource.
   * 
   * @example
   * dbsc-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The timestamp when the data is collected.
   * 
   * @example
   * 1606403800
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItems: 'MonitorItems',
      resourceId: 'ResourceId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItems: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems,
      resourceId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.monitorItems && typeof (this.monitorItems as any).validate === 'function') {
      (this.monitorItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData[];
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1A4258A-0C8C-5329-B495-BC5AD7AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      diskCategory: 'DiskCategory',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData },
      dbscId: 'string',
      dbscName: 'string',
      diskCategory: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


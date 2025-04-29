// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems } from "./QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems";


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


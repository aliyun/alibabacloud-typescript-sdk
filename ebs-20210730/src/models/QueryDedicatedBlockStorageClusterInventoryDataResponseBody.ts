// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData } from "./QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData";


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


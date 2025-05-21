// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters } from "./DescribeSyncAvailableDbclusterListResponseBodySyncAvailableDbclusters";


export class DescribeSyncAvailableDBClusterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBD1DD96-AD1D-516C-9D9A-60BA081F66EE
   */
  requestId?: string;
  /**
   * @remarks
   * The queried instances or clusters.
   */
  syncAvailableDBClusters?: DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      syncAvailableDBClusters: 'SyncAvailableDBClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      syncAvailableDBClusters: { 'type': 'array', 'itemType': DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters },
    };
  }

  validate() {
    if(Array.isArray(this.syncAvailableDBClusters)) {
      $dara.Model.validateArray(this.syncAvailableDBClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


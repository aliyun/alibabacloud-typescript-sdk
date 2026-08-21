// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Filters by cluster ID.
   * 
   * > This cluster ID is not the ACK cluster ID. It is the `id` field returned by this operation.
   * 
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  clusterId?: string;
  /**
   * @remarks
   * - `Running`: The cluster is managed normally.
   * - `Installing`: An installation task is in progress for the cluster.
   * - `Uninstalling`: An uninstallation task is in progress for the cluster.
   * - `Upgrading`: An update task is in progress for the cluster.
   * - `Offline`: The cluster is offline and management is abnormal.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * - `ACK`: ACK cluster.
   * - `CUSTOM`: Custom cluster (default clusters belong to custom clusters).
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The current page number (starting from page 1).
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * **[Deprecated]** Use the cluster_id parameter to filter instead.
   * 
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  id?: string;
  /**
   * @remarks
   * Filters plugins by plugin name.
   * 
   * @example
   * proxy-next-upstream
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      current: 'current',
      id: 'id',
      name: 'name',
      pageSize: 'pageSize',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      current: 'number',
      id: 'string',
      name: 'string',
      pageSize: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


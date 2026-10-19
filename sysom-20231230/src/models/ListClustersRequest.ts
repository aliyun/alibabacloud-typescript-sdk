// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID used to filter clusters.
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
   * - `CUSTOM`: Custom cluster. The default cluster belongs to the custom cluster type.
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
   * **[Deprecated]** Use the cluster_id parameter to filter clusters.
   * 
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  id?: string;
  /**
   * @remarks
   * The name of the plug-in used to filter plug-ins.
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      current: 'current',
      id: 'id',
      name: 'name',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      current: 'number',
      id: 'string',
      name: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


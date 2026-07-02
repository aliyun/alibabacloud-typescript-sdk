// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by cluster ID.
   * 
   * > This cluster ID is not the ACK cluster ID, but the `id` field in the data returned by this API.
   * 
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  clusterId?: string;
  /**
   * @remarks
   * - `Running`: The cluster is managed normally.
   * - `Installing`: The cluster has an installation task in progress.
   * - `Uninstalling`: The cluster has an uninstallation task in progress.
   * - `Upgrading`: The cluster has an upgrade task in progress.
   * - `Offline`: The cluster is offline and management is abnormal.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * - `ACK`: ACK cluster.
   * - `CUSTOM`: Custom cluster (the default cluster belongs to custom clusters).
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * Current page number (starting from page 1)
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * This field is deprecated. Use the cluster_id field to filter instead.
   * 
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  id?: string;
  /**
   * @remarks
   * Filter by plugin name
   * 
   * @example
   * proxy-next-upstream
   */
  name?: string;
  /**
   * @remarks
   * Page size
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


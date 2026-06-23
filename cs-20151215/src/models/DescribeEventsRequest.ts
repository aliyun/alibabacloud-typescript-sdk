// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cf62854ac2130470897be7a27ed1f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of results returned per request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * Valid values: [1,100].
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The event type. If you do not set this parameter, all types of events are queried. Valid values:
   * - `cluster_create`: creates a cluster.
   * - `cluster_scaleout`: scales out a cluster.
   * - `cluster_attach`: adds existing nodes.
   * - `cluster_delete`: deletes a cluster.
   * - `cluster_upgrade`: upgrades a cluster.
   * - `cluster_migrate`: migrates a cluster.
   * - `cluster_node_delete`: removes nodes.
   * - `cluster_node_drain`: drains nodes.
   * - `cluster_modify`: modifies a cluster.
   * - `cluster_configuration_modify`: modifies cluster management configurations.
   * - `cluster_addon_install`: installs a component.
   * - `cluster_addon_upgrade`: upgrades a component.
   * - `cluster_addon_uninstall`: uninstalls a component.
   * - `runtime_upgrade`: upgrades the runtime.
   * - `nodepool_upgrade`: upgrades a node pool.
   * - `nodepool_update`: updates a node pool.
   * 
   * @example
   * nodepool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      maxResults: 'max_results',
      nextToken: 'next_token',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


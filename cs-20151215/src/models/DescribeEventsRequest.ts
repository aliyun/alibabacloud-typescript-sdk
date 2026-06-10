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
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of `NextToken` returned by the previous API call.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * Valid values: [1,100].
   * 
   * Default: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The event type. If you do not specify this parameter, events of all types are returned. Valid values:
   * 
   * - `cluster_create`: Create a cluster.
   * 
   * - `cluster_scaleout`: Scale out a cluster.
   * 
   * - `cluster_attach`: Attach an existing node.
   * 
   * - `cluster_delete`: Delete a cluster.
   * 
   * - `cluster_upgrade`: Upgrade a cluster.
   * 
   * - `cluster_migrate`: Migrate a cluster.
   * 
   * - `cluster_node_delete`: Remove a node.
   * 
   * - `cluster_node_drain`: Drain a node.
   * 
   * - `cluster_modify`: Modify a cluster.
   * 
   * - `cluster_configuration_modify`: Modify the control plane configuration of a cluster.
   * 
   * - `cluster_addon_install`: Install an add-on.
   * 
   * - `cluster_addon_upgrade`: Upgrade an add-on.
   * 
   * - `cluster_addon_uninstall`: Uninstall an add-on.
   * 
   * - `runtime_upgrade`: Upgrade the runtime.
   * 
   * - `nodepool_upgrade`: Upgrade a node pool.
   * 
   * - `nodepool_update`: Update a node pool.
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


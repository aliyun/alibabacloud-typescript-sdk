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
   * The maximum number of results to return for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned from the previous API call.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for paging in the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The event type. If you do not specify this parameter, events of all types are queried. Valid values:
   * - `cluster_create`: Cluster creation.
   * - `cluster_scaleout`: Cluster scale-out.
   * - `cluster_attach`: Addition of existing nodes.
   * - `cluster_delete`: Cluster deletion.
   * - `cluster_upgrade`: Cluster upgrade.
   * - `cluster_migrate`: Cluster migration.
   * - `cluster_node_delete`: Node removal.
   * - `cluster_node_drain`: Node draining.
   * - `cluster_modify`: Cluster modification.
   * - `cluster_configuration_modify`: Cluster control configuration modification.
   * - `cluster_addon_install`: Add-on installation.
   * - `cluster_addon_upgrade`: Add-on upgrade.
   * - `cluster_addon_uninstall`: Add-on uninstallation.
   * - `runtime_upgrade`: Runtime upgrade.
   * - `nodepool_upgrade`: Node pool upgrade.
   * - `nodepool_update`: Node pool update.
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


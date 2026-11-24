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
   * The query token, which is the value of the NextToken parameter returned by the previous API call.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for paging.
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
   * - `cluster_create`: cluster creation
   * - `cluster_scaleout`: cluster scale-out
   * - `cluster_attach`: adding existing nodes
   * - `cluster_delete`: cluster deletion
   * - `cluster_upgrade`: cluster upgrade
   * - `cluster_migrate`: cluster migration
   * - `cluster_node_delete`: node removal
   * - `cluster_node_drain`: node draining
   * - `cluster_modify`: cluster modification
   * - `cluster_configuration_modify`: cluster management configuration modification
   * - `cluster_addon_install`: add-on installation
   * - `cluster_addon_upgrade`: add-on upgrade
   * - `cluster_addon_uninstall`: add-on uninstallation
   * - `runtime_upgrade`: runtime upgrade
   * - `nodepool_upgrade`: node pool upgrade
   * - `nodepool_update`: node pool update
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


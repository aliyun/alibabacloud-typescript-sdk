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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   `cluster_create`: cluster creation.
   * *   `cluster_scaleout`: cluster scale-out.
   * *   `cluster_attach`: node addition.
   * *   `cluster_delete`: cluster deletion.
   * *   `cluster_upgrade`: cluster upgrades.
   * *   `cluster_migrate`: cluster migration.
   * *   `cluster_node_delete`: node removal.
   * *   `cluster_node_drain`: node draining.
   * *   `cluster_modify`: cluster modifications.
   * *   `cluster_configuration_modify`: modifications of control plane configurations.
   * *   `cluster_addon_install`: component installation.
   * *   `cluster_addon_upgrade`: component updates.
   * *   `cluster_addon_uninstall`: component uninstallation.
   * *   `runtime_upgrade`: runtime updates.
   * *   `nodepool_upgrade`: node pool upgrades.
   * *   `nodepool_update`: node pool updates.
   * 
   * @example
   * nodepool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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


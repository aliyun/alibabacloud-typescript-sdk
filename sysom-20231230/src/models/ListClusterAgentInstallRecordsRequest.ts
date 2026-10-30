// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The component configuration ID.
   * 
   * @example
   * f0078fbb-4213-11f0-a19b-00163e4ae208
   */
  agentConfigId?: string;
  /**
   * @remarks
   * Filters by cluster ID.
   * 
   * > This cluster ID is not the ACK cluster ID. It is the `cluster_id` field in the data returned by this operation, or the `id` field in the data returned by the ListCluster operation.
   * 
   * @example
   * cbd80af02b9d6454ebdc579c5e022d0c8
   */
  clusterId?: string;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the installation list by the specified agent. You can use this parameter together with the plugin_version parameter.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * This parameter cannot be used alone and must be used together with the plugin_id parameter to filter the installation list by the specified agent and version.
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfigId: 'agent_config_id',
      clusterId: 'cluster_id',
      current: 'current',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfigId: 'string',
      clusterId: 'string',
      current: 'number',
      pageSize: 'number',
      pluginId: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


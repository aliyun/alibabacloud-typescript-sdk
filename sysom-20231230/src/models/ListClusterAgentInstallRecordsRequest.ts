// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsRequest extends $dara.Model {
  agentConfigId?: string;
  /**
   * @remarks
   * Filter by cluster ID.  
   * 
   * > This cluster ID is not the ACK cluster ID. Instead, it refers to the `cluster_id` field in the data returned by this API or the `id` field in the data returned by the ListCluster API.
   * 
   * @example
   * cbd80af02b9d6454ebdc579c5e022d0c8
   */
  clusterId?: string;
  /**
   * @remarks
   * Current page number (starting from 1)
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * If this parameter is specified, the response filters the installation list for the specified agent. It can be used together with the plugin_version parameter.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * This parameter cannot be used alone. It must be used together with plugin_id to filter the installation list for a specific agent version.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsRequest extends $dara.Model {
  /**
   * @example
   * cbd80af02b9d6454ebdc579c5e022d0c8
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


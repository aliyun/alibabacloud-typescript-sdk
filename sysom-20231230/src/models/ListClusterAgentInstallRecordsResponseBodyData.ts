// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  grayscaleConfig?: string;
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
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      createdAt: 'created_at',
      grayscaleConfig: 'grayscale_config',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createdAt: 'string',
      grayscaleConfig: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


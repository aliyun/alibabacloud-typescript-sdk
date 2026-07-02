// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstallRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The ID of the instance. If you specify this parameter, only the Agent installation records for the specified instance are returned.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Agent. If you specify this parameter, only the installation records for the specified Agent are returned. You can use this parameter together with the plugin_version parameter.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * The version of the Agent. This parameter cannot be used alone. Use this parameter together with the plugin_id parameter to filter installation records for a specific version of the specified Agent.
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Filters component installation records by status.
   * 
   * @example
   * Installed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instanceId: 'instance_id',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instanceId: 'string',
      pageSize: 'number',
      pluginId: 'string',
      pluginVersion: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


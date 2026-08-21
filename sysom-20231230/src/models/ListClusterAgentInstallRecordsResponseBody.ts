// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsResponseBodyData extends $dara.Model {
  agentConfigId?: string;
  agentConfigName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > This cluster ID is not the ACK cluster ID.
   * 
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  /**
   * @remarks
   * The canary release environment.
   * 
   * @example
   * {}
   */
  grayscaleConfig?: string;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfigId: 'agent_config_id',
      agentConfigName: 'agent_config_name',
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
      agentConfigId: 'string',
      agentConfigName: 'string',
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

export class ListClusterAgentInstallRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListClusterAgentInstallRecordsResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListClusterAgentInstallRecordsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


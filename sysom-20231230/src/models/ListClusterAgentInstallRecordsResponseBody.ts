// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAgentInstallRecordsResponseBodyData extends $dara.Model {
  agentConfigId?: string;
  agentConfigName?: string;
  /**
   * @remarks
   * Cluster ID.  
   * 
   * > This cluster ID is not the ACK cluster ID
   * 
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  /**
   * @remarks
   * Canary release environment
   * 
   * @example
   * {}
   */
  grayscaleConfig?: string;
  /**
   * @remarks
   * Widget ID
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * Plugin version
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * Updated At
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
   * Request ID, which can be used for end-to-end diagnosis
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates authorization succeeded;  
   * - Other status codes indicate authorization failed. When authorization fails, view the `message` field to obtain detailed error message;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: ListClusterAgentInstallRecordsResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Total number of query results.
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


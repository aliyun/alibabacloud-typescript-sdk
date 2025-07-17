// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterFromGrafanaResponseBodyPromClusterList extends $dara.Model {
  /**
   * @remarks
   * The status of the Prometheus agent on the cluster. Valid values:
   * 
   * *   INSTALL_FAILED: The Prometheus agent failed to be installed.
   * *   INSTALL_SUCCEED: The Prometheus agent was installed.
   * *   NOT_REGISTER: You have not registered an Alibaba Cloud account.
   * 
   * @example
   * INSTALL_FAILED
   */
  agentStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c0df7ad9db0ed43128925ca04774c469e
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ay-ads-hangzhou
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster.
   * 
   * @example
   * cloud-product-prometheus
   */
  clusterType?: string;
  /**
   * @remarks
   * The controller ID.
   * 
   * @example
   * 1092
   */
  controllerId?: string;
  /**
   * @remarks
   * The time when the dashboard was created.
   * 
   * @example
   * 2021-12-09T02:05:04Z
   */
  createTime?: number;
  /**
   * @remarks
   * The extended fields. This parameter is a JSON string.
   * 
   * @example
   * {\\"app_id\\":\\"bbd\\",\\"task_id\\":\\"4305ba5bf14942daa6e553ed91f46988\\"}
   */
  extra?: string;
  /**
   * @remarks
   * The ID of a database in the cluster.
   * 
   * @example
   * 16136
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the Prometheus agent was installed.
   * 
   * @example
   * 1653532518000
   */
  installTime?: number;
  /**
   * @remarks
   * Indicates whether the Prometheus agent was installed. Valid values:
   * 
   * *   true: The Prometheus agent was installed.
   * *   false: The Prometheus agent was not installed.
   * 
   * @example
   * true
   */
  isControllerInstalled?: boolean;
  /**
   * @remarks
   * The time when the last heartbeat was reported.
   * 
   * @example
   * 1653532518000
   */
  lastHeartBeatTime?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeNum?: number;
  /**
   * @remarks
   * The custom parameter.
   * 
   * @example
   * {\\"Option\\": [\\"betaTestApproved\\"]}
   */
  options?: string;
  /**
   * @remarks
   * The list of nodejsonar logs.
   * 
   * @example
   * {}
   */
  pluginsJsonArray?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information about applications deployed in the cluster.
   * 
   * @example
   * {}
   */
  stateJson?: string;
  /**
   * @remarks
   * The time when the dashboard was updated.
   * 
   * @example
   * 2021-11-16T08:49:34Z
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the cluster belongs.
   * 
   * @example
   * 1247285**
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      controllerId: 'ControllerId',
      createTime: 'CreateTime',
      extra: 'Extra',
      id: 'Id',
      installTime: 'InstallTime',
      isControllerInstalled: 'IsControllerInstalled',
      lastHeartBeatTime: 'LastHeartBeatTime',
      nodeNum: 'NodeNum',
      options: 'Options',
      pluginsJsonArray: 'PluginsJsonArray',
      regionId: 'RegionId',
      stateJson: 'StateJson',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      controllerId: 'string',
      createTime: 'number',
      extra: 'string',
      id: 'number',
      installTime: 'number',
      isControllerInstalled: 'boolean',
      lastHeartBeatTime: 'number',
      nodeNum: 'number',
      options: 'string',
      pluginsJsonArray: 'string',
      regionId: 'string',
      stateJson: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster information.
   */
  promClusterList?: ListClusterFromGrafanaResponseBodyPromClusterList[];
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 6849D41E-EED4-5C00-89F9-6047BBD9DCB4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promClusterList: 'PromClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promClusterList: { 'type': 'array', 'itemType': ListClusterFromGrafanaResponseBodyPromClusterList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.promClusterList)) {
      $dara.Model.validateArray(this.promClusterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


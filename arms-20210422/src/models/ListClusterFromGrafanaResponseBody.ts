// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterFromGrafanaResponseBodyPromClusterList extends $dara.Model {
  agentStatus?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  controllerId?: string;
  createTime?: number;
  extra?: string;
  id?: number;
  installTime?: number;
  isControllerInstalled?: boolean;
  lastHeartBeatTime?: number;
  nodeNum?: number;
  options?: string;
  pluginsJsonArray?: string;
  regionId?: string;
  stateJson?: string;
  updateTime?: number;
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
  promClusterList?: ListClusterFromGrafanaResponseBodyPromClusterList[];
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


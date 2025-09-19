// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterPluginInfoResponseBodyDataNodePluginInfoList extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * kenerl not support
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * kenerl not support
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the plug-in is installed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  installed?: boolean;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 100.100.XXX.XX
   */
  machineInternetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 10.XXX.XXX.XX
   */
  machineIntranetIp?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * npznas05
   */
  machineName?: string;
  /**
   * @remarks
   * The type of the instance. Valid values include:
   * 
   * *   **ecs**: Elastic Compute Service (ECS) instance
   * *   **slb**: Server Load Balancer (SLB) instance
   * 
   * @example
   * ECS
   */
  machineType?: number;
  /**
   * @remarks
   * Indicates whether the Security Center agent is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If the Security Center agent of the server is offline, Security Center does not protect the server.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * alihips
   */
  pluginName?: string;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * 1.3.1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * bc563d2b-2a3d-411b-8bbe-d75b8d3c****
   */
  uuid?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * tpp-cn-2r42njq4y001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      installed: 'Installed',
      machineInternetIp: 'MachineInternetIp',
      machineIntranetIp: 'MachineIntranetIp',
      machineName: 'MachineName',
      machineType: 'MachineType',
      online: 'Online',
      pluginName: 'PluginName',
      pluginVersion: 'PluginVersion',
      uuid: 'Uuid',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      installed: 'boolean',
      machineInternetIp: 'string',
      machineIntranetIp: 'string',
      machineName: 'string',
      machineType: 'number',
      online: 'boolean',
      pluginName: 'string',
      pluginVersion: 'string',
      uuid: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterPluginInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c8ca91e0907d94efaba7fb0827eb9****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * lmftest
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   1: normal
   * *   2: abnormal
   * *   3: offline
   * 
   * @example
   * ABNORMAL
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The plug-ins.
   */
  nodePluginInfoList?: ListClusterPluginInfoResponseBodyDataNodePluginInfoList[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      nodePluginInfoList: 'NodePluginInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      nodePluginInfoList: { 'type': 'array', 'itemType': ListClusterPluginInfoResponseBodyDataNodePluginInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.nodePluginInfoList)) {
      $dara.Model.validateArray(this.nodePluginInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterPluginInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the plug-in.
   */
  data?: ListClusterPluginInfoResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClusterPluginInfoResponseBodyData },
      requestId: 'string',
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


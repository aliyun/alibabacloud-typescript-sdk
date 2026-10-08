// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterResponseBodyClusterListCluster extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  clusterType?: number;
  cpu?: number;
  cpuUsed?: number;
  createTime?: number;
  csClusterId?: string;
  description?: string;
  iaasProvider?: string;
  mem?: number;
  memUsed?: number;
  networkMode?: number;
  nodeNum?: number;
  oversoldFactor?: number;
  regionId?: string;
  resourceGroupId?: string;
  updateTime?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      description: 'Description',
      iaasProvider: 'IaasProvider',
      mem: 'Mem',
      memUsed: 'MemUsed',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      cpu: 'number',
      cpuUsed: 'number',
      createTime: 'number',
      csClusterId: 'string',
      description: 'string',
      iaasProvider: 'string',
      mem: 'number',
      memUsed: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyClusterList extends $dara.Model {
  cluster?: ListClusterResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': ListClusterResponseBodyClusterListCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBody extends $dara.Model {
  clusterList?: ListClusterResponseBodyClusterList;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1053-08e4-47a5-b2ab-5c0323de****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: ListClusterResponseBodyClusterList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterList && typeof (this.clusterList as any).validate === 'function') {
      (this.clusterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupedFieldDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 1
   */
  alarmCount?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * node-local-dns
   */
  appName?: string;
  /**
   * @remarks
   * The version of the current online server in the cluster.
   * 
   * @example
   * 1.14.8-aliyun.1
   */
  clusterCurrentVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8ca91e0907d94efaba7fb0827eb9****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * zhhtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - STARTING: Starting.
   * - START_FAILED: Failed to start.
   * - BOOTSTRAPPING: Initializing bootstrap actions.
   * - RUNNING: Running.
   * - TERMINATING: Terminating.
   * - TERMINATED: Terminated.
   * - TERMINATED_WITH_ERRORS: Terminated due to an exception.
   * - TERMINATE_FAILED: Failed to terminate.
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - **Kubernetes**: dedicated Kubernetes cluster.
   * - **ManagedKubernetes**: standard managed cluster (edge cluster).
   * - **Ask**: standard serverless cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The number of containers.
   * 
   * @example
   * 1
   */
  containerCount?: number;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1702433618301
   */
  createTime?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * shangliang-test
   */
  nodeName?: string;
  /**
   * @remarks
   * The POD name.
   * 
   * @example
   * node-local-dns-zwsxl
   */
  pod?: string;
  /**
   * @remarks
   * The number of PODs.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The IP address of the POD.
   * 
   * @example
   * 192.168.1.1
   */
  podIp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      appName: 'AppName',
      clusterCurrentVersion: 'ClusterCurrentVersion',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      containerCount: 'ContainerCount',
      createTime: 'CreateTime',
      instanceCount: 'InstanceCount',
      namespace: 'Namespace',
      nodeName: 'NodeName',
      pod: 'Pod',
      podCount: 'PodCount',
      podIp: 'PodIp',
      regionId: 'RegionId',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      appName: 'string',
      clusterCurrentVersion: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      containerCount: 'number',
      createTime: 'number',
      instanceCount: 'number',
      namespace: 'string',
      nodeName: 'string',
      pod: 'string',
      podCount: 'number',
      podIp: 'string',
      regionId: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupedFieldDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeContainerGroupedFieldDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
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
      data: DescribeContainerGroupedFieldDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


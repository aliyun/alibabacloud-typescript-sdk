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
   * The name of the application.
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
   * zhhtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   STARTING: The cluster is being started.
   * *   START_FAILED: The cluster fails to be started.
   * *   BOOTSTRAPPING: The bootstrap action is being performed for the cluster.
   * *   RUNNING: The cluster is running.
   * *   TERMINATING: The cluster is being terminated.
   * *   TERMINATED: The cluster is terminated.
   * *   TERMINATED_WITH_ERRORS: The cluster is terminated due to an exception.
   * *   TERMINATE_FAILED: The cluster fails to be terminated.
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Kubernetes**: dedicated Kubernetes cluster.
   * *   **ManagedKubernetes**: standard managed cluster (edge cluster).
   * *   **Ask**: serverless Kubernetes (ASK) cluster.
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
   * The creation time.
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
   * The name of the node.
   * 
   * @example
   * shangliang-test
   */
  nodeName?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * node-local-dns-zwsxl
   */
  pod?: string;
  /**
   * @remarks
   * The number of pods.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 192.168.1.1
   */
  podIp?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * The data returned.
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


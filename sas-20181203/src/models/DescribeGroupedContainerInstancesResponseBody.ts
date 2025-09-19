// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are detected for the current pod, application, namespace, or cluster.
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
   * oss-liveness-probe
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cf3824769c85441b4bf3****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test
   */
  clusterName?: string;
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
   * The timestamp when the cluster was created. Unit: milliseconds.
   * 
   * @example
   * 1600076893000
   */
  createTime?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **running**: The cluster is running.
   * *   **stopped**: The cluster is stopped.
   * *   **deleted**: The cluster is deleted.
   * *   **delete_failed**: The cluster failed to be deleted.
   * *   **failed**: The cluster failed to be created.
   * 
   * @example
   * running
   */
  custerState?: string;
  /**
   * @remarks
   * The number of baseline risks that are detected for the current pod, application, namespace, or cluster.
   * 
   * @example
   * 20
   */
  hcCount?: number;
  /**
   * @remarks
   * The IP address of the host in the container cluster.
   * 
   * @example
   * 172.114.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.ap-southeast-5.aliyuncs.com/log-service-release/sls-connector:1.1.77
   */
  image?: string;
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 58e58c013f70bbfde140c8a55c1078074b3483479428d4069aa946827fd566cf
   */
  imageDigest?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test-003
   */
  imageRepoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * name001
   */
  imageRepoNamespace?: string;
  /**
   * @remarks
   * The tag that is added to the image repository.
   * 
   * @example
   * dev-20220512-2
   */
  imageRepoTag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * e4bdec1d9ba7e0967111a7ea467c****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The number of pods, applications, clusters, or namespaces.
   * 
   * @example
   * 9
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-8vb9ul5xec4tua4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * csi-plugin-2n****
   */
  pod?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 172.114.XX.XX
   */
  podIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of at-risk instances.
   * 
   * @example
   * 1
   */
  riskInstanceCount?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * Indicates whether risks were detected. Valid values:
   * 
   * *   **NO**
   * *   **YES**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * Indicates whether the synchronization of cluster audit logs is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 1
   */
  syncOpen?: number;
  /**
   * @remarks
   * The status of the synchronization of cluster audit logs. Valid values:
   * 
   * *   **0**: The synchronization failed.
   * *   **1**: The synchronization is successful.
   * 
   * @example
   * 1
   */
  syncStatus?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are detected for the current pod, application, namespace, or cluster.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      custerState: 'CusterState',
      hcCount: 'HcCount',
      hostIp: 'HostIp',
      image: 'Image',
      imageDigest: 'ImageDigest',
      imageRepoName: 'ImageRepoName',
      imageRepoNamespace: 'ImageRepoNamespace',
      imageRepoTag: 'ImageRepoTag',
      imageUuid: 'ImageUuid',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pod: 'Pod',
      podIp: 'PodIp',
      regionId: 'RegionId',
      riskInstanceCount: 'RiskInstanceCount',
      riskLevel: 'RiskLevel',
      riskStatus: 'RiskStatus',
      syncOpen: 'SyncOpen',
      syncStatus: 'SyncStatus',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      createTime: 'number',
      custerState: 'string',
      hcCount: 'number',
      hostIp: 'string',
      image: 'string',
      imageDigest: 'string',
      imageRepoName: 'string',
      imageRepoNamespace: 'string',
      imageRepoTag: 'string',
      imageUuid: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      namespace: 'string',
      pod: 'string',
      podIp: 'string',
      regionId: 'string',
      riskInstanceCount: 'number',
      riskLevel: 'string',
      riskStatus: 'string',
      syncOpen: 'number',
      syncStatus: 'number',
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

export class DescribeGroupedContainerInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of container assets returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of container assets returned.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the container.
   */
  groupedContainerInstanceList?: DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeGroupedContainerInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedContainerInstanceList: 'GroupedContainerInstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedContainerInstanceList: { 'type': 'array', 'itemType': DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList },
      pageInfo: DescribeGroupedContainerInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupedContainerInstanceList)) {
      $dara.Model.validateArray(this.groupedContainerInstanceList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


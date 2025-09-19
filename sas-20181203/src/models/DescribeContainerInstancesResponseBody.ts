// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerInstancesResponseBodyContainerInstanceList extends $dara.Model {
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
   * Indicates whether alerts are generated for the container. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * YES
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * alibaba-log-controller
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cfb41a869c71e4678a97021582dd8a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * 48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d****
   */
  containerId?: string;
  /**
   * @remarks
   * The timestamp when the cluster was created. Unit: milliseconds.
   * 
   * @example
   * 1670368337000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the asset is exposed to the Internet.
   * 
   * *   **1**: exposed
   * *   **0**: not exposed
   * 
   * @example
   * 1
   */
  exposed?: number;
  /**
   * @remarks
   * The exposure details. The value is a JSON string.
   * 
   * @example
   * [{}]
   */
  exposedDetail?: string;
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 1
   */
  hcCount?: number;
  /**
   * @remarks
   * Indicates whether baseline risks are detected. Valid values:
   * 
   * *   **NO**
   * *   **YES**
   * 
   * @example
   * YES
   */
  hcStatus?: string;
  /**
   * @remarks
   * The IP address of the host.
   * 
   * @example
   * 172.24.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The image of the container.
   * 
   * @example
   * docker.io/library/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 5b046e2de8c490819125193ee2eb71a66f2cc16c032dcd8b69ead4be1024****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * registry-vpc.cn-beijing.aliyuncs.com/acs/log-controller@sha256:5b046e2de8c490819125193ee2eb71a66f2cc16c032dcd8b69ead4be1024****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * log-controller
   */
  imageRepoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * acs
   */
  imageRepoNamespace?: string;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * @example
   * 0.3.1.0-dfa2010-aliyun
   */
  imageRepoTag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 5f23dfbceec289a49ac94e035e2****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-2zegzjyotydfkz9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The node information.
   * 
   * @example
   * test
   */
  nodeInfo?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The pod.
   * 
   * @example
   * alibaba-log-controller-6f847f8786-mk2mg
   */
  pod?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 172.24.XX.XX
   */
  podIp?: string;
  /**
   * @remarks
   * The region ID of the container.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of risks.
   * 
   * @example
   * 1
   */
  riskCount?: string;
  /**
   * @remarks
   * Indicates whether risks exist. Valid values:
   * 
   * *   **NO**
   * *   **YES**
   * 
   * @example
   * YES
   */
  riskStatus?: string;
  /**
   * @remarks
   * The update identifier of the container.
   * 
   * @example
   * 79cff74d-e967-5407-8a78-ee03b9****
   */
  updateMark?: string;
  /**
   * @remarks
   * The number of vulnerabilities that are detected in the container cluster.
   * 
   * @example
   * 15
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities are detected in the container. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * YES
   */
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      alarmStatus: 'AlarmStatus',
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      createTimestamp: 'CreateTimestamp',
      exposed: 'Exposed',
      exposedDetail: 'ExposedDetail',
      hcCount: 'HcCount',
      hcStatus: 'HcStatus',
      hostIp: 'HostIp',
      image: 'Image',
      imageDigest: 'ImageDigest',
      imageId: 'ImageId',
      imageRepoName: 'ImageRepoName',
      imageRepoNamespace: 'ImageRepoNamespace',
      imageRepoTag: 'ImageRepoTag',
      imageUuid: 'ImageUuid',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      nodeInfo: 'NodeInfo',
      nodeName: 'NodeName',
      pod: 'Pod',
      podIp: 'PodIp',
      regionId: 'RegionId',
      riskCount: 'RiskCount',
      riskStatus: 'RiskStatus',
      updateMark: 'UpdateMark',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmStatus: 'string',
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      createTimestamp: 'number',
      exposed: 'number',
      exposedDetail: 'string',
      hcCount: 'number',
      hcStatus: 'string',
      hostIp: 'string',
      image: 'string',
      imageDigest: 'string',
      imageId: 'string',
      imageRepoName: 'string',
      imageRepoNamespace: 'string',
      imageRepoTag: 'string',
      imageUuid: 'string',
      instanceId: 'string',
      namespace: 'string',
      nodeInfo: 'string',
      nodeName: 'string',
      pod: 'string',
      podIp: 'string',
      regionId: 'string',
      riskCount: 'string',
      riskStatus: 'string',
      updateMark: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 3
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 45
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

export class DescribeContainerInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the container asset.
   */
  containerInstanceList?: DescribeContainerInstancesResponseBodyContainerInstanceList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeContainerInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerInstanceList: 'ContainerInstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerInstanceList: { 'type': 'array', 'itemType': DescribeContainerInstancesResponseBodyContainerInstanceList },
      pageInfo: DescribeContainerInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerInstanceList)) {
      $dara.Model.validateArray(this.containerInstanceList);
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


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
   * Indicates whether security alerts exist for the container. Valid values:
   * - **YES**: Security alerts exist.
   * - **NO**: No security alerts exist.
   * 
   * @example
   * YES
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * alibaba-log-controller
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
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
   * The container ID.
   * 
   * @example
   * 48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d****
   */
  containerId?: string;
  /**
   * @remarks
   * The timestamp when the cluster was created, in milliseconds.
   * 
   * @example
   * 1670368337000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the container is exposed to the Internet. Valid values:
   * - **1**: exposed.
   * - **0**: not exposed.
   * 
   * @example
   * 1
   */
  exposed?: number;
  /**
   * @remarks
   * The exposure details in JSON format.
   * 
   * @example
   * [{\\"exposedName\\":\\"nginx-ingress-lb\\",\\"exposedType\\":\\"LoadBalancer\\",\\"portDOList\\":[{\\"name\\":\\"http\\",\\"nodePort\\":32268,\\"port\\":80,\\"targetPort\\":80},{\\"name\\":\\"https\\",\\"nodePort\\":32376,\\"port\\":443,\\"targetPort\\":443}]}]
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
   * The baseline risk status. Valid values:
   * 
   * - **NO**: No baseline risks exist. 
   * - **YES**: Baseline risks exist.
   * 
   * @example
   * YES
   */
  hcStatus?: string;
  /**
   * @remarks
   * The host IP address.
   * 
   * @example
   * 172.24.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The container image.
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
   * The tag of the image.
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
   * The asset instance ID.
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
   * The node name.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The pod name.
   * 
   * @example
   * alibaba-log-controller-6f847f8786-mk2mg
   */
  pod?: string;
  /**
   * @remarks
   * The pod IP address.
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
   * - **NO**: No risks exist.
   * - **YES**: Risks exist.
   * 
   * @example
   * YES
   */
  riskStatus?: string;
  /**
   * @remarks
   * The update identifier of the container asset.
   * 
   * @example
   * 79cff74d-e967-5407-8a78-ee03b9****
   */
  updateMark?: string;
  /**
   * @remarks
   * The number of vulnerabilities in the container cluster.
   * 
   * @example
   * 15
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities exist in the container asset. Valid values:
   * - **YES**: Vulnerabilities exist.
   * - **NO**: No vulnerabilities exist.
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
   * The number of entries on the current page in a paging query.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
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
   * The list of container asset information.
   */
  containerInstanceList?: DescribeContainerInstancesResponseBodyContainerInstanceList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeContainerInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use it for troubleshooting.
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


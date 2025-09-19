// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodRiskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
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
   * The number of entries returned per page.
   * 
   * @example
   * 2-
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
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

export class ListPodRiskResponseBodyPodRiskList extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are generated for the pod.
   * 
   * @example
   * 10
   */
  alarmCount?: number;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c1d903a628af043659a043af59d89****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test66
   */
  clusterName?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the pod was created. Unit: milliseconds.
   * 
   * @example
   * 1644283112720
   */
  createTime?: number;
  /**
   * @remarks
   * The number of baseline risk items that are detected in the pod.
   * 
   * @example
   * 1
   */
  hcCount?: number;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-7yvdq597****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
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
   * The name of the pod.
   * 
   * @example
   * expoit-xxx-b****
   */
  pod?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 172.0.XXX.XXX
   */
  podIp?: string;
  /**
   * @remarks
   * The number of vulnerabilities that are detected in the pod.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      hcCount: 'HcCount',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      nodeName: 'NodeName',
      pod: 'Pod',
      podIp: 'PodIp',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'number',
      hcCount: 'number',
      instanceId: 'string',
      namespace: 'string',
      nodeName: 'string',
      pod: 'string',
      podIp: 'string',
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

export class ListPodRiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListPodRiskResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the risks.
   */
  podRiskList?: ListPodRiskResponseBodyPodRiskList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 94254AD7-5026-5847-833B-403C2326BD6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      podRiskList: 'PodRiskList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListPodRiskResponseBodyPageInfo,
      podRiskList: { 'type': 'array', 'itemType': ListPodRiskResponseBodyPodRiskList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.podRiskList)) {
      $dara.Model.validateArray(this.podRiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


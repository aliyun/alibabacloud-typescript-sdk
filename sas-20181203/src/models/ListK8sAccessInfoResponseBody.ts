// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sAccessInfoResponseBodyK8sAccessInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1960721413485****
   */
  aliUid?: number;
  /**
   * @remarks
   * The Simple Log Service Logstore that is used to store the audit logs.
   * 
   * @example
   * audit-cf6baf6afa106eca665296fdf68b****
   */
  auditLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service project that is used to store the audit logs.
   * 
   * @example
   * k8s-log-custom-your-project-sd89eh****
   */
  auditProject?: string;
  /**
   * @remarks
   * The ID of the region in which the server is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  auditRegionId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c0da5e4cb82a848c4a57c4dc9f49a****
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
   * @example
   * arm
   */
  cpuArch?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1690596321613
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 11088522
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The UUID of the access information.
   * 
   * @example
   * 67070
   */
  id?: number;
  /**
   * @remarks
   * The installation key of the Kubernetes cluster.
   * 
   * @example
   * xxx
   */
  installKey?: string;
  /**
   * @remarks
   * The service provider.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      auditLogStore: 'AuditLogStore',
      auditProject: 'AuditProject',
      auditRegionId: 'AuditRegionId',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuArch: 'CpuArch',
      expireDate: 'ExpireDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      installKey: 'InstallKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      auditLogStore: 'string',
      auditProject: 'string',
      auditRegionId: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cpuArch: 'string',
      expireDate: 'number',
      groupId: 'string',
      groupName: 'string',
      id: 'number',
      installKey: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sAccessInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Kubernetes clusters.
   */
  k8sAccessInfos?: ListK8sAccessInfoResponseBodyK8sAccessInfos[];
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
      k8sAccessInfos: 'K8sAccessInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sAccessInfos: { 'type': 'array', 'itemType': ListK8sAccessInfoResponseBodyK8sAccessInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.k8sAccessInfos)) {
      $dara.Model.validateArray(this.k8sAccessInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


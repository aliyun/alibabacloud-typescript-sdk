// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sAccessInfoResponseBodyK8sAccessInfos extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID of the user.
   * 
   * @example
   * 1960721413485****
   */
  aliUid?: number;
  /**
   * @remarks
   * The Simple Log Service Logstore for audit logs.
   * 
   * @example
   * audit-cf6baf6afa106eca665296fdf68b****
   */
  auditLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service project for audit logs.
   * 
   * @example
   * k8s-log-custom-your-project-sd89eh****
   */
  auditProject?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * @example
   * cn-hangzhou
   */
  auditRegionId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c0da5e4cb82a848c4a57c4dc9f49a****
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
   * The CPU architecture. Valid values: ARM architecture and x86 architecture.
   * 
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
   * The server group ID.
   * 
   * @example
   * 11088522
   */
  groupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The unique ID of the access information.
   * 
   * @example
   * 67070
   */
  id?: number;
  /**
   * @remarks
   * The K8s installation key.
   * 
   * @example
   * xxx
   */
  installKey?: string;
  /**
   * @remarks
   * The vendor.
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
   * The list of K8s access information.
   */
  k8sAccessInfos?: ListK8sAccessInfoResponseBodyK8sAccessInfos[];
  /**
   * @remarks
   * The ID of the request. The China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
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


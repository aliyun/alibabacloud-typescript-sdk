// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateK8sAccessInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1766185894104***
   */
  aliUid?: number;
  /**
   * @remarks
   * The Simple Log Service Logstore that is used to store the audit logs.
   * 
   * @example
   * audit-cf6baf6afa106eca665296fdf68b65bf
   */
  auditLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service project that is used to store the audit logs.
   * 
   * @example
   * k8s-log-custom-your-project-sd89ehaaa
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
   * The expiration time. Unit: milliseconds.
   * 
   * @example
   * 1804230578566
   */
  expireDate?: number;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * 11618788
   */
  groupId?: string;
  /**
   * @remarks
   * The installation key of the server.
   * 
   * @example
   * BC66185***
   */
  installKey?: string;
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
      installKey: 'InstallKey',
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
      installKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateK8sAccessInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GenerateK8sAccessInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 061955B2-BC40-589F-AF63-C40A901EE279
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
      data: GenerateK8sAccessInfoResponseBodyData,
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


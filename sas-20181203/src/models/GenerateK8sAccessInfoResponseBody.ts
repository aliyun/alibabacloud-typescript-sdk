// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateK8sAccessInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The aliuid of the user.
   * 
   * @example
   * 1766185894104***
   */
  aliUid?: number;
  /**
   * @remarks
   * The SLS Logstore of the audit log.
   * 
   * @example
   * audit-cf6baf6afa106eca665296fdf68b65bf
   */
  auditLogStore?: string;
  /**
   * @remarks
   * The SLS project of the audit log.
   * 
   * @example
   * k8s-log-custom-your-project-sd89ehaaa
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
   * @remarks
   * The CPU architecture, which can be ARM or x86. Valid values:
   * - arm64
   * 
   * - x86
   * 
   * @example
   * x86
   */
  cpuArch?: string;
  /**
   * @remarks
   * The expiration time, in milliseconds.
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
   * The returned data.
   */
  data?: GenerateK8sAccessInfoResponseBodyData;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
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


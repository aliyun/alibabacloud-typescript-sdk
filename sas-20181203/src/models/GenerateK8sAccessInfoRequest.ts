// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateK8sAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayApiName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayPopName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayProjectName?: string;
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
   * k8s-log-custom-huxintest1018-2
   */
  auditProject?: string;
  /**
   * @remarks
   * The ID of the region in which the audit logs are stored.
   * 
   * @example
   * cn-hangzhou
   */
  auditRegionId?: string;
  /**
   * @remarks
   * The name of the Kubernetes cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * CPU architectures are divided into ARM architecture and x86 architecture.
   * 
   * @example
   * arm
   */
  cpuArch?: string;
  /**
   * @remarks
   * The time at which the container ends to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * 1711951508388
   */
  expireDate?: number;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11341690
   */
  groupId?: number;
  /**
   * @remarks
   * The service provider of the cloud asset. Valid values:
   * 
   * *   **Tencent**
   * *   **HUAWEICLOUD**
   * *   **Azure**
   * *   **AWS**
   * *   **Others**
   * 
   * This parameter is required.
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunYundunGatewayApiName: 'AliyunYundunGatewayApiName',
      aliyunYundunGatewayPopName: 'AliyunYundunGatewayPopName',
      aliyunYundunGatewayProjectName: 'AliyunYundunGatewayProjectName',
      auditLogStore: 'AuditLogStore',
      auditProject: 'AuditProject',
      auditRegionId: 'AuditRegionId',
      clusterName: 'ClusterName',
      cpuArch: 'CpuArch',
      expireDate: 'ExpireDate',
      groupId: 'GroupId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunYundunGatewayApiName: 'string',
      aliyunYundunGatewayPopName: 'string',
      aliyunYundunGatewayProjectName: 'string',
      auditLogStore: 'string',
      auditProject: 'string',
      auditRegionId: 'string',
      clusterName: 'string',
      cpuArch: 'string',
      expireDate: 'number',
      groupId: 'number',
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


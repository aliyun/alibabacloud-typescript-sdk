// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateK8sAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayApiName?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayPopName?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayProjectName?: string;
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
   * k8s-log-custom-huxintest1018-2
   */
  auditProject?: string;
  /**
   * @remarks
   * The region of the audit log.
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
   * The CPU architecture, which can be ARM or x86.
   * 
   * @example
   * arm
   */
  cpuArch?: string;
  /**
   * @remarks
   * The expiration time for container access.
   * 
   * This parameter is required.
   * 
   * @example
   * 1711951508388
   */
  expireDate?: number;
  /**
   * @remarks
   * The queried group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11341690
   */
  groupId?: number;
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * - **Tencent**
   * - **HUAWEICLOUD**
   * - **Azure**
   * - **AWS** 
   * - **Other cloud assets**
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


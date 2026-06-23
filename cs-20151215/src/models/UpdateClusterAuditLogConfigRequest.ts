// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the cluster audit log feature. Valid values:
   * - false: enables the audit log feature or updates the audit log configuration.
   * 
   * - true: disables the audit log feature.
   * 
   * @example
   * false
   */
  disable?: boolean;
  /**
   * @remarks
   * The [SLS Project](https://help.aliyun.com/document_detail/48873.html) that contains the [Logstore](https://help.aliyun.com/document_detail/48874.html) for cluster audit logs.
   * 
   * - Default value: k8s-log-{clusterid}.
   * 
   * - After you enable the cluster audit log feature, a Logstore for cluster audit logs is created in the specified SLS Project.
   * 
   * - If you need to change the SLS Project after enabling the cluster audit log feature, use this parameter to specify a new SLS Project. Only ACK managed clusters support changing the SLS Project.
   * 
   * @example
   * k8s-log-c82e6987e2961451182edacd74faf****
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      slsProjectName: 'sls_project_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      slsProjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


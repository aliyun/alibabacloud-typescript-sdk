// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the cluster audit log feature. Valid values:
   * - false: enables the audit log feature or updates the audit log configurations.
   * - true: disables the audit log feature.
   * 
   * @example
   * false
   */
  disable?: boolean;
  /**
   * @remarks
   * The [SLS project](https://help.aliyun.com/document_detail/48873.html) where the [Logstore](https://help.aliyun.com/document_detail/48874.html) for cluster audit logs is located.
   * 
   * - The default value is k8s-log-{clusterid}.
   * 
   * - After you enable the cluster audit log feature, a Logstore for cluster audit logs is created in the specified SLS project.
   * 
   * - If you need to change the SLS project after enabling the cluster audit log feature, you can use this parameter to specify a new SLS project. Only ACK managed clusters support changing the SLS project.
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


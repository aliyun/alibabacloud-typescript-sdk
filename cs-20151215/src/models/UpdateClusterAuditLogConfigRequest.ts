// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Enable or disable audit logging.
   * 
   * *   false: enables audit logging or updates the audit logging configurations.
   * *   true: disables audit logging.
   * 
   * @example
   * false
   */
  disable?: boolean;
  /**
   * @remarks
   * The [Simple Log Service project](https://help.aliyun.com/document_detail/48873.html) to which the [Logstore](https://help.aliyun.com/document_detail/48873.html) storing the cluster audit logs belongs.
   * 
   * *   Default value: k8s-log-{clusterid}.
   * *   After the cluster audit log feature is enabled, a Logstore is created in the specified Simple Log Service project to store cluster audit logs.
   * *   If you want to change the project after audit logging is enabled for the cluster, you can use this parameter to specify another project. You can perform this operation only in ACK managed clusters.
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


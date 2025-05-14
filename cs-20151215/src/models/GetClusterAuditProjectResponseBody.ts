// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAuditProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cluster auditing feature is enabled for the cluster. 
   * 
   * * `true`: The cluster auditing feature is enabled for the cluster. 
   * * `false`: The cluster auditing feature is disabled for the cluster.
   * 
   * @example
   * true
   */
  auditEnabled?: boolean;
  /**
   * @remarks
   * The SLS project in which the audit logs of the API server are stored.
   * 
   * @example
   * k8s-log-cad1230511cbb4db4a488e58518******
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      auditEnabled: 'audit_enabled',
      slsProjectName: 'sls_project_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditEnabled: 'boolean',
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


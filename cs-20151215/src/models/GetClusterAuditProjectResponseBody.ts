// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAuditProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the API server audit feature is enabled for the cluster. Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Not enabled.
   * 
   * @example
   * true
   */
  auditEnabled?: boolean;
  /**
   * @remarks
   * The SLS project that stores the API server audit logs of the cluster.
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


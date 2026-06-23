// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceResponseBodyLogging extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the component supports the logging feature.
   * 
   * - true: Supported.
   * 
   * - false: Not supported.
   * 
   * @example
   * false
   */
  capable?: boolean;
  /**
   * @remarks
   * Indicates whether the logging feature is enabled for the component.
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Log Service project used by the logging feature of the component.
   * 
   * @example
   * k8s-log-c02b3e03be10643e8a644a843ffcb****
   */
  logProject?: string;
  /**
   * @remarks
   * The Log Service Logstore used by the logging feature of the component.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  static names(): { [key: string]: string } {
    return {
      capable: 'capable',
      enabled: 'enabled',
      logProject: 'log_project',
      logstore: 'logstore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capable: 'boolean',
      enabled: 'boolean',
      logProject: 'string',
      logstore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom parameter settings of the component.
   * 
   * @example
   * {"sls_project_name":""}
   */
  config?: string;
  /**
   * @remarks
   * The logging feature status of the component.
   */
  logging?: GetClusterAddonInstanceResponseBodyLogging;
  /**
   * @remarks
   * The component instance name.
   * 
   * @example
   * ack-node-problem-detector
   */
  name?: string;
  /**
   * @remarks
   * The component status. Valid values:
   * - active: installed.
   * - updating: being modified.
   * - upgrading: being upgraded.
   * - deleting: being uninstalled.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The component instance version.
   * 
   * @example
   * 1.2.16
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      logging: 'logging',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      logging: GetClusterAddonInstanceResponseBodyLogging,
      name: 'string',
      state: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


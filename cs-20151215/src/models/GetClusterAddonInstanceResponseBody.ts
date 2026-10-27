// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceResponseBodyLogging extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the add-on supports the log feature. Valid values:
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
   * Specifies whether the log feature is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Log Service project used by the add-on log feature.
   * 
   * @example
   * k8s-log-c02b3e03be10643e8a644a843ffcb****
   */
  logProject?: string;
  /**
   * @remarks
   * The Logstore used by the add-on log feature.
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
   * The custom parameter settings of the add-on.
   * 
   * @example
   * {"sls_project_name":""}
   */
  config?: string;
  /**
   * @remarks
   * The log feature status of the add-on.
   */
  logging?: GetClusterAddonInstanceResponseBodyLogging;
  /**
   * @remarks
   * The name of the add-on instance.
   * 
   * @example
   * ack-node-problem-detector
   */
  name?: string;
  /**
   * @remarks
   * The state of the add-on. Valid values:
   * - active: Installed.
   * - updating: Updating.
   * - upgrading: Upgrading.
   * - deleting: Uninstalling.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the add-on instance.
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


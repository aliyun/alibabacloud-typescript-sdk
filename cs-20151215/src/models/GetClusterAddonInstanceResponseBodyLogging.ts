// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceResponseBodyLogging extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Simple Log Service is supported by the component.
   * 
   * @example
   * false
   */
  capable?: boolean;
  /**
   * @remarks
   * Indicates whether Simple Log Service is enabled for the component.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Simple Log Service project that is used to collect logs for the component.
   * 
   * @example
   * my-log-project
   */
  logProject?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore that is used to collect logs for the component.
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


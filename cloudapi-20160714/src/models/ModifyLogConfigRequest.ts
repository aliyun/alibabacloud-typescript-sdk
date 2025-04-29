// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * *   **log**: other logs
   * *   **survey**: inspection logs
   * 
   * Enumeration value:
   * 
   * *   PROVIDER
   * 
   * @example
   * PROVIDER
   */
  logType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * logs-gateway
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * ford-api-gateway-log
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      securityToken: 'SecurityToken',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      securityToken: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


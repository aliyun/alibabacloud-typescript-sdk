// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies to create a service-linked role.
   * 
   * @example
   * true
   */
  createSlr?: boolean;
  /**
   * @remarks
   * The log type.
   * 
   * Valid values:
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
   * slslogstore
   * 
   * This parameter is required.
   * 
   * @example
   * api-gateway
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * rec-lq-sls
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      createSlr: 'CreateSlr',
      logType: 'LogType',
      securityToken: 'SecurityToken',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSlr: 'boolean',
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


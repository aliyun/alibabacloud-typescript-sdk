// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteManualNodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: Development environment. 
   * - PROD: Production environment. This is the default value.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The request to run a manual task.
   * 
   * This parameter is required.
   */
  executeCommandShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      executeCommandShrink: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      executeCommandShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


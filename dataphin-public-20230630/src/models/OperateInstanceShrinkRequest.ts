// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
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
   * The operation request.
   * 
   * This parameter is required.
   */
  operateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      operateCommandShrink: 'OperateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      operateCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD: production environment (default)
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Reruns downstream nodes to repair pipeline data and allows you to force the rerun.
   * 
   * This parameter is required.
   */
  fixDataCommandShrink?: string;
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fixDataCommandShrink: 'FixDataCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fixDataCommandShrink: 'string',
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


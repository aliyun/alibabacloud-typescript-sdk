// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * 
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
   * The ID of the data backfill instance.
   * 
   * This parameter is required.
   * 
   * @example
   * f_8241792_20201202_2099680
   */
  supplementId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      supplementId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


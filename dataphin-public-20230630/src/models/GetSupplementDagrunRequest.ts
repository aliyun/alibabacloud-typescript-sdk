// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunRequest extends $dara.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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


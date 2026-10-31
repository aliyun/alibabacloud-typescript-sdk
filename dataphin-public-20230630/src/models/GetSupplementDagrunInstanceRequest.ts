// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Dagrun ID
   * 
   * This parameter is required.
   * 
   * @example
   * dr_2242792_14542
   */
  dagrunId?: string;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment
   * - PROD: production environment
   * Default value: PROD.
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
   * The operator ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      dagrunId: 'DagrunId',
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagrunId: 'string',
      env: 'string',
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


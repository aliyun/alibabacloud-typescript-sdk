// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The dagrun ID.
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
  static names(): { [key: string]: string } {
    return {
      dagrunId: 'DagrunId',
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagrunId: 'string',
      env: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Environment identifier
   * - DEV: Development environment
   * - PROD (default): Production environment
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Query Request
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQueryShrink: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQueryShrink?: string;
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


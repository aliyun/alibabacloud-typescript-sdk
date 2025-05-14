// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnsubscribeEventShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SPACE
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23456
   */
  scopeId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'Scope',
      scopeId: 'ScopeId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnsubscribeEventRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeEventRequest extends $dara.Model {
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
  tenantContext?: UnsubscribeEventRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      scope: 'Scope',
      scopeId: 'ScopeId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeId: 'string',
      tenantContext: UnsubscribeEventRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


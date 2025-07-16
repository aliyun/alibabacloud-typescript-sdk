// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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

export class GetUserRequest extends $dara.Model {
  tenantContext?: GetUserRequestTenantContext;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetUserRequestTenantContext,
      language: 'string',
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


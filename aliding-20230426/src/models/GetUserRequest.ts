// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserRequestTenantContext } from "./GetUserRequestTenantContext";


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


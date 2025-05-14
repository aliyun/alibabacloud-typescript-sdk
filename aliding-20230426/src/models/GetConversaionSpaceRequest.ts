// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConversaionSpaceRequestTenantContext } from "./GetConversaionSpaceRequestTenantContext";


export class GetConversaionSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidB8Pzg****FIWPv2PMA==
   */
  openConversationId?: string;
  tenantContext?: GetConversaionSpaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      tenantContext: GetConversaionSpaceRequestTenantContext,
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


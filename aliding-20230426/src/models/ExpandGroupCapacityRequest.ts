// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExpandGroupCapacityRequestTenantContext } from "./ExpandGroupCapacityRequestTenantContext";


export class ExpandGroupCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  tenantContext?: ExpandGroupCapacityRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      tenantContext: ExpandGroupCapacityRequestTenantContext,
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


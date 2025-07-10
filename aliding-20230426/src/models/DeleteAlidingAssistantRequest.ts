// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAlidingAssistantRequestTenantContext } from "./DeleteAlidingAssistantRequestTenantContext";


export class DeleteAlidingAssistantRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  assistantId?: string;
  tenantContext?: DeleteAlidingAssistantRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'AssistantId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      tenantContext: DeleteAlidingAssistantRequestTenantContext,
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


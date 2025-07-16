// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlidingAssistantInfoRequestTenantContext extends $dara.Model {
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

export class GetAlidingAssistantInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  assistantId?: string;
  tenantContext?: GetAlidingAssistantInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'AssistantId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      tenantContext: GetAlidingAssistantInfoRequestTenantContext,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSceneGroupTemplateRequestTenantContext extends $dara.Model {
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

export class EnableSceneGroupTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2efdt*****fswe==
   */
  templateId?: string;
  tenantContext?: EnableSceneGroupTemplateRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      templateId: 'TemplateId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      templateId: 'string',
      tenantContext: EnableSceneGroupTemplateRequestTenantContext,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSceneGroupTemplateShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      templateId: 'TemplateId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      templateId: 'string',
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


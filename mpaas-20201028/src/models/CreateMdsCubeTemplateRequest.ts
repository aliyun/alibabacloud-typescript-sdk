// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsCubeTemplateRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * test_card
   */
  templateDesc?: string;
  /**
   * @example
   * test12435
   */
  templateId?: string;
  /**
   * @example
   * test_card
   */
  templateName?: string;
  /**
   * @example
   * ZXCXMAHQ-zh_CN
   */
  tenantId?: string;
  /**
   * @example
   * dev
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateDesc: 'TemplateDesc',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


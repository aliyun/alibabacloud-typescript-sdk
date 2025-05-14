// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 我管理的模版
   */
  templateName?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
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


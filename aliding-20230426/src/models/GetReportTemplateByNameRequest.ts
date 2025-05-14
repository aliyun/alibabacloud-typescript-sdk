// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetReportTemplateByNameRequestTenantContext } from "./GetReportTemplateByNameRequestTenantContext";


export class GetReportTemplateByNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 我管理的模版
   */
  templateName?: string;
  tenantContext?: GetReportTemplateByNameRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      tenantContext: GetReportTemplateByNameRequestTenantContext,
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


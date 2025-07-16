// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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


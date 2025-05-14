// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReportDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18054XXX
   */
  reportId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
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


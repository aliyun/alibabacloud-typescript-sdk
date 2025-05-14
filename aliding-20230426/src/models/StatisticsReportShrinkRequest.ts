// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsReportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173xxxx
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


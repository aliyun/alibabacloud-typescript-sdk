// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StatisticsReportRequestTenantContext } from "./StatisticsReportRequestTenantContext";


export class StatisticsReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173xxxx
   */
  reportId?: string;
  tenantContext?: StatisticsReportRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      tenantContext: StatisticsReportRequestTenantContext,
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


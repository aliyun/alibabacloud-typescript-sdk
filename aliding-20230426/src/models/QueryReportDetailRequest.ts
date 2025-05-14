// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReportDetailRequestTenantContext } from "./QueryReportDetailRequestTenantContext";


export class QueryReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18054XXX
   */
  reportId?: string;
  tenantContext?: QueryReportDetailRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      tenantContext: QueryReportDetailRequestTenantContext,
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


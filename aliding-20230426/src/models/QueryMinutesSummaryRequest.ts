// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesSummaryRequestTenantContext } from "./QueryMinutesSummaryRequestTenantContext";


export class QueryMinutesSummaryRequest extends $dara.Model {
  tenantContext?: QueryMinutesSummaryRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  summaryTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      summaryTypeList: 'summaryTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryMinutesSummaryRequestTenantContext,
      conferenceId: 'string',
      summaryTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.summaryTypeList)) {
      $dara.Model.validateArray(this.summaryTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


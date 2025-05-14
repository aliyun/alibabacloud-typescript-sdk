// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReceiverListReportRequestTenantContext } from "./ReceiverListReportRequestTenantContext";


export class ReceiverListReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173xxxx
   */
  reportId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  tenantContext?: ReceiverListReportRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      reportId: 'ReportId',
      size: 'Size',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      reportId: 'string',
      size: 'number',
      tenantContext: ReceiverListReportRequestTenantContext,
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


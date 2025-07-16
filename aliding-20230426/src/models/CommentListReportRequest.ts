// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommentListReportRequestTenantContext extends $dara.Model {
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

export class CommentListReportRequest extends $dara.Model {
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
  tenantContext?: CommentListReportRequestTenantContext;
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
      tenantContext: CommentListReportRequestTenantContext,
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


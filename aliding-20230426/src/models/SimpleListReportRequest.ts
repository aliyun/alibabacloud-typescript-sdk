// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleListReportRequestTenantContext extends $dara.Model {
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

export class SimpleListReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  cursor?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1507564800000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1507564800000
   */
  startTime?: number;
  /**
   * @example
   * 我管理的模版
   */
  templateName?: string;
  tenantContext?: SimpleListReportRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      templateName: 'TemplateName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'number',
      endTime: 'number',
      size: 'number',
      startTime: 'number',
      templateName: 'string',
      tenantContext: SimpleListReportRequestTenantContext,
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


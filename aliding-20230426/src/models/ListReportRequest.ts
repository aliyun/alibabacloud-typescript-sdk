// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportRequestTenantContext extends $dara.Model {
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

export class ListReportRequest extends $dara.Model {
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
   * @example
   * 1507564800000
   */
  modifiedEndTime?: number;
  /**
   * @example
   * 1507564800000
   */
  modifiedStartTime?: number;
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
  tenantContext?: ListReportRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      modifiedEndTime: 'ModifiedEndTime',
      modifiedStartTime: 'ModifiedStartTime',
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
      modifiedEndTime: 'number',
      modifiedStartTime: 'number',
      size: 'number',
      startTime: 'number',
      templateName: 'string',
      tenantContext: ListReportRequestTenantContext,
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


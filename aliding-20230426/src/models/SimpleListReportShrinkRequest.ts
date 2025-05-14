// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleListReportShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      templateName: 'TemplateName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'number',
      endTime: 'number',
      size: 'number',
      startTime: 'number',
      templateName: 'string',
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


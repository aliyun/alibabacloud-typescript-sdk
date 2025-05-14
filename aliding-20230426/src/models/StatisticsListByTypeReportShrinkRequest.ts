// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsListByTypeReportShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 173xxxx
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      reportId: 'ReportId',
      size: 'Size',
      tenantContextShrink: 'TenantContext',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      reportId: 'string',
      size: 'number',
      tenantContextShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


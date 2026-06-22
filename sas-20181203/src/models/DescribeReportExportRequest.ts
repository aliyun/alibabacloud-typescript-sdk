// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReportExportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * > Call [ExportCustomizeReport](~~ExportCustomizeReport~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  exportId?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


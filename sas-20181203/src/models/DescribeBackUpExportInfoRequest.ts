// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackUpExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of archive data to export. Valid values:
   * 
   * - **suspiciousExport**: security alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * suspiciousExport
   */
  exportType?: string;
  /**
   * @remarks
   * The language type for requests and responses. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. Default value: 1.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      exportType: 'ExportType',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      exportType: 'string',
      lang: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomizeReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the report.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the report was generated. Format: YYYY-MM-DD.
   * 
   * @example
   * 2023-01-10
   */
  exportDate?: string;
  /**
   * @remarks
   * The ID of the export report task.
   * 
   * @example
   * 22
   */
  exportId?: number;
  /**
   * @remarks
   * The status of the export node. Valid values:
   * - **fail**: The export failed.
   * - **exporting**: The export is in progress.
   * - **success**: The export succeeded.
   * 
   * @example
   * exporting
   */
  exportStatus?: string;
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * test_xxxx.html
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the security report.
   * 
   * @example
   * 123
   */
  reportId?: number;
  /**
   * @remarks
   * The request ID, which is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * FFDFCEB3-A5EE-590A-8E70-283EBC5D****
   */
  requestId?: string;
  /**
   * @remarks
   * The UNIX timestamp when the report download URL expires. Unit: seconds.
   * 
   * @example
   * 1673335497000
   */
  urlExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      exportDate: 'ExportDate',
      exportId: 'ExportId',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      reportId: 'ReportId',
      requestId: 'RequestId',
      urlExpiredTime: 'UrlExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      exportDate: 'string',
      exportId: 'number',
      exportStatus: 'string',
      fileName: 'string',
      reportId: 'number',
      requestId: 'string',
      urlExpiredTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


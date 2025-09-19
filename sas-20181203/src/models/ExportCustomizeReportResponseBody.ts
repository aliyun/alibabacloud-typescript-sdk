// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomizeReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the security report.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the security report was exported.
   * 
   * @example
   * 2023-01-10
   */
  exportDate?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 22
   */
  exportId?: number;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * *   **fail**: The export task fails.
   * *   **exporting**: The export task is being executed.
   * *   **success**: The export task is successful.
   * 
   * @example
   * exporting
   */
  exportStatus?: string;
  /**
   * @remarks
   * The name of the report file that is exported.
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
   * The request ID.
   * 
   * @example
   * FFDFCEB3-A5EE-590A-8E70-283EBC5D****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp when the download URL expires. Unit: seconds.
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


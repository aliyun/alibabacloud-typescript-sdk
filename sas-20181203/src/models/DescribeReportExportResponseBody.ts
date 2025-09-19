// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReportExportResponseBody extends $dara.Model {
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
   * The time when the report was exported.
   * 
   * @example
   * 2022-12-15
   */
  exportDate?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 2
   */
  exportId?: number;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * *   **-1**: The export task fails.
   * *   **0**: The export task is being initialized.
   * *   **1**: The export task is being executed.
   * *   **2**: The export task is successful.
   * 
   * @example
   * 2
   */
  exportStatus?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 377665
   */
  reportId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp when the download URL expires. Unit: milliseconds.
   * 
   * @example
   * 1660113647000
   */
  urlExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      exportDate: 'ExportDate',
      exportId: 'ExportId',
      exportStatus: 'ExportStatus',
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


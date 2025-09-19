// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of exported entries.
   * 
   * @example
   * 20
   */
  currentCount?: number;
  /**
   * @remarks
   * The status of the export task.
   * 
   * Valid values:
   * 
   * *   **init**: The task is being initialized.
   * *   **exporting**: The task is in progress.
   * *   **success**: The task is complete.
   * 
   * @example
   * success
   */
  exportStatus?: string;
  /**
   * @remarks
   * The name of the exported Excel file.
   * 
   * @example
   * health_check_export_20171123
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 131231
   */
  id?: number;
  /**
   * @remarks
   * The URL at which you can download the exported Excel file.
   * 
   * @example
   * http://www.aliyun.com
   */
  link?: string;
  /**
   * @remarks
   * The message that shows the task result. The value is fixed as **success**, which indicates that the task is complete.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the export task.
   * 
   * @example
   * 16
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the exported Excel file.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      id: 'Id',
      link: 'Link',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      exportStatus: 'string',
      fileName: 'string',
      id: 'number',
      link: 'string',
      message: 'string',
      progress: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


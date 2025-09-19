// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of exported entries.
   * 
   * @example
   * 1
   */
  currentCount?: number;
  /**
   * @remarks
   * The status of the export task. Valid values:
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
   * app_20210917
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 14356
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
   * The message that shows the results of the task. The value is fixed as **success**, which indicates that the task is complete.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the task.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C1AE3F3-18FA-4108-BXXX-AFA1A032756C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the exported Excel file.
   * 
   * @example
   * 10
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


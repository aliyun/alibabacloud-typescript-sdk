// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarningExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of baseline entries that are exported.
   * 
   * @example
   * 1
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
   * *   **success**: The task is successful.
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
   * The ID of the export task for the baseline check result.
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
   * https://eds.aliyun.com/notification/entitle/64b5c3e2-e52b-4d29-9617-e7e6d74XXXX
   */
  link?: string;
  /**
   * @remarks
   * The message that shows the task result. The value is fixed as **successful**, which indicates that the export task is complete.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the export task.
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
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of baseline entries returned.
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


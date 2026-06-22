// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data entries that have been exported.
   * 
   * @example
   * 1
   */
  currentCount?: number;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * - **init**: initializing
   * - **exporting**: exporting in progress
   * - **success**: export successful.
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
   * The ID of the vulnerability export task.
   * 
   * @example
   * 14356
   */
  id?: number;
  /**
   * @remarks
   * The download link of the exported Excel file.
   * 
   * @example
   * http://www.aliyun.com
   */
  link?: string;
  /**
   * @remarks
   * The message about the export result. Fixed value: **success**. This value indicates that the export is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The export progress percentage (%).
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4C1AE3F3-18FA-4108-BXXX-AFA1A032756C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries in the exported Excel file.
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


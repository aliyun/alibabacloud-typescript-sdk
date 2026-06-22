// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data entries that have been exported.
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
   * - **init**: export initialization
   * - **exporting**: export in progress
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
   * The download URL of the exported Excel file.
   * 
   * @example
   * http://www.aliyun.com
   */
  link?: string;
  /**
   * @remarks
   * The message returned for the export result. Fixed value: **success**. This value indicates that the export is successful.
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
   * 16
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries in the exported Excel file.
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


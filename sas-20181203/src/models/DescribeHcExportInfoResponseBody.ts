// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHcExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of exported entries.
   * 
   * @example
   * 148
   */
  currentCount?: number;
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * health_check_export_2022****
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the export task was created.
   * 
   * @example
   * 2022-11-03T15:15Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 1082278
   */
  id?: number;
  /**
   * @remarks
   * The download URL for the exported file.
   * 
   * @example
   * https://hc-export.oss-cn-shanghai.aliyuncs.com/export_hc/health_check_export_20221222_1671699255808.zip?Expires=1672304056&OSSAccessKeyId=****&Signature=****
   */
  link?: string;
  /**
   * @remarks
   * The progress percentage of the export task.
   * 
   * @example
   * 89
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3C2C94CF-ED08-50C0-BC72-C5029251****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * *   **exporting**: The task is in progress.
   * *   **success**: The task is complete.
   * 
   * @example
   * exporting
   */
  resultStatus?: string;
  /**
   * @remarks
   * The total number of exported entries.
   * 
   * @example
   * 624
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      link: 'Link',
      progress: 'Progress',
      requestId: 'RequestId',
      resultStatus: 'ResultStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      fileName: 'string',
      gmtCreate: 'number',
      id: 'number',
      link: 'string',
      progress: 'number',
      requestId: 'string',
      resultStatus: 'string',
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


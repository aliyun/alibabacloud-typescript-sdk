// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHcExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data entries that have been exported.
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
   * The time when the task was created.
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
   * The download link of the exported file.
   * 
   * @example
   * https://hc-export.oss-cn-shanghai.aliyuncs.com/export_hc/health_check_export_20221222_1671699255808.zip?Expires=1672304056&OSSAccessKeyId=****&Signature=****
   */
  link?: string;
  /**
   * @remarks
   * The export progress in percentage (%).
   * 
   * @example
   * 89
   */
  progress?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 3C2C94CF-ED08-50C0-BC72-C5029251****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * - **exporting**: The export is in progress.
   * 
   * - **success**: The export is successful.
   * 
   * @example
   * exporting
   */
  resultStatus?: string;
  /**
   * @remarks
   * The total number of data entries to be exported.
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


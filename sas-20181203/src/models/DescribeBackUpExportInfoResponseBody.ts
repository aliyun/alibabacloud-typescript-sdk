// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackUpExportInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of exported entries.
   * 
   * @example
   * 29
   */
  currentCount?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * suspicious_event_20221203
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the export task was created.
   * 
   * @example
   * 1671607025000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 273698***
   */
  id?: number;
  /**
   * @remarks
   * The URL at which you can download the archived information.
   * 
   * @example
   * http://xxx.oss-cn-xxx.aliyuncs.com/export/assetInstance_20221221_1671606250570.zip
   */
  link?: string;
  /**
   * @remarks
   * The error message that is returned when the export task fails.
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
   * 100
   */
  progress?: number;
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
  status?: string;
  /**
   * @remarks
   * The total number of entries in the file.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      link: 'Link',
      message: 'Message',
      progress: 'Progress',
      status: 'Status',
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
      message: 'string',
      progress: 'number',
      status: 'string',
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

export class DescribeBackUpExportInfoResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
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

export class DescribeBackUpExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeBackUpExportInfoResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeBackUpExportInfoResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackUpExportInfoResponseBodyData },
      pageInfo: DescribeBackUpExportInfoResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 13
   */
  currentCount?: number;
  /**
   * @example
   * success
   */
  exportStatus?: string;
  /**
   * @example
   * health_check_export_20******
   */
  fileName?: string;
  /**
   * @example
   * 991012
   */
  id?: number;
  /**
   * @example
   * http://www.aliyun.com******
   */
  link?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 61
   */
  progress?: number;
  /**
   * @example
   * AAC546A5-5EDC-5939-86A3-56DFAF******
   */
  requestId?: string;
  /**
   * @example
   * 28
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


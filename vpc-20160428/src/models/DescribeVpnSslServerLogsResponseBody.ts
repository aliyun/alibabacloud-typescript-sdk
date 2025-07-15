// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnSslServerLogsResponseBodyData extends $dara.Model {
  logs?: string[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnSslServerLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of log entries.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Log information list.
   */
  data?: DescribeVpnSslServerLogsResponseBodyData;
  /**
   * @remarks
   * Indicates whether the log is accurate. Valid values:
   * 
   * *   **true**: accurate
   * *   **false**: inaccurate
   * 
   * @example
   * true
   */
  isCompleted?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DEDAC5B1-9292-5BF7-BDDF-61BA58CFB2FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      isCompleted: 'IsCompleted',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: DescribeVpnSslServerLogsResponseBodyData,
      isCompleted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems extends $dara.Model {
  /**
   * @remarks
   * The log time. The time is displayed in the ISO 8601 standard in UTC. The seconds can contain a fractional part.
   * 
   * @example
   * 2026-01-15T14:13:50.830295892Z
   */
  logTime?: string;
  /**
   * @remarks
   * The log message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The specific time point of the monitoring metrics. The format is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765677660
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logTime: 'LogTime',
      message: 'Message',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTime: 'string',
      message: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskLogFilesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The SLS log information.
   */
  slsLogItems?: DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems[];
  static names(): { [key: string]: string } {
    return {
      slsLogItems: 'SlsLogItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsLogItems: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems },
    };
  }

  validate() {
    if(Array.isArray(this.slsLogItems)) {
      $dara.Model.validateArray(this.slsLogItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskLogFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The time is displayed in the ISO 8601 standard in the `YYYY-MM-DDTHH:mm:ssZ` format. The time is in UTC.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of logs.
   */
  items?: DescribeAIDBClusterTaskLogFilesResponseBodyItems;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The total number of entries that meet the query conditions. This parameter is optional and may not be returned by default.
   * 
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2026-01-15T14:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      items: DescribeAIDBClusterTaskLogFilesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


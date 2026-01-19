// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems extends $dara.Model {
  /**
   * @example
   * 2026-01-15T14:13:50.830295892Z
   */
  logTime?: string;
  /**
   * @example
   * test
   */
  message?: string;
  /**
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
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  items?: DescribeAIDBClusterTaskLogFilesResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
   */
  requestId?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The message of the detection result.
   * 
   * @example
   * There are a total of 10 tables with an excessive number of primary keys.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Excessive primary key fields
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * - NORMAL
   * - WARNING
   * - CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyItemsTable extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data is skewed in the table.
   * 
   * @example
   * true
   */
  isIncline?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * ff
   */
  name?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 2565
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adm_analyze
   */
  schema?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 2416527
   */
  size?: string;
  /**
   * @remarks
   * The percentage of the table size.
   * 
   * @example
   * 89
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The total data size of the table.
   * 
   * @example
   * 65
   */
  totalSize?: number;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * executor
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isIncline: 'IsIncline',
      name: 'Name',
      rowCount: 'RowCount',
      schema: 'Schema',
      size: 'Size',
      spaceRatio: 'SpaceRatio',
      totalSize: 'TotalSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIncline: 'string',
      name: 'string',
      rowCount: 'number',
      schema: 'string',
      size: 'string',
      spaceRatio: 'number',
      totalSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The queried table.
   */
  table?: DescribeInclinedTablesResponseBodyItemsTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyItemsTable },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInclinedTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeInclinedTablesResponseBodyDetectionItems[];
  /**
   * @remarks
   * The queried tables.
   */
  items?: DescribeInclinedTablesResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionItems: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyDetectionItems },
      items: DescribeInclinedTablesResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


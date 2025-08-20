// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The message of the detection result.
   * 
   * @example
   * A shard skew is detected in a table.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Table skew
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result.
   * 
   * @example
   * NORMAL
   * WARNNING
   * CRITICAL
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
   * True
   */
  isIncline?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * admin_daily_own_statistic_record
   */
  name?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 1000
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * spark_test
   */
  schema?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 200
   */
  size?: number;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 0.4
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * >  The following formulas can be used to calculate the total data size:
   * 
   * *   Formula 1: Total data size = Hot data size + Cold data size.
   * *   Formula 2: Total data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 53687091200
   */
  totalSize?: number;
  /**
   * @remarks
   * The detection type of the table.
   * 
   * @example
   * Fact
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
      isIncline: 'boolean',
      name: 'string',
      rowCount: 'number',
      schema: 'string',
      size: 'number',
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
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
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
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The total number of pages.
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
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
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


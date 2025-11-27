// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization of the instance in percentage.
   * 
   * @example
   * 0.70
   */
  CPUUsage?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * DatabaseTest
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The disk usage of the instance in percentage.
   * 
   * @example
   * 14.56
   */
  diskUsage?: string;
  /**
   * @remarks
   * The IOPS usage of the instance in percentage.
   * 
   * @example
   * 0.15
   */
  IOPSUsage?: string;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 0.10
   */
  sessionUsage?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsage: 'CPUUsage',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      diskUsage: 'DiskUsage',
      IOPSUsage: 'IOPSUsage',
      sessionUsage: 'SessionUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsage: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      diskUsage: 'string',
      IOPSUsage: 'string',
      sessionUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceResponseBodyItems extends $dara.Model {
  DBInstancePerformance?: DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance[];
  static names(): { [key: string]: string } {
    return {
      DBInstancePerformance: 'DBInstancePerformance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstancePerformance: { 'type': 'array', 'itemType': DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstancePerformance)) {
      $dara.Model.validateArray(this.DBInstancePerformance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instance.
   */
  items?: DescribeDBInstancesByPerformanceResponseBodyItems;
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 28
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 23907437-79B9-411A-9EE6-75A8F0F1C619
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesByPerformanceResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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


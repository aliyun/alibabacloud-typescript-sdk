// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance extends $dara.Model {
  CPUUsage?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  diskUsage?: string;
  IOPSUsage?: string;
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
  items?: DescribeDBInstancesByPerformanceResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
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


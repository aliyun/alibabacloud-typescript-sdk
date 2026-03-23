// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime extends $dara.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  expireTime?: string;
  lockMode?: string;
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      expireTime: 'string',
      lockMode: 'string',
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponseBodyItems extends $dara.Model {
  DBInstanceExpireTime?: DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceExpireTime: 'DBInstanceExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceExpireTime: { 'type': 'array', 'itemType': DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceExpireTime)) {
      $dara.Model.validateArray(this.DBInstanceExpireTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponseBody extends $dara.Model {
  items?: DescribeDBInstancesByExpireTimeResponseBodyItems;
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
      items: DescribeDBInstancesByExpireTimeResponseBodyItems,
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


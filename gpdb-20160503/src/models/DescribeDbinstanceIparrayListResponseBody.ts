// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $dara.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBodyItems extends $dara.Model {
  DBInstanceIPArray?: DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArray: 'DBInstanceIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArray: { 'type': 'array', 'itemType': DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceIPArray)) {
      $dara.Model.validateArray(this.DBInstanceIPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBody extends $dara.Model {
  items?: DescribeDBInstanceIPArrayListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB7AA0BF-BE41-480E-A3DC-C97BF85A391B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstanceIPArrayListResponseBodyItems,
      requestId: 'string',
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


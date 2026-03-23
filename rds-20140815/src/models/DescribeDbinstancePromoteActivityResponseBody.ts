// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePromoteActivityResponseBody extends $dara.Model {
  aliUid?: string;
  bid?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  DBType?: string;
  isActivity?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBType: 'DBType',
      isActivity: 'IsActivity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBType: 'string',
      isActivity: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


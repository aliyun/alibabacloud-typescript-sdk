// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionCountRecordsResponseBodyAccessIpRecords extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 42.120.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBodyUserRecords extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectionCountRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried client IP addresses.
   */
  accessIpRecords?: DescribeConnectionCountRecordsResponseBodyAccessIpRecords[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1jj9xqft1po****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 562C7F89-FBE6-4A04-AAAA-7EBC25******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried database accounts.
   */
  userRecords?: DescribeConnectionCountRecordsResponseBodyUserRecords[];
  static names(): { [key: string]: string } {
    return {
      accessIpRecords: 'AccessIpRecords',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      userRecords: 'UserRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIpRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyAccessIpRecords },
      DBClusterId: 'string',
      requestId: 'string',
      userRecords: { 'type': 'array', 'itemType': DescribeConnectionCountRecordsResponseBodyUserRecords },
    };
  }

  validate() {
    if(Array.isArray(this.accessIpRecords)) {
      $dara.Model.validateArray(this.accessIpRecords);
    }
    if(Array.isArray(this.userRecords)) {
      $dara.Model.validateArray(this.userRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


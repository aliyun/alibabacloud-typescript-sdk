// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConnectionCountRecordsResponseBodyAccessIpRecords } from "./DescribeConnectionCountRecordsResponseBodyAccessIpRecords";
import { DescribeConnectionCountRecordsResponseBodyUserRecords } from "./DescribeConnectionCountRecordsResponseBodyUserRecords";


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


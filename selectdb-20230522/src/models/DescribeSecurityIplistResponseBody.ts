// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityIPListResponseBodyGroupItems } from "./DescribeSecurityIplistResponseBodyGroupItems";


export class DescribeSecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The details about each IP address whitelist returned.
   */
  groupItems?: DescribeSecurityIPListResponseBodyGroupItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CBE044D-4594-525D-AC65-E988553D853E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIPListResponseBodyGroupItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


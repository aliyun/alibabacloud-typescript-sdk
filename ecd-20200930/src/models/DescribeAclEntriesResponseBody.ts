// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAclEntriesResponseBodyAclEntries } from "./DescribeAclEntriesResponseBodyAclEntries";


export class DescribeAclEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL entries.
   */
  aclEntries?: DescribeAclEntriesResponseBodyAclEntries[];
  /**
   * @remarks
   * The token that is used to start the next query. If the value of this parameter is empty, all results are returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': DescribeAclEntriesResponseBodyAclEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


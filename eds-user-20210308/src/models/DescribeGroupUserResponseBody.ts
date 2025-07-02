// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupUserResponseBodyGroups } from "./DescribeGroupUserResponseBodyGroups";
import { DescribeGroupUserResponseBodyUsers } from "./DescribeGroupUserResponseBodyUsers";


export class DescribeGroupUserResponseBody extends $dara.Model {
  groups?: DescribeGroupUserResponseBodyGroups[];
  /**
   * @example
   * AA8D67CB-345D-5CDA-986E-FFAC7D0****
   */
  requestId?: string;
  users?: DescribeGroupUserResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeGroupUserResponseBodyGroups },
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeGroupUserResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


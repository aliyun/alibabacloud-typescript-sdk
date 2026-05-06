// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineUserCountResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  adAssignedUserCount?: number;
  /**
   * @example
   * 10
   */
  assignedUserCount?: number;
  /**
   * @example
   * 1
   */
  onlineUserCount?: number;
  /**
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  simpleAssignedUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      adAssignedUserCount: 'AdAssignedUserCount',
      assignedUserCount: 'AssignedUserCount',
      onlineUserCount: 'OnlineUserCount',
      requestId: 'RequestId',
      simpleAssignedUserCount: 'SimpleAssignedUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAssignedUserCount: 'number',
      assignedUserCount: 'number',
      onlineUserCount: 'number',
      requestId: 'string',
      simpleAssignedUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


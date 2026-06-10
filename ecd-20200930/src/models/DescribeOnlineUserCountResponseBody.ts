// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineUserCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of AD users who have been assigned a cloud desktop.
   * 
   * @example
   * 2
   */
  adAssignedUserCount?: number;
  /**
   * @remarks
   * The number of users who have been assigned a cloud desktop.
   * 
   * @example
   * 10
   */
  assignedUserCount?: number;
  /**
   * @remarks
   * The number of online users. Online users include convenience users and AD users.
   * 
   * @example
   * 1
   */
  onlineUserCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of convenience users who have been assigned a cloud desktop.
   * 
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


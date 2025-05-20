// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions that belong to the client IP address.
   * 
   * >  If the type of the command executed in the session is Query or Execute and the session in the transaction is not terminated, the session is active.
   * 
   * @example
   * 1
   */
  activeCount?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 47.100.XX.XX
   */
  key?: string;
  /**
   * @remarks
   * The IDs of the sessions that belong to the client IP address.
   */
  threadIdList?: number[];
  /**
   * @remarks
   * The total number of sessions that belong to the client IP address.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The database accounts to which the sessions belong.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threadIdList)) {
      $dara.Model.validateArray(this.threadIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


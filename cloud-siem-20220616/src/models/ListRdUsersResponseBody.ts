// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRdUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the account can be used to view the logs and alerts within the account.
   * 
   * @example
   * true
   */
  delegatedOrNot?: boolean;
  /**
   * @remarks
   * Indicates whether the account is added to the threat analysis feature for centralized management. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  joined?: boolean;
  /**
   * @remarks
   * The time when the account was added to the threat analysis feature.
   * 
   * @example
   * 2013-10-01 00:00:00
   */
  joinedTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      delegatedOrNot: 'DelegatedOrNot',
      joined: 'Joined',
      joinedTime: 'JoinedTime',
      mainUserId: 'MainUserId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedOrNot: 'boolean',
      joined: 'boolean',
      joinedTime: 'string',
      mainUserId: 'number',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListRdUsersResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRdUsersResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


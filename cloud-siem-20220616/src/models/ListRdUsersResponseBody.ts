// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRdUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the account is delegated to view its own resources.
   * 
   * @example
   * true
   */
  delegatedOrNot?: boolean;
  /**
   * @remarks
   * Specifies whether the account is managed by the multi-account management feature of Threat Analysis. Valid values:
   * - true: The account is managed.
   * - false: The account is not managed.
   * 
   * @example
   * true
   */
  joined?: boolean;
  /**
   * @remarks
   * The time when the account was added to management.
   * 
   * @example
   * 2013-10-01 00:00:00
   */
  joinedTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that purchased Threat Analysis.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID for Threat Analysis.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud account managed by Threat Analysis.
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
   * The response data.
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


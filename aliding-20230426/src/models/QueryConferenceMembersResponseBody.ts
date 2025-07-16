// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceMembersResponseBodyMemberModels extends $dara.Model {
  /**
   * @example
   * 6
   */
  attendStatus?: number;
  /**
   * @example
   * false
   */
  coHost?: boolean;
  /**
   * @example
   * 6323dxxxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 10000
   */
  duration?: number;
  /**
   * @example
   * false
   */
  host?: boolean;
  /**
   * @example
   * 1663293270000
   */
  joinTime?: number;
  /**
   * @example
   * 1663293280000
   */
  leaveTime?: number;
  /**
   * @example
   * true
   */
  outerOrgMember?: boolean;
  /**
   * @example
   * false
   */
  pstnJoin?: boolean;
  /**
   * @example
   * -12345
   */
  userId?: string;
  /**
   * @example
   * 小钉
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      attendStatus: 'AttendStatus',
      coHost: 'CoHost',
      conferenceId: 'ConferenceId',
      duration: 'Duration',
      host: 'Host',
      joinTime: 'JoinTime',
      leaveTime: 'LeaveTime',
      outerOrgMember: 'OuterOrgMember',
      pstnJoin: 'PstnJoin',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendStatus: 'number',
      coHost: 'boolean',
      conferenceId: 'string',
      duration: 'number',
      host: 'boolean',
      joinTime: 'number',
      leaveTime: 'number',
      outerOrgMember: 'boolean',
      pstnJoin: 'boolean',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConferenceMembersResponseBody extends $dara.Model {
  memberModels?: QueryConferenceMembersResponseBodyMemberModels[];
  /**
   * @example
   * 123000000
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      memberModels: 'memberModels',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberModels: { 'type': 'array', 'itemType': QueryConferenceMembersResponseBodyMemberModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberModels)) {
      $dara.Model.validateArray(this.memberModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


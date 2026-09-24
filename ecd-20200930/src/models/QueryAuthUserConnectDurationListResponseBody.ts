// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthUserConnectDurationListResponseBodyAuthUserConnectDurationList extends $dara.Model {
  /**
   * @remarks
   * The connection duration of the user, in seconds.
   * 
   * @example
   * 3600
   */
  connectDuration?: number;
  /**
   * @remarks
   * The end time of the connection, as a UNIX timestamp in milliseconds. This parameter is returned only when statistics are collected by individual session details (StatisticType=SingleSession).
   * 
   * @example
   * 1719208800000
   */
  connectEndTime?: string;
  /**
   * @remarks
   * The start time of the connection, as a UNIX timestamp in milliseconds. This parameter is returned only when statistics are collected by individual session details (StatisticType=SingleSession).
   * 
   * @example
   * 1719205200000
   */
  connectStartTime?: string;
  /**
   * @remarks
   * The remarks of the user. This parameter is returned only for convenience users when WithDetail is set to true.
   * 
   * @example
   * R&D department employee
   */
  description?: string;
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-gx2x1dhsmusr2****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * test-desktop
   */
  desktopName?: string;
  /**
   * @remarks
   * The type of the directory to which the user belongs. Valid values:
   * 
   * - 1: convenience account.
   * - 2: RAM account.
   * - 3: AD account.
   * - 4: personal edition.
   * 
   * @example
   * 3
   */
  directoryType?: number;
  /**
   * @remarks
   * The display name of the user. This parameter is returned only for AD users when WithDetail is set to true.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The new display name of the user. This parameter is returned only for AD users when WithDetail is set to true.
   * 
   * @example
   * Zhang San
   */
  displayNameNew?: string;
  /**
   * @remarks
   * The AD domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The nickname of the user. This parameter is returned only for convenience users when WithDetail is set to true.
   * 
   * @example
   * Xiao Zhang
   */
  nickName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user principal name (UPN). This parameter is returned only for AD users when WithDetail is set to true.
   * 
   * @example
   * alice@example.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      connectDuration: 'ConnectDuration',
      connectEndTime: 'ConnectEndTime',
      connectStartTime: 'ConnectStartTime',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      directoryType: 'DirectoryType',
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      domainName: 'DomainName',
      endUserId: 'EndUserId',
      nickName: 'NickName',
      regionId: 'RegionId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDuration: 'number',
      connectEndTime: 'string',
      connectStartTime: 'string',
      description: 'string',
      desktopId: 'string',
      desktopName: 'string',
      directoryType: 'number',
      displayName: 'string',
      displayNameNew: 'string',
      domainName: 'string',
      endUserId: 'string',
      nickName: 'string',
      regionId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuthUserConnectDurationListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection duration list of authorized users.
   */
  authUserConnectDurationList?: QueryAuthUserConnectDurationListResponseBodyAuthUserConnectDurationList[];
  /**
   * @remarks
   * The pagination token for the next page. This parameter is returned when the results span multiple pages. Pass this value as the NextToken in the next request to retrieve the next page. This parameter is returned only when statistics are collected by individual session details.
   * 
   * @example
   * d129c6c0e8c04c8a9f0e2b7c1a3f5e6d
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F0F0F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the specified conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authUserConnectDurationList: 'AuthUserConnectDurationList',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authUserConnectDurationList: { 'type': 'array', 'itemType': QueryAuthUserConnectDurationListResponseBodyAuthUserConnectDurationList },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authUserConnectDurationList)) {
      $dara.Model.validateArray(this.authUserConnectDurationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


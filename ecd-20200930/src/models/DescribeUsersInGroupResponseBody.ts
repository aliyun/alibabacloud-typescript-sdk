// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersInGroupResponseBodyEndUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The external name.
   * 
   * @example
   * nameDemo
   */
  externalName?: string;
  /**
   * @remarks
   * The employee ID.
   * 
   * @example
   * 123
   */
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * value
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 123
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * key
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property type.
   * 
   * Valid values:
   * 
   * *   1: system property
   * *   2: custom property
   * 
   * @example
   * 1
   */
  propertyType?: number;
  /**
   * @remarks
   * Details about property values.
   */
  propertyValues?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123
   */
  userId?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * nameDemo
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsers extends $dara.Model {
  /**
   * @remarks
   * The connection status.
   * 
   * Valid values:
   * 
   * *   0: disconnected
   * *   1: connecting
   * 
   * @example
   * 1
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  /**
   * @remarks
   * The display name of the enterprise AD account.
   * 
   * @example
   * alice
   */
  displayName?: string;
  displayNameNew?: string;
  /**
   * @remarks
   * The email address of the authorized user.
   * 
   * @example
   * alice@example.com
   */
  endUserEmail?: string;
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The username of the authorized user.
   * 
   * @example
   * alice
   */
  endUserName?: string;
  /**
   * @remarks
   * The mobile number of the authorized user.
   * 
   * @example
   * 1381111****
   */
  endUserPhone?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Note
   */
  endUserRemark?: string;
  /**
   * @remarks
   * The user account type.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience account
   * *   AD_CONNECTOR: enterprise Active Directory (AD) account
   * 
   * @example
   * SIMPLE
   */
  endUserType?: string;
  /**
   * @remarks
   * The appended information.
   */
  externalInfo?: DescribeUsersInGroupResponseBodyEndUsersExternalInfo;
  /**
   * @remarks
   * The ID of the cloud computer that is used by the user.
   * 
   * @example
   * ud-i896ze8hazpvl****
   */
  userDesktopId?: string;
  userPrincipalName?: string;
  /**
   * @remarks
   * Details about the seats of users.
   */
  userSetPropertiesModels?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      endUserEmail: 'EndUserEmail',
      endUserId: 'EndUserId',
      endUserName: 'EndUserName',
      endUserPhone: 'EndUserPhone',
      endUserRemark: 'EndUserRemark',
      endUserType: 'EndUserType',
      externalInfo: 'ExternalInfo',
      userDesktopId: 'UserDesktopId',
      userPrincipalName: 'UserPrincipalName',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      displayName: 'string',
      displayNameNew: 'string',
      endUserEmail: 'string',
      endUserId: 'string',
      endUserName: 'string',
      endUserPhone: 'string',
      endUserRemark: 'string',
      endUserType: 'string',
      externalInfo: DescribeUsersInGroupResponseBodyEndUsersExternalInfo,
      userDesktopId: 'string',
      userPrincipalName: 'string',
      userSetPropertiesModels: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels },
    };
  }

  validate() {
    if(this.externalInfo && typeof (this.externalInfo as any).validate === 'function') {
      (this.externalInfo as any).validate();
    }
    if(Array.isArray(this.userSetPropertiesModels)) {
      $dara.Model.validateArray(this.userSetPropertiesModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized users.
   */
  endUsers?: DescribeUsersInGroupResponseBodyEndUsers[];
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of authorized users that are connected to cloud computers of the cloud computer share.
   * 
   * @example
   * 0
   */
  onlineUsersCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  userGroupName?: string;
  userOuPath?: string;
  /**
   * @remarks
   * The total number of authorized users of the cloud computer share.
   * 
   * @example
   * 1
   */
  usersCount?: number;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      nextToken: 'NextToken',
      onlineUsersCount: 'OnlineUsersCount',
      requestId: 'RequestId',
      userGroupName: 'UserGroupName',
      userOuPath: 'UserOuPath',
      usersCount: 'UsersCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsers },
      nextToken: 'string',
      onlineUsersCount: 'number',
      requestId: 'string',
      userGroupName: 'string',
      userOuPath: 'string',
      usersCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUsers)) {
      $dara.Model.validateArray(this.endUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


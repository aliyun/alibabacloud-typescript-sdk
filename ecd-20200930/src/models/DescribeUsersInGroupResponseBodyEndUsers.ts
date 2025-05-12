// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsersInGroupResponseBodyEndUsersExternalInfo } from "./DescribeUsersInGroupResponseBodyEndUsersExternalInfo";
import { DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels } from "./DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels";


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


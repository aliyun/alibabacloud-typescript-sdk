// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxyAccessesResponseBodyProxyAccessList extends $dara.Model {
  /**
   * @remarks
   * The username of the database account that is authorized to access the database instance by using the secure access proxy feature.
   * 
   * @example
   * MXPL8HalI22m****
   */
  accessId?: string;
  /**
   * @remarks
   * The time when the user is authorized to access the database instance by using the secure access proxy feature.
   * 
   * @example
   * 2021-03-31 10:34:18
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The username of the independent database account.
   * 
   * @example
   * ****
   */
  indepAccount?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * 164****
   */
  instanceId?: number;
  /**
   * @remarks
   * The method that is used to authorize the user to access the database instance by using the secure access proxy feature. Valid values: 
   * 
   * - **Authorization by the Alibaba Cloud Account ()**: The information in the parentheses () indicates the user ID (UID) of the Alibaba Cloud account.
   * - **Authorization by submitting the ticket ()**:The information in the parentheses () indicates the number of the ticket that the user submits to apply for permissions.
   * 
   * @example
   * Authorization by the Alibaba Cloud Account(29490401597700****)
   */
  originInfo?: string;
  /**
   * @remarks
   * The ID that DMS generates after the user is authorized to access the database instance by using the secure access proxy feature. The ID is unique in DMS.
   * 
   * @example
   * ****
   */
  proxyAccessId?: number;
  /**
   * @remarks
   * The ID of the secure access proxy.
   * 
   * @example
   * 47
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 26****
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user
   */
  userName?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 25936669186260****
   */
  userUid?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      gmtCreate: 'GmtCreate',
      indepAccount: 'IndepAccount',
      instanceId: 'InstanceId',
      originInfo: 'OriginInfo',
      proxyAccessId: 'ProxyAccessId',
      proxyId: 'ProxyId',
      userId: 'UserId',
      userName: 'UserName',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      gmtCreate: 'string',
      indepAccount: 'string',
      instanceId: 'number',
      originInfo: 'string',
      proxyAccessId: 'number',
      proxyId: 'number',
      userId: 'number',
      userName: 'string',
      userUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


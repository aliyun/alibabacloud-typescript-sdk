// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the permissions were granted.
   * 
   * @example
   * 2019-12-12 00:00:00
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * @example
   * 2020-12-12 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * xxx
   */
  extraData?: string;
  /**
   * @remarks
   * The user who grants the permissions.
   * 
   * @example
   * xxx authorization
   */
  originFrom?: string;
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   QUERY: the query permissions
   * *   EXPORT: the export permissions
   * *   CORRECT: the change permissions
   * 
   * @example
   * QUERY
   */
  permType?: string;
  /**
   * @remarks
   * The ID of the authorization record.
   * 
   * @example
   * 758****
   */
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


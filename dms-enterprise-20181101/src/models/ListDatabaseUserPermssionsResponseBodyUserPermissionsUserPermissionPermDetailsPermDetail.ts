// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the permission was created.
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
   * The extra information. This parameter is reserved.
   * 
   * @example
   * DEFAULT
   */
  extraData?: string;
  /**
   * @remarks
   * The description of the entity that authorizes the permission.
   * 
   * @example
   * xxx grant
   */
  originFrom?: string;
  /**
   * @remarks
   * The type of the permission. Valid values:
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
   * 13434
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


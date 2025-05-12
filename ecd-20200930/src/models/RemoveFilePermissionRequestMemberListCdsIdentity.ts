// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The user ID or group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 249dsfseee643h33g3dv****
   */
  id?: string;
  /**
   * @remarks
   * The object type.
   * 
   * Valid values:
   * 
   * *   IT_Group
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     group
   * 
   *     <!-- -->
   * 
   * *   IT_User
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     user
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * IT_User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


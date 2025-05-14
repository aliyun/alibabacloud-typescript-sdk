// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDriveSpacesResponseBodySpaces extends $dara.Model {
  /**
   * @example
   * 2016-02-28T10:47:08Z
   */
  createTime?: string;
  /**
   * @example
   * 2016-02-28T10:47:08Z
   */
  modifyTime?: string;
  /**
   * @example
   * acl
   */
  permissionMode?: string;
  /**
   * @example
   * 2147483648
   */
  quota?: number;
  /**
   * @example
   * 123456789
   */
  spaceId?: string;
  spaceName?: string;
  /**
   * @example
   * org
   */
  spaceType?: string;
  /**
   * @example
   * 640445953
   */
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      permissionMode: 'PermissionMode',
      quota: 'Quota',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
      spaceType: 'SpaceType',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      permissionMode: 'string',
      quota: 'number',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
      usedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


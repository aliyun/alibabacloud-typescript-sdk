// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVisibilityModelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The IDs of the leaf node menus in the data portal.
   * 
   * - You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of 100 IDs can be modified at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * Specifies whether the menus are visible only to authorized users. Valid values:
   * 
   * - true: The menus are visible only to authorized users.
   * - false: The menus are visible to all users.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      showOnlyWithAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


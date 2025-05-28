// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPortalMenuAuthorizationResponseBodyResultReceivers } from "./ListPortalMenuAuthorizationResponseBodyResultReceivers";


export class ListPortalMenuAuthorizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * @example
   * 54kqgoa****
   */
  menuId?: string;
  /**
   * @remarks
   * The details of the object to which the menu is authorized.
   */
  receivers?: ListPortalMenuAuthorizationResponseBodyResultReceivers[];
  /**
   * @remarks
   * Whether only authorization is visible. Valid values:
   * 
   * *   true: Only the authorization is visible.
   * *   false: Both are visible.
   * 
   * @example
   * true
   */
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuId: 'MenuId',
      receivers: 'Receivers',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuId: 'string',
      receivers: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResultReceivers },
      showOnlyWithAccess: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


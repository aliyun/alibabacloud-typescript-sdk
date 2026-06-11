// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalMenuAuthorizationResponseBodyResultReceivers extends $dara.Model {
  /**
   * @remarks
   * The authorization type for the menu. Valid values:
   * 
   * - 1: View
   * 
   * - 11: Edit
   * 
   * - 3: Export and view
   * 
   * - 10: Manage data entry
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  authPointsValue?: number;
  /**
   * @remarks
   * The ID of the authorization object.
   * 
   * > - If the authorization object is an organization, this ID is the organization ID.
   * >
   * > - If the authorization object is a workspace, this ID is the workspace ID.
   * 
   * @example
   * 121344444790****
   */
  receiverId?: string;
  /**
   * @remarks
   * The type of the authorization object. Valid values:
   * 
   * - 0: User
   * 
   * - 1: User group
   * 
   * - 2: Organization
   * 
   * - 3: Workspace
   * 
   * @example
   * 0
   */
  receiverType?: number;
  static names(): { [key: string]: string } {
    return {
      authPointsValue: 'AuthPointsValue',
      receiverId: 'ReceiverId',
      receiverType: 'ReceiverType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPointsValue: 'number',
      receiverId: 'string',
      receiverType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the leaf-node menu in the BI portal.
   * 
   * @example
   * 54kqgoa****
   */
  menuId?: string;
  /**
   * @remarks
   * The details of the authorization objects for the menu.
   */
  receivers?: ListPortalMenuAuthorizationResponseBodyResultReceivers[];
  /**
   * @remarks
   * Indicates whether the menu is visible only to authorized users. Valid values:
   * 
   * - true: The menu is visible only to authorized users.
   * 
   * - false: The menu is visible to all users.
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

export class ListPortalMenuAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * A list of authorization details for the BI portal menus.
   */
  result?: ListPortalMenuAuthorizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


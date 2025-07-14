// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalMenuAuthorizationResponseBodyResultReceivers extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization object.
   * 
   * @example
   * 121344444790****
   */
  receiverId?: string;
  /**
   * @remarks
   * The type of the authorization object. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * 
   * @example
   * 0
   */
  receiverType?: number;
  static names(): { [key: string]: string } {
    return {
      receiverId: 'ReceiverId',
      receiverType: 'ReceiverType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListPortalMenuAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The list of authorization details of the portal menu.
   */
  result?: ListPortalMenuAuthorizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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


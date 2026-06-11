// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhitePortalMenuResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The authorization type for the menu. Valid values:
   * 
   * - 1: View
   * 
   * - 3: Export and view
   * 
   * @example
   * 1
   */
  authPointsValue?: number;
  /**
   * @remarks
   * The ID of the authorization object. If the authorization is at the workspace or organization level, this parameter returns the workspace ID or organization ID.
   * 
   * @example
   * 8a4***********1e769
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
   * - 3: Workspace or organization level
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

export class ListWhitePortalMenuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC4E1**********0DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist.
   */
  result?: ListWhitePortalMenuResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListWhitePortalMenuResponseBodyResult },
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


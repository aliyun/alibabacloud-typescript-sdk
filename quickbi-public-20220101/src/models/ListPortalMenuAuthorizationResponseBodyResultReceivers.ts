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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhitePortalMenuResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  authPointsValue?: number;
  /**
   * @example
   * 8a4***********1e769
   */
  receiverId?: string;
  /**
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
   * @example
   * DC4E1**********0DF67E2C3
   */
  requestId?: string;
  result?: ListWhitePortalMenuResponseBodyResult[];
  /**
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


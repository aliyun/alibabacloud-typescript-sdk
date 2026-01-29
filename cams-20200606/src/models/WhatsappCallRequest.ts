// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhatsappCallRequestSession extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  sdp?: string;
  /**
   * @example
   * 示例值
   */
  sdpType?: string;
  static names(): { [key: string]: string } {
    return {
      sdp: 'Sdp',
      sdpType: 'SdpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdp: 'string',
      sdpType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WhatsappCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  businessNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  callAction?: string;
  /**
   * @example
   * 示例值示例值
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  session?: WhatsappCallRequestSession;
  /**
   * @example
   * 示例值示例值
   */
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      callAction: 'CallAction',
      callId: 'CallId',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      session: 'Session',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      callAction: 'string',
      callId: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      session: WhatsappCallRequestSession,
      userNumber: 'string',
    };
  }

  validate() {
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


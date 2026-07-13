// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * {********}
   */
  messageContent?: string;
  /**
   * @remarks
   * Message ID.
   * 
   * @example
   * m-123***7890
   */
  messageId?: string;
  /**
   * @remarks
   * Message level.
   * 
   * @example
   * WARNING
   */
  messageLevel?: string;
  /**
   * @remarks
   * Message name.
   * 
   * @example
   * MyMessage
   */
  messageName?: string;
  /**
   * @remarks
   * Message source ID.
   * 
   * @example
   * p-123***7890
   */
  messageSourceId?: string;
  /**
   * @remarks
   * Message source region ID.
   * 
   * @example
   * cn-hangzhou
   */
  messageSourceRegionId?: string;
  /**
   * @remarks
   * Message source type.
   * 
   * @example
   * PROTECTION_POLICY
   */
  messageSourceType?: string;
  /**
   * @remarks
   * Message time.
   * 
   * @example
   * 1740019609
   */
  messageTime?: number;
  /**
   * @remarks
   * Message type.
   * 
   * @example
   * SUB_PROTECTION_POLICY_MODIFIED
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      messageContent: 'MessageContent',
      messageId: 'MessageId',
      messageLevel: 'MessageLevel',
      messageName: 'MessageName',
      messageSourceId: 'MessageSourceId',
      messageSourceRegionId: 'MessageSourceRegionId',
      messageSourceType: 'MessageSourceType',
      messageTime: 'MessageTime',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageContent: 'string',
      messageId: 'string',
      messageLevel: 'string',
      messageName: 'string',
      messageSourceId: 'string',
      messageSourceRegionId: 'string',
      messageSourceType: 'string',
      messageTime: 'number',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMessageResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 8724BC18-904D-5A0D-BFF4-F0554F0037E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMessageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


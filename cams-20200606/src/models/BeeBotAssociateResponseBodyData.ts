// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotAssociateResponseBodyDataAssociate } from "./BeeBotAssociateResponseBodyDataAssociate";


export class BeeBotAssociateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of associated recommendations.
   */
  associate?: BeeBotAssociateResponseBodyDataAssociate[];
  /**
   * @remarks
   * The ID of the response message.
   * 
   * @example
   * 1eb47d7a1706429081e90c83c62c2f00
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * 93f11165a2a24289a6f869760e8cb3f3
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      associate: 'Associate',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associate: { 'type': 'array', 'itemType': BeeBotAssociateResponseBodyDataAssociate },
      messageId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associate)) {
      $dara.Model.validateArray(this.associate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


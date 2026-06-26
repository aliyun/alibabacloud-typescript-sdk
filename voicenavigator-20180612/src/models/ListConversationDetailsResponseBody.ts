// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationDetailsResponseBodyConversationDetails extends $dara.Model {
  /**
   * @remarks
   * The action performed during the turn.
   * 
   * @example
   * Dialogue
   */
  action?: string;
  /**
   * @remarks
   * The action parameters.
   * 
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1582266750353
   */
  createTime?: number;
  /**
   * @remarks
   * The sequence ID of the conversational turn.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  sequenceId?: string;
  /**
   * @remarks
   * The speaker. Valid values: `customer` and `chatbot`.
   * 
   * @example
   * Chatbot
   */
  speaker?: string;
  /**
   * @remarks
   * The speaker\\"s utterance.
   * 
   * @example
   * 你好
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      conversationId: 'ConversationId',
      createTime: 'CreateTime',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      conversationId: 'string',
      createTime: 'number',
      sequenceId: 'string',
      speaker: 'string',
      utterance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of conversation details.
   */
  conversationDetails?: ListConversationDetailsResponseBodyConversationDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationDetails: 'ConversationDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationDetails: { 'type': 'array', 'itemType': ListConversationDetailsResponseBodyConversationDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationDetails)) {
      $dara.Model.validateArray(this.conversationDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList extends $dara.Model {
  format?: string;
  id?: string;
  name?: string;
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      name: 'string',
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentDialoguesResponseBodyDialogues extends $dara.Model {
  attachedFileList?: ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList[];
  /**
   * @remarks
   * The unique ID of the dialog.
   * 
   * @example
   * 19de81b3b3d94abda22****
   */
  dialogueId?: string;
  extend?: string;
  nodeId?: string;
  /**
   * @remarks
   * The speaker. Valid values: 
   * 
   * - user
   * - agent
   * 
   * @example
   * user
   */
  producer?: string;
  /**
   * @remarks
   * The reasoning trace.
   * 
   * @example
   * I\\"m thinking
   */
  reasoningText?: string;
  /**
   * @remarks
   * The ID of the conversational turn.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  roundId?: string;
  /**
   * @remarks
   * The source of the message. Valid values:
   * 
   * chat: messaging conversations.
   * 
   * call: voice calls.
   * 
   * @example
   * chat
   */
  source?: string;
  /**
   * @remarks
   * The specific content.
   * 
   * @example
   * Hello
   */
  text?: string;
  /**
   * @remarks
   * The UNIX timestamp, measured in milliseconds, which indicates the time when the message was generated.
   * 
   * @example
   * 1734511087000
   */
  time?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * Voice calls:
   * 
   * 1.  greeting: the welcome message.
   * 2.  normal: the voice response.
   * 3.  speech: the proactive message.
   * 
   * Messaging conversations:
   * 
   * 1.  normal: the text reply.
   * 2.  announcement: the proactive text message.
   * 3.  custom: the custom message.
   * 
   * @example
   * announcement
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachedFileList: 'AttachedFileList',
      dialogueId: 'DialogueId',
      extend: 'Extend',
      nodeId: 'NodeId',
      producer: 'Producer',
      reasoningText: 'ReasoningText',
      roundId: 'RoundId',
      source: 'Source',
      text: 'Text',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedFileList: { 'type': 'array', 'itemType': ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList },
      dialogueId: 'string',
      extend: 'string',
      nodeId: 'string',
      producer: 'string',
      reasoningText: 'string',
      roundId: 'string',
      source: 'string',
      text: 'string',
      time: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachedFileList)) {
      $dara.Model.validateArray(this.attachedFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentDialoguesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dialog records.
   */
  dialogues?: ListAIAgentDialoguesResponseBodyDialogues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B117AF5-***************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogues: 'Dialogues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogues: { 'type': 'array', 'itemType': ListAIAgentDialoguesResponseBodyDialogues },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


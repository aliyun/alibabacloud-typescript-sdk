// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList extends $dara.Model {
  /**
   * @remarks
   * The format of the attachment, such as mp3, wav, or pdf.
   * 
   * @example
   * mp3
   */
  format?: string;
  /**
   * @remarks
   * The unique identifier of the attachment.
   * 
   * @example
   * 7B117AF5-***************
   */
  id?: string;
  /**
   * @remarks
   * The file name of the attachment.
   * 
   * @example
   * MusicDemix
   */
  name?: string;
  /**
   * @remarks
   * The attachment type, represented by a numeric value. The meaning of this value is defined by your business logic.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The URL of the attachment.
   * 
   * @example
   * https://media.w3.org/2010/05/sintel/trailer.mp3
   */
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
  /**
   * @remarks
   * A list of file attachments referenced in the dialogue.
   */
  attachedFileList?: ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList[];
  /**
   * @remarks
   * The unique ID of the dialogue.
   * 
   * @example
   * 19de81b3b3d94abda22****
   */
  dialogueId?: string;
  /**
   * @remarks
   * A JSON-formatted string for extended information. Use this field to store custom data, such as sentiment labels or intent recognition results.
   * 
   * @example
   * {\\"addTransferLock\\":true}
   */
  extend?: string;
  /**
   * @remarks
   * The ID of the workflow node that generated the dialogue entry, which you can use for tracing.
   * 
   * @example
   * e01-cn-to345ikn62o
   */
  nodeId?: string;
  /**
   * @remarks
   * The producer of this message.
   * 
   * - user: A message from the user.
   * 
   * - agent: A message from the agent.
   * 
   * @example
   * user
   */
  producer?: string;
  /**
   * @remarks
   * The agent\\"s reasoning text, which can reveal its thought process.
   * 
   * @example
   * 我在思考
   */
  reasoningText?: string;
  /**
   * @remarks
   * The ID of the dialogue round.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  roundId?: string;
  /**
   * @remarks
   * The source channel of the message. Valid values:
   * 
   * chat: The message is from a text chat.
   * 
   * call: The message is from a voice call.
   * 
   * @example
   * chat
   */
  source?: string;
  /**
   * @remarks
   * The text content of the dialogue entry.
   * 
   * @example
   * Hello
   */
  text?: string;
  /**
   * @remarks
   * The Unix timestamp (in milliseconds) when the dialogue entry was created.
   * 
   * @example
   * 1734511087000
   */
  time?: number;
  /**
   * @remarks
   * The type of the message. Valid values include:
   * 
   * For a call:
   * 
   * 1. greeting: A welcome message.
   * 
   * 2. normal: A standard voice response.
   * 
   * 3. speech: A proactive voice broadcast.
   * 
   * For a chat:
   * 
   * 1. normal: A standard text response.
   * 
   * 2. announcement: A proactive text push.
   * 
   * 3. custom: A custom message.
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
   * A list of dialogues.
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


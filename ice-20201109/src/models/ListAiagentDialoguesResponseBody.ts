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
   * @example
   * 19de81b3b3d94abda22****
   */
  dialogueId?: string;
  extend?: string;
  nodeId?: string;
  /**
   * @example
   * user
   */
  producer?: string;
  reasoningText?: string;
  /**
   * @example
   * f27f9b9be28642a88e18****
   */
  roundId?: string;
  source?: string;
  text?: string;
  /**
   * @example
   * 1734511087000
   */
  time?: number;
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
  dialogues?: ListAIAgentDialoguesResponseBodyDialogues[];
  /**
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


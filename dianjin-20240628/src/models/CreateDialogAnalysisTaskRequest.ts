// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogAnalysisTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * The content of the dialogue.
   * 
   * This parameter is required.
   * 
   * @example
   * 您好，我是2001，很高兴为您服务！
   */
  content?: string;
  /**
   * @remarks
   * The role.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogAnalysisTaskRequestConversationList extends $dara.Model {
  /**
   * @remarks
   * A list of dialogues.
   * 
   * This parameter is required.
   */
  dialogueList?: CreateDialogAnalysisTaskRequestConversationListDialogueList[];
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': CreateDialogAnalysisTaskRequestConversationListDialogueList },
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A list of analysis nodes. If you leave this parameter empty, all nodes are analyzed. You can specify one or more nodes.
   */
  analysisNodes?: string[];
  /**
   * @remarks
   * The session content. You can specify multiple sessions.
   * 
   * This parameter is required.
   */
  conversationList?: CreateDialogAnalysisTaskRequestConversationList[];
  /**
   * @remarks
   * The metadata. This includes business-related properties that are used during session analysis. The business system passes these properties in real time when it initiates the analysis task.
   * 
   * ```
   * {
   *   "labels": "XXX",  // Tags
   *   "summaryConstraints": "XXX",   // Summary dimensions
   *   "sopInfo": "XXX"  // SOP information
   * }
   * ```
   * 
   * @example
   * {
   * "labels": "XXX",
   * "summaryConstraints": "XXX",
   * "sopInfo": "XXX"
   * }
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * The session scenario code, which is associated with the session analysis configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * common
   */
  playCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisNodes: 'analysisNodes',
      conversationList: 'conversationList',
      metaData: 'metaData',
      playCode: 'playCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisNodes: { 'type': 'array', 'itemType': 'string' },
      conversationList: { 'type': 'array', 'itemType': CreateDialogAnalysisTaskRequestConversationList },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      playCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisNodes)) {
      $dara.Model.validateArray(this.analysisNodes);
    }
    if(Array.isArray(this.conversationList)) {
      $dara.Model.validateArray(this.conversationList);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


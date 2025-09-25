// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogAnalysisTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
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
  analysisNodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  conversationList?: CreateDialogAnalysisTaskRequestConversationList[];
  /**
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
   * This parameter is required.
   * 
   * @example
   * common
   */
  playCode?: string;
  /**
   * @remarks
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


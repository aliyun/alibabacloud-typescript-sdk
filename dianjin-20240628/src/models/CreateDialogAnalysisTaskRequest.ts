// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDialogAnalysisTaskRequestConversationList } from "./CreateDialogAnalysisTaskRequestConversationList";


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


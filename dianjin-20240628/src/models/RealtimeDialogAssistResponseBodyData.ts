// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RealtimeDialogAssistResponseBodyDataAssistScripts } from "./RealtimeDialogAssistResponseBodyDataAssistScripts";
import { RealtimeDialogAssistResponseBodyDataAssistSop } from "./RealtimeDialogAssistResponseBodyDataAssistSop";
import { RealtimeDialogAssistResponseBodyDataConversationModel } from "./RealtimeDialogAssistResponseBodyDataConversationModel";


export class RealtimeDialogAssistResponseBodyData extends $dara.Model {
  analysisProcess?: string;
  assistScripts?: RealtimeDialogAssistResponseBodyDataAssistScripts[];
  assistSop?: RealtimeDialogAssistResponseBodyDataAssistSop[];
  conversationModel?: RealtimeDialogAssistResponseBodyDataConversationModel[];
  /**
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @example
   * 1915593248420413441
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      assistScripts: 'assistScripts',
      assistSop: 'assistSop',
      conversationModel: 'conversationModel',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      assistScripts: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataAssistScripts },
      assistSop: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataAssistSop },
      conversationModel: { 'type': 'array', 'itemType': RealtimeDialogAssistResponseBodyDataConversationModel },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assistScripts)) {
      $dara.Model.validateArray(this.assistScripts);
    }
    if(Array.isArray(this.assistSop)) {
      $dara.Model.validateArray(this.assistSop);
    }
    if(Array.isArray(this.conversationModel)) {
      $dara.Model.validateArray(this.conversationModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


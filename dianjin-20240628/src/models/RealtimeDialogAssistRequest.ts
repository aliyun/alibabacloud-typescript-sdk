// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RealtimeDialogAssistRequestConversationModel } from "./RealtimeDialogAssistRequestConversationModel";


export class RealtimeDialogAssistRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dialogAssist
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversationModel?: RealtimeDialogAssistRequestConversationModel[];
  /**
   * @example
   * 0
   */
  dialogMemoryTurns?: number;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @remarks
   * metaData
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1915593248420413441
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversationModel: 'conversationModel',
      dialogMemoryTurns: 'dialogMemoryTurns',
      hangUpDialog: 'hangUpDialog',
      metaData: 'metaData',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversationModel: { 'type': 'array', 'itemType': RealtimeDialogAssistRequestConversationModel },
      dialogMemoryTurns: 'number',
      hangUpDialog: 'boolean',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationModel)) {
      $dara.Model.validateArray(this.conversationModel);
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


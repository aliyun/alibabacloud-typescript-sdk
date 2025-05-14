// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RealTimeDialogRequestConversationModel } from "./RealTimeDialogRequestConversationModel";


export class RealTimeDialogRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @example
   * mixIntentChat
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversationModel?: RealTimeDialogRequestConversationModel[];
  /**
   * @example
   * 3
   */
  dialogMemoryTurns?: number;
  metaData?: { [key: string]: any };
  /**
   * @example
   * common
   */
  opType?: string;
  /**
   * @example
   * false
   */
  recommend?: boolean;
  scriptContentPlayed?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  userVad?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversationModel: 'conversationModel',
      dialogMemoryTurns: 'dialogMemoryTurns',
      metaData: 'metaData',
      opType: 'opType',
      recommend: 'recommend',
      scriptContentPlayed: 'scriptContentPlayed',
      sessionId: 'sessionId',
      stream: 'stream',
      userVad: 'userVad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversationModel: { 'type': 'array', 'itemType': RealTimeDialogRequestConversationModel },
      dialogMemoryTurns: 'number',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      opType: 'string',
      recommend: 'boolean',
      scriptContentPlayed: 'string',
      sessionId: 'string',
      stream: 'boolean',
      userVad: 'boolean',
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


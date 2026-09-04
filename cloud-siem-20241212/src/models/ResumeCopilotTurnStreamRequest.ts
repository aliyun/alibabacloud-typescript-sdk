// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeCopilotTurnStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID. This parameter is required for the second and subsequent turns in a multi-turn conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The native run cursor mapping.
   * 
   * This parameter is required.
   */
  cursorByRun?: { [key: string]: number };
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. You need to select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The asset belongs to the Chinese mainland and China (Hong Kong).
   * - ap-southeast-1: The asset belongs to a region outside the Chinese mainland.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 550e8400e29b41d4a71644665544****
   */
  traceId?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dc18b894-19a3-45ee-8768-a59478e0****
   */
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      cursorByRun: 'CursorByRun',
      lang: 'Lang',
      regionId: 'RegionId',
      traceId: 'TraceId',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      cursorByRun: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      lang: 'string',
      regionId: 'string',
      traceId: 'string',
      turnId: 'string',
    };
  }

  validate() {
    if(this.cursorByRun) {
      $dara.Model.validateMap(this.cursorByRun);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


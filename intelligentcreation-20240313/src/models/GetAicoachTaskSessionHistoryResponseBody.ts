// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachTaskSessionHistoryResponseBodyConversationList } from "./GetAicoachTaskSessionHistoryResponseBodyConversationList";


export class GetAICoachTaskSessionHistoryResponseBody extends $dara.Model {
  conversationList?: GetAICoachTaskSessionHistoryResponseBodyConversationList[];
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 2024-11-08 09:33:21
   */
  endTime?: string;
  pauseDuration?: number;
  /**
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  scriptName?: string;
  /**
   * @example
   * 2024-08-21 05:00:01
   */
  startTime?: string;
  status?: string;
  total?: number;
  /**
   * @example
   * 1579404690269235
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      duration: 'duration',
      endTime: 'endTime',
      pauseDuration: 'pauseDuration',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      total: 'total',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: { 'type': 'array', 'itemType': GetAICoachTaskSessionHistoryResponseBodyConversationList },
      duration: 'number',
      endTime: 'string',
      pauseDuration: 'number',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
      total: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationList)) {
      $dara.Model.validateArray(this.conversationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


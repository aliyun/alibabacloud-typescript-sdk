// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTongyiConversationLogsResponseBodySessionFlowDebugInfo extends $dara.Model {
  apiParams?: { [key: string]: any };
  slotParams?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiParams: 'ApiParams',
      slotParams: 'SlotParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      slotParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.apiParams) {
      $dara.Model.validateMap(this.apiParams);
    }
    if(this.slotParams) {
      $dara.Model.validateMap(this.slotParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTongyiConversationLogsResponseBody extends $dara.Model {
  /**
   * @example
   * 66
   */
  costTime?: string;
  datas?: { [key: string]: any }[];
  /**
   * @example
   * 28805A7C-D695-548C-A31B-67E52C2C274F
   */
  requestId?: string;
  /**
   * **if can be null:**
   * true
   */
  sessionFlowDebugInfo?: ListTongyiConversationLogsResponseBodySessionFlowDebugInfo;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
      sessionFlowDebugInfo: 'SessionFlowDebugInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      sessionFlowDebugInfo: ListTongyiConversationLogsResponseBodySessionFlowDebugInfo,
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    if(this.sessionFlowDebugInfo && typeof (this.sessionFlowDebugInfo as any).validate === 'function') {
      (this.sessionFlowDebugInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


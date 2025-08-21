// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


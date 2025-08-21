// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBotSessionDataResponseBody extends $dara.Model {
  /**
   * @example
   * 116
   */
  costTime?: string;
  datas?: { [key: string]: any }[];
  /**
   * @example
   * 15CD94CC-CBEB-4189-806C-A132D1F45D51
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


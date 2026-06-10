// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBotSessionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API call latency, in milliseconds (ms).
   * 
   * @example
   * 116
   */
  costTime?: string;
  /**
   * @remarks
   * An array of objects containing the data details.
   */
  datas?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
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


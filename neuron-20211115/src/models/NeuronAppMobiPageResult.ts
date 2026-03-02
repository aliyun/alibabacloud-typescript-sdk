// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppMobi } from "./NeuronAppMobi";


export class NeuronAppMobiPageResult extends $dara.Model {
  data?: NeuronAppMobi[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': NeuronAppMobi },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


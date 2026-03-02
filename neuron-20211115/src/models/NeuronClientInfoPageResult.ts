// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppClientInfo } from "./NeuronAppClientInfo";


export class NeuronClientInfoPageResult extends $dara.Model {
  data?: NeuronAppClientInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  showApp?: boolean;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      showApp: 'showApp',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': NeuronAppClientInfo },
      requestId: 'string',
      showApp: 'boolean',
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


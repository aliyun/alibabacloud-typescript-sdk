// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpHistoryConfig } from "./PdpHistoryConfig";


export class PdpHistoryConfigPageResult extends $dara.Model {
  data?: PdpHistoryConfig[];
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
      data: { 'type': 'array', 'itemType': PdpHistoryConfig },
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


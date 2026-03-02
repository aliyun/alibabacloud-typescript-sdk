// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpResource } from "./PdpResource";


export class PdpResourcePageResult extends $dara.Model {
  list?: PdpResource[];
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
      list: 'list',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': PdpResource },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


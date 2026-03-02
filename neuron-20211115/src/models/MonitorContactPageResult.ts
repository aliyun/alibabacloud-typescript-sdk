// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContact } from "./MonitorContact";


export class MonitorContactPageResult extends $dara.Model {
  data?: MonitorContact[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MonitorContact },
      intTotal: 'number',
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


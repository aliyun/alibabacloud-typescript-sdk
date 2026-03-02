// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServerInstanceResult extends $dara.Model {
  intTotal?: number;
  ips?: string[];
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      intTotal: 'intTotal',
      ips: 'ips',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intTotal: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


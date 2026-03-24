// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainUsedPortsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-*-A47C-*
   */
  requestId?: string;
  /**
   * @remarks
   * The used ports.
   */
  usedPorts?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usedPorts: 'UsedPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usedPorts: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.usedPorts)) {
      $dara.Model.validateArray(this.usedPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePunishedDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that are penalized for failing to obtain an ICP filing.
   */
  punishedDomains?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1F4D802-55A1-5D53-A247-7E79****85E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      punishedDomains: 'PunishedDomains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      punishedDomains: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.punishedDomains)) {
      $dara.Model.validateArray(this.punishedDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


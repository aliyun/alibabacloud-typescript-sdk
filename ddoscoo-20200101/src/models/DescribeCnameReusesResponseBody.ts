// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCnameReusesResponseBodyCnameReuses } from "./DescribeCnameReusesResponseBodyCnameReuses";


export class DescribeCnameReusesResponseBody extends $dara.Model {
  cnameReuses?: DescribeCnameReusesResponseBodyCnameReuses[];
  /**
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameReuses: 'CnameReuses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameReuses: { 'type': 'array', 'itemType': DescribeCnameReusesResponseBodyCnameReuses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cnameReuses)) {
      $dara.Model.validateArray(this.cnameReuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


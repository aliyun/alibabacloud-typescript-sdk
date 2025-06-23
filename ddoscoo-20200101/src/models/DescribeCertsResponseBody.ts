// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCertsResponseBodyCerts } from "./DescribeCertsResponseBodyCerts";


export class DescribeCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate information about the website.
   */
  certs?: DescribeCertsResponseBodyCerts[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certs)) {
      $dara.Model.validateArray(this.certs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


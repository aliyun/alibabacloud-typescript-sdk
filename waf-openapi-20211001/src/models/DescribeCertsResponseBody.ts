// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCertsResponseBodyCerts } from "./DescribeCertsResponseBodyCerts";


export class DescribeCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certs?: DescribeCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19511B0D-5AE0-5600-BB8A-DC2C8345****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
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


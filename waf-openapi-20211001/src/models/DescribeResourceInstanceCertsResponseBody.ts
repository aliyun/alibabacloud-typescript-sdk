// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceInstanceCertsResponseBodyCerts } from "./DescribeResourceInstanceCertsResponseBodyCerts";


export class DescribeResourceInstanceCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certs?: DescribeResourceInstanceCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-***-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      certs: { 'type': 'array', 'itemType': DescribeResourceInstanceCertsResponseBodyCerts },
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


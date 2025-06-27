// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubDomainRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the DNS records to be deleted.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


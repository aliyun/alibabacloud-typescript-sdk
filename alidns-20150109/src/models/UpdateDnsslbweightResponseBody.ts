// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDNSSLBWeightResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 9999985
   */
  recordId?: string;
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
   * The updated weight.
   * 
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


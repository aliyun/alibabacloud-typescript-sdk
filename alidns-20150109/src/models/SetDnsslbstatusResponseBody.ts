// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDNSSLBStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether weighted round-robin is enabled for the subdomain name.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The number of A records that are matched.
   * 
   * @example
   * 8
   */
  recordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      open: 'Open',
      recordCount: 'RecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      open: 'boolean',
      recordCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


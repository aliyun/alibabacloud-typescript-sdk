// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventMaxResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak of connection flood attacks. Unit: connections per seconds (CPS).
   * 
   * @example
   * 1302
   */
  cps?: number;
  /**
   * @remarks
   * The peak of volumetric attacks. Unit: Mbit/s.
   * 
   * @example
   * 6809
   */
  mbps?: number;
  /**
   * @remarks
   * The peak of resource exhaustion attacks. Unit: queries per second (QPS).
   * 
   * @example
   * 26314
   */
  qps?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5AE2FC86-C840-41AE-9F1A-3A2747C7C1DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      mbps: 'Mbps',
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      mbps: 'number',
      qps: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTotalAttackMaxFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of attack traffic. Unit: bit/s.
   * 
   * @example
   * 0
   */
  bps?: number;
  /**
   * @remarks
   * The peak packet rate of attack traffic. Unit: packets per second (pps).
   * 
   * @example
   * 0
   */
  pps?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9173A3CB-C40B-559B-96B7-2373830BD06A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
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


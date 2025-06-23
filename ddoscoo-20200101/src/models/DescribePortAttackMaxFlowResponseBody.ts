// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortAttackMaxFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of attack traffic. Unit: bit/s.
   * 
   * @example
   * 149559
   */
  bps?: number;
  /**
   * @remarks
   * The peak packet rate of attack traffic . Unit: packets per second (pps).
   * 
   * @example
   * 23
   */
  pps?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
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


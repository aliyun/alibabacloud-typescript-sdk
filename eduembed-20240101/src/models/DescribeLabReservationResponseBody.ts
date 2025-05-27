// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLabReservationResponseBodyLabReservation } from "./DescribeLabReservationResponseBodyLabReservation";


export class DescribeLabReservationResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  labReservation?: DescribeLabReservationResponseBodyLabReservation;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 9ADC729B-...
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labReservation: 'LabReservation',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labReservation: DescribeLabReservationResponseBodyLabReservation,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.labReservation && typeof (this.labReservation as any).validate === 'function') {
      (this.labReservation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


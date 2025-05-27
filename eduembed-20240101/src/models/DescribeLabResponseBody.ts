// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLabResponseBodyLab } from "./DescribeLabResponseBodyLab";


export class DescribeLabResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  lab?: DescribeLabResponseBodyLab;
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
      lab: 'Lab',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lab: DescribeLabResponseBodyLab,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lab && typeof (this.lab as any).validate === 'function') {
      (this.lab as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


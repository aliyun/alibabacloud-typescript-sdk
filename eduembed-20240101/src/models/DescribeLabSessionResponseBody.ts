// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLabSessionResponseBodyLabSession } from "./DescribeLabSessionResponseBodyLabSession";


export class DescribeLabSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  labSession?: DescribeLabSessionResponseBodyLabSession;
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
      labSession: 'LabSession',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labSession: DescribeLabSessionResponseBodyLabSession,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.labSession && typeof (this.labSession as any).validate === 'function') {
      (this.labSession as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


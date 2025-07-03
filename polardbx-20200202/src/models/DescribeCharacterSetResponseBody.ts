// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCharacterSetResponseBodyData } from "./DescribeCharacterSetResponseBodyData";


export class DescribeCharacterSetResponseBody extends $dara.Model {
  data?: DescribeCharacterSetResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 709C1E40-092D-4A3D-9958-6D7438******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCharacterSetResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyData } from "./DescribeFileModerationResultResponseBodyData";


export class DescribeFileModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeFileModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeFileModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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


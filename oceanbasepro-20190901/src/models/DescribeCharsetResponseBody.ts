// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCharsetResponseBodyCharset } from "./DescribeCharsetResponseBodyCharset";


export class DescribeCharsetResponseBody extends $dara.Model {
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeCharset
   * &TenantMode=Oracle
   * &Common request parameters
   * ```
   */
  charset?: DescribeCharsetResponseBodyCharset[];
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeCharset**.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: { 'type': 'array', 'itemType': DescribeCharsetResponseBodyCharset },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.charset)) {
      $dara.Model.validateArray(this.charset);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


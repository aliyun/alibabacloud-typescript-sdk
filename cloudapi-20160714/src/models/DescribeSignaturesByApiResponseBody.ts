// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSignaturesByApiResponseBodySignatures } from "./DescribeSignaturesByApiResponseBodySignatures";


export class DescribeSignaturesByApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The returned signature key information. It is an array consisting of SignatureItem data.
   */
  signatures?: DescribeSignaturesByApiResponseBodySignatures;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatures: 'Signatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatures: DescribeSignaturesByApiResponseBodySignatures,
    };
  }

  validate() {
    if(this.signatures && typeof (this.signatures as any).validate === 'function') {
      (this.signatures as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


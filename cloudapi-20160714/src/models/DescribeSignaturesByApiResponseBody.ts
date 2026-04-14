// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignaturesByApiResponseBodySignaturesSignatureItem extends $dara.Model {
  boundTime?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponseBodySignatures extends $dara.Model {
  signatureItem?: DescribeSignaturesByApiResponseBodySignaturesSignatureItem[];
  static names(): { [key: string]: string } {
    return {
      signatureItem: 'SignatureItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureItem: { 'type': 'array', 'itemType': DescribeSignaturesByApiResponseBodySignaturesSignatureItem },
    };
  }

  validate() {
    if(Array.isArray(this.signatureItem)) {
      $dara.Model.validateArray(this.signatureItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesByApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
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


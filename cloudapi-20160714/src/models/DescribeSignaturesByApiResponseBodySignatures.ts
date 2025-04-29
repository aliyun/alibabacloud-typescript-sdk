// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSignaturesByApiResponseBodySignaturesSignatureItem } from "./DescribeSignaturesByApiResponseBodySignaturesSignatureItem";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSignaturesResponseBodySignatureInfosSignatureInfo } from "./DescribeSignaturesResponseBodySignatureInfosSignatureInfo";


export class DescribeSignaturesResponseBodySignatureInfos extends $dara.Model {
  signatureInfo?: DescribeSignaturesResponseBodySignatureInfosSignatureInfo[];
  static names(): { [key: string]: string } {
    return {
      signatureInfo: 'SignatureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureInfo: { 'type': 'array', 'itemType': DescribeSignaturesResponseBodySignatureInfosSignatureInfo },
    };
  }

  validate() {
    if(Array.isArray(this.signatureInfo)) {
      $dara.Model.validateArray(this.signatureInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


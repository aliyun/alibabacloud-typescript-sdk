// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem } from "./DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem";


export class DescribeApiSignaturesResponseBodyApiSignatures extends $dara.Model {
  apiSignatureItem?: DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem[];
  static names(): { [key: string]: string } {
    return {
      apiSignatureItem: 'ApiSignatureItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSignatureItem: { 'type': 'array', 'itemType': DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiSignatureItem)) {
      $dara.Model.validateArray(this.apiSignatureItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignaturesByApiResponseBodySignaturesSignatureItem extends $dara.Model {
  /**
   * @remarks
   * The time when the key was bound.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the backend signature key.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The name of the backend signature key.
   * 
   * @example
   * mysecret
   */
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


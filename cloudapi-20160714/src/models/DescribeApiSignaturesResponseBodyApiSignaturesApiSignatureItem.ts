// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 46fbb52840d146f186e38e8e70fc8c90
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The time when the backend signature key was bound.
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
   * backendsignature
   */
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignaturesResponseBodySignatureInfosSignatureInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time of the key.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The last modification time of the key.
   * 
   * @example
   * 2016-07-24T08:28:48Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region where the key is located.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
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
   * The Key value of the backend signature key.
   * 
   * @example
   * qwertyuiop
   */
  signatureKey?: string;
  /**
   * @remarks
   * The name of the backend signature key.
   * 
   * @example
   * backendsignature
   */
  signatureName?: string;
  /**
   * @remarks
   * The Secret value of the backend signature key.
   * 
   * @example
   * asdfghjkl
   */
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      signatureId: 'SignatureId',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      signatureId: 'string',
      signatureKey: 'string',
      signatureName: 'string',
      signatureSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


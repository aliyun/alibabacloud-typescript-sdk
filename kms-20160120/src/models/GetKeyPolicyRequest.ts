// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID or Alibaba Cloud Resource Name (ARN) of the key.
   * 
   * > When you access a key in another Alibaba Cloud account, you must enter the ARN of the key. The ARN of a key is in the `acs:kms:${region}:${account}:key/${keyid}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the key policy. Only the static value default is supported.
   * 
   * @example
   * default
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


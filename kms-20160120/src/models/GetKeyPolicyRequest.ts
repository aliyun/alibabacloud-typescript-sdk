// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretPolicyRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * secret_test
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


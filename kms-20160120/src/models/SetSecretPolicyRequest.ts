// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecretPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
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
      policy: 'Policy',
      policyName: 'PolicyName',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
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


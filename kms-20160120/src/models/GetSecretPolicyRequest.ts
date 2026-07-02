// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the credential policy. Only the static field default is supported.
   * 
   * @example
   * default
   */
  policyName?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the credential.
   * 
   * > If you access a credential that belongs to another Alibaba Cloud account, you must specify the ARN of the credential. The ARN of a credential must be in the `acs:kms:${region}:${account}:secret/${secret-name}` format.
   * 
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


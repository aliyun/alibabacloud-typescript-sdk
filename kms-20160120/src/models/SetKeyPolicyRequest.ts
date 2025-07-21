// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Statement":[{"Action":["kms:*"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:*"]},"Resource":["*"],"Sid":"kms default key policy"},{"Action":["kms:List*","kms:Describe*","kms:Create*","kms:Enable*","kms:Disable*","kms:Get*","kms:Set*","kms:Update*","kms:Delete*","kms:Cancel*","kms:TagResource","kms:UntagResource","kms:ImportKeyMaterial","kms:ScheduleKeyDeletion"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:user/for_test_policy"]},"Resource":["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @example
   * default
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      policy: 'Policy',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      policy: 'string',
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


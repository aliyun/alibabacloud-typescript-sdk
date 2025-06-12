// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The document of the policy. The document can be up to 6,144 bytes in length.
   * 
   * @example
   * {"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The rotation strategy of the policy. The rotation strategy can be used to delete an early policy version.
   * 
   * Valid values:
   * 
   * *   `None`: disables the rotation strategy.
   * *   `DeleteOldestNonDefaultVersionWhenLimitExceeded`: deletes the earliest non-active version if the number of versions exceeds the limit.
   * 
   * Default value: `None`.
   * 
   * @example
   * None
   */
  rotateStrategy?: string;
  /**
   * @remarks
   * Specifies whether to set this policy as the default policy. Default value: `false`.
   * 
   * @example
   * false
   */
  setAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      rotateStrategy: 'RotateStrategy',
      setAsDefault: 'SetAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      policyName: 'string',
      rotateStrategy: 'string',
      setAsDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


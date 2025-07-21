// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network access rule that is associated with the permission policy.
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the permission policy.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:policy/policy_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * policy  description
   */
  description?: string;
  /**
   * @remarks
   * The scope of the permission policy.
   * 
   * @example
   * kst-hzz634e67d126u9p9****
   */
  kmsInstance?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * A list of operations that can be performed.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * f455324b-e229-4066-9f58-9c1cf3fe83a9
   */
  requestId?: string;
  /**
   * @remarks
   * A list of keys and secrets that are allowed to access.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      arn: 'Arn',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      arn: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


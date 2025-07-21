// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The ARN of the permission policy.
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
   * The operations that can be performed.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f34-be0f-c4543fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The key and secret that are allowed to access.
   * 
   * *   `key/*` indicates that all keys of the KMS instance can be accessed.
   * *   `secret/*` indicates all secrets of the KMS instance can be accessed.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string;
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
      permissions: 'string',
      requestId: 'string',
      resources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


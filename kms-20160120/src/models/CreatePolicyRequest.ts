// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * > For more information about how to query created access control rules, see [ListNetworkRules](https://help.aliyun.com/document_detail/2539433.html).
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
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
   * The scope of the permission policy. You need to specify the KMS instance that you want to access.
   * 
   * @example
   * kst-hzz634e67d126u9p9****
   */
  kmsInstance?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * The operations that can be performed. Valid values:
   * 
   * *   RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
   * *   RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
   * 
   * You can select both.
   * 
   * This parameter is required.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string;
  /**
   * @remarks
   * The key and secret that are allowed to access.
   * 
   * *   Key: Enter a key in the `key/${KeyId}` format. To allow access to all keys of a KMS instance, enter key/\\*.
   * *   Secret: Enter a secret in the `secret/${SecretName}` format. To allow access to all secrets of a KMS instance, enter secret/\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: 'string',
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


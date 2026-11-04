// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * mydbinfo
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic rotation. Valid values:
   * - true: enables automatic rotation.
   * - false: disables automatic rotation. This is the default value.
   * 
   * 
   * > This parameter takes effect only when SecretType is set to Rds (ApsaraDB RDS secret), PolarDB (PolarDB secret), Redis (Redis secret), RAMCredentials (RAM secret), or ECS (ECS secret). When SecretType is set to Generic (generic secret), automatic rotation is not supported. You can call the [PutSecretValue](https://help.aliyun.com/document_detail/154503.html) operation to manually rotate the secret.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The ID of the key used to encrypt the secret value.
   * 
   * > The key and the secret must belong to the same KMS instance, and the key must be a symmetric key.
   * 
   * @example
   * key-gzz63ff0db5hg3qje****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The extended configuration of the secret, which is used to specify the property of a specific secret type. The value can be up to 1,024 characters in length.
   * 
   * - When SecretType is set to Generic (generic secret), this parameter is ignored.
   * 
   * - When SecretType is set to Rds (ApsaraDB RDS secret), you must specify the following parameters in ExtendedConfig:
   *      - SecretSubType (required): the child class of the secret. Valid values:  
   * 
   *         - SingleUser: specifies that Secrets Manager manages the ApsaraDB RDS secret in single-account pattern. During secret rotation, the password of the specified account is reset to a new random password.
   *         - DoubleUsers: specifies that Secrets Manager manages the ApsaraDB RDS secret in dual-account pattern. ACSCurrent and ACSPrevious reference one account each. During secret rotation, the password of the account referenced by ACSPrevious is reset to a new random password, and then Secrets Manager swaps the accounts referenced by ACSCurrent and ACSPrevious.
   *     - DBInstanceId (required): instance ID of the ApsaraDB RDS instance to which the account belongs.
   *     - CustomData (optional): custom data. The value is a JSON-formatted key-value pair. You can specify up to 10 key-value pairs, separated by commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. Default value: `{}`.  
   * 
   * - When SecretType is set to Redis (Redis secret), you must specify the following parameters in ExtendedConfig:
   *     - SecretSubType (required): the child class of the secret. Valid values:  
   *         - DoubleUsers: specifies that Secrets Manager manages the Redis secret in dual-account pattern. ACSCurrent and ACSPrevious reference one account each. During secret rotation, the password of the account referenced by ACSPrevious is reset to a new random password, and then Secrets Manager swaps the accounts referenced by ACSCurrent and ACSPrevious.
   *     - AccountName (required): the database username.
   *     - CloneAccountName (required): the database username, which is the value of AccountName appended with the `_clone` suffix.
   *     - AccountPrivilege (required): the permissions to access the database.
   *     - InstanceId (required): instance ID of the Redis instance.
   *     - RegionId (required): the region ID of the Redis instance.
   *     - CustomData (optional): custom data. The value is a JSON-formatted key-value pair. You can specify up to 10 key-value pairs, separated by commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. Default value: `{}`.  
   * 
   * - When SecretType is set to RAMCredentials (RAM secret), you must specify the following parameters in ExtendedConfig:
   *     - SecretSubType (required): the child class of the secret. Valid value: RamUserAccessKey.
   *     - UserName (required): the name of the Resource Access Management (RAM) user.
   *     - CustomData (optional): custom data. The value is a JSON-formatted key-value pair. You can specify up to 10 key-value pairs, separated by commas (,). Default value: `{}`.  
   * - When SecretType is set to ECS (ECS secret), you must specify the following parameters in ExtendedConfig:
   *     - SecretSubType (required): the child class of the secret. Valid values:  
   * 
   *         - Password: ECS password.
   *         - SSHKey: ECS SSH public and private keys.
   *     - RegionId (required): the region ID of the ECS instance.  
   *     - InstanceId (required): instance ID of the ECS instance.
   *     - CustomData (optional): custom data. The value is a JSON-formatted key-value pair. You can specify up to 10 key-value pairs, separated by commas (,). Default value: `{}`.    
   * - When SecretType is set to PolarDB, you must specify the following parameters in ExtendedConfig:
   *     - SecretSubType (required): DoubleUsers (fixed value).
   * 
   *     - RegionId (required): the region ID.
   * 
   *     - DBClusterId (required): instance ID of the PolarDB cluster.
   * 
   *     - DBType (required): MySQL or PostgreSQL.
   * 
   *     - AccountName (required): the account name.
   * 
   *     - CloneAccountName: the value of AccountName appended with `_clone`.
   * 
   *     - AccountType: the account type. Only Normal is supported.
   * 
   *     - AccountPrivilege: the account permissions. This parameter is available only for MySQL.
   * 
   *     - DBName: the database name. This parameter is available only for MySQL.
   * 
   *     - CustomData (optional): custom data. The value is a JSON-formatted key-value pair. You can specify up to 10 key-value pairs, separated by commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. Default value: `{}`.
   * 
   * > When SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must set this parameter.
   * 
   * @example
   * {"SecretSubType":"SingleUser", "DBInstanceId":"rm-bp1b3dd3a506e****" ,"CustomData":{"Key1": "v1", "fds":"fdsf"}}
   */
  extendedConfigShrink?: string;
  /**
   * @remarks
   * The content of the access policy in JSON format. The maximum length is 32,768 bytes.
   * 
   * For more information about secret policies, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html). If you do not specify this parameter, the default access policy is used.
   * 
   * The access policy includes the following fields:
   * 
   * - Version: the version of the access policy. Currently, only version 1 is supported.
   * - Statement: the statements in the access policy. Each access policy contains one or more statements.
   * 
   * The access policy uses the following format:
   * 
   * ```
   * {
   *     "Version": "1",
   *     "Statement": [
   *         {
   *             "Sid": "Enable RAM User Permissions",
   *             "Effect": "Allow",
   *             "Principal": {
   *               "RAM": ["acs:ram::12345678****:*"]
   *             },
   *             "Action": [
   *                 "kms:*"
   *             ],
   *             "Resource": [
   *                 "*"
   *             ]
   *         }
   *     ]
   * }
   * ```
   * 
   * Statement details:
   * - Sid: optional. The custom statement identifier. The value can be up to 128 characters in length and can contain uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters (_/+=.@-).
   * - Effect: required. Specifies whether to allow or deny the permissions in the policy statement. Valid values: Allow and Deny.
   * 
   * - Principal: required. The principal to which the policy is attached. You can set this field to the current Alibaba Cloud account (the account to which the secret belongs), a RAM user or RAM role under the current Alibaba Cloud account, or a RAM user or RAM role under another Alibaba Cloud account.
   * 
   * - Action: required. The API operations to allow or deny. The value must start with "kms:". For the list of available operations, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html). If you specify an operation that is not in the list, the setting does not take effect.
   * 
   * - Resource: required. The value can only be *, which indicates the current KMS secret.
   * 
   * - Condition: optional. The conditions that must be met for the authorization to take effect. You can use conditions to evaluate the context of an API request to determine whether the policy statement applies. The format is `"Condition": {"condition operator": {"condition key": "condition value"}}`. For more information, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html).
   * 
   * > After you grant Resource Access Management (RAM) user or RAM role under another Alibaba Cloud account, you must also use the Alibaba Cloud account of the RAM user or RAM role to authorize them to use the secret in the RAM console. Only then can the RAM user or RAM role use the secret. For more information, see [Custom policy examples for Key Management Service](https://help.aliyun.com/document_detail/480682.html), [Grant Resource Access Management (RAM) user](https://help.aliyun.com/document_detail/116146.html), and [Grant permissions to a RAM role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
  /**
   * @remarks
   * The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).  
   * The value must be in the `integer[unit]` format. `integer` specifies the time length, and `unit` specifies the time unit.  
   * Valid values for `unit`: d (days), h (hours), m (minutes), and s (seconds). For example, both 7d and 604,800s indicate a 7-day interval.  
   * 
   * > You must set this parameter only when EnableAutomaticRotation is set to true.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The secret value. The value can be up to 30,720 bytes (30 KB) in length. KMS encrypts the value by using the specified key and stores it in the initial version.
   * 
   * - When SecretType is set to Generic (generic secret), you can customize the secret value.
   * 
   * - When SecretType is set to Rds (ApsaraDB RDS secret), the secret value must be in the following format: `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. `AccountName` specifies the username of the ApsaraDB RDS instance, and `AccountPassword` specifies the password of the account.  
   * - When SecretType is set to Redis (Redis secret), set this parameter to `$Auto`.
   * 
   * - When SecretType is set to RAMCredentials (RAM secret), the secret value must be in the following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. `AccessKeyId` specifies the AccessKey ID, and `AccessKeySecret` specifies the AccessKey secret. You must specify all AccessKey pairs of the Resource Access Management (RAM) user.
   * 
   * - When SecretType is set to PolarDB, set this parameter to `$Auto`.
   * 
   * - When SecretType is set to ECS (ECS secret), the secret value must be in one of the following formats:  
   * 
   *    - When SecretSubType in the ExtendedConfig parameter is set to Password: `{"UserName":"","Password": ""}`. `UserName` specifies the username used to log on to the ECS instance, and `Password` specifies the logon password.  
   * 
   *    - When SecretSubType in the ExtendedConfig parameter is set to SSHKey: `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. `PublicKey` specifies the SSH public key used to log on to the ECS instance, and `PrivateKey` specifies the private key.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Accounts":[{"AccountName":"user1","AccountPassword":"****"}]}
   */
  secretData?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * - text: text. This is the default value.
   * - binary: binary data.
   * 
   * > When SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, SecretDataType can only be set to text.
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The secret name. The secret name must be unique within the current region.
   * The name can be up to 192 characters in length and can contain letters, digits, underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The naming requirements vary based on the secret type:  
   * 
   * - When SecretType is set to Generic (generic secret), Rds (ApsaraDB RDS secret), or Redis (Redis or Tair secret), the name cannot start with `acs/`.  
   * 
   * - When SecretType is set to RAMCredentials (RAM secret), use the fixed value `$Auto`. In this case, KMS automatically generates the secret name, which starts with `acs/ram/user/` and includes the display name of the Resource Access Management (RAM) user.
   * 
   * - When SecretType is set to ECS (ECS secret), the name must start with `acs/ecs/`.
   * 
   * This parameter is required.
   * 
   * @example
   * mydbconninfo
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * - Generic: generic secret. This is the default value.  
   * - Rds: ApsaraDB RDS secret.  
   * 
   * - Redis: Redis secret.
   * 
   * - RAMCredentials: RAM secret.  
   * 
   * - ECS: ECS secret.
   * 
   * - PolarDB: PolarDB secret.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The tags of the secret. Each tag is a key-value pair that consists of a tag key and a tag value.
   * 
   * The tag key and tag value can be up to 128 characters in length and can contain uppercase and lowercase letters, digits, forward slashes (/), backslashes (\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
   * 
   * - A tag key cannot start with aliyun or acs:.
   * 
   * - You can add up to 20 tags to each secret.
   * 
   * @example
   * [{\\"TagKey\\":\\"key1\\",\\"TagValue\\":\\"val1\\"},{\\"TagKey\\":\\"key2\\",\\"TagValue\\":\\"val2\\"}]
   */
  tags?: string;
  /**
   * @remarks
   * The version ID of the initial version. The version ID must be unique within the secret.
   * The version ID can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfigShrink: 'ExtendedConfig',
      policy: 'Policy',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      encryptionKeyId: 'string',
      extendedConfigShrink: 'string',
      policy: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


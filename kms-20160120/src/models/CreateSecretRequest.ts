// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS instance.
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
   * 
   * - true: enables automatic rotation.
   * 
   * - false (default): disables automatic rotation.
   * 
   * > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis, RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is not supported. You can call the [PutSecretValue](https://help.aliyun.com/document_detail/154503.html) operation to manually rotate the secret.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The ID of the key used to encrypt the secret value.
   * 
   * > The key and the secret must be in the same KMS instance. The key must be a symmetric key.
   * 
   * @example
   * key-gzz63ff0db5hg3qje****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The extended configuration of the secret. This parameter specifies the properties of the secret of a specific type. The value can be up to 1,024 characters in length.
   * 
   * - If SecretType is set to Generic, this parameter is ignored.
   * 
   * - If SecretType is set to Rds, you must specify the following parameters in ExtendedConfig:
   * 
   *   - SecretSubType (Required): The subtype of the secret. Valid values:
   * 
   *     - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When the secret is rotated, the password of the specified account is reset to a new random password.
   * 
   *     - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode. ACSCurrent and ACSPrevious point to one of the accounts. When the secret is rotated, the password of the account pointed to by ACSPrevious is reset to a new random password. Then, Secrets Manager swaps the accounts that ACSCurrent and ACSPrevious point to.
   * 
   *   - DBInstanceId (Required): The ID of the RDS instance to which the account belongs.
   * 
   *   - CustomData (Optional): The custom data. The value is a key-value pair in the JSON format. You can specify up to 10 key-value pairs. Separate multiple key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The default value is `{}`.
   * 
   * - If SecretType is set to Redis, you must specify the following parameters in ExtendedConfig:
   * 
   *   - SecretSubType (Required): The subtype of the secret. Valid values:
   * 
   *     - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode. ACSCurrent and ACSPrevious point to one of the accounts. When the secret is rotated, the password of the account pointed to by ACSPrevious is reset to a new random password. Then, Secrets Manager swaps the accounts that ACSCurrent and ACSPrevious point to.
   * 
   *   - AccountName (Required): The database username.
   * 
   *   - CloneAccountName (Required): The database username, which is the value of AccountName with the `_clone` suffix.
   * 
   *   - AccountPrivilege (Required): The permissions to access the database.
   * 
   *   - InstanceId (Required): The ID of the Redis instance.
   * 
   *   - RegionId (Required): The ID of the region where the Redis instance resides.
   * 
   *   - CustomData (Optional): The custom data. The value is a key-value pair in the JSON format. You can specify up to 10 key-value pairs. Separate multiple key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The default value is `{}`.
   * 
   * - If SecretType is set to RAMCredentials, you must specify the following parameters in ExtendedConfig:
   * 
   *   - SecretSubType (Required): The subtype of the secret. The value is RamUserAccessKey.
   * 
   *   - UserName (Required): The name of the RAM user.
   * 
   *   - CustomData (Optional): The custom data. The value is a key-value pair in the JSON format. You can specify up to 10 key-value pairs. Separate multiple key-value pairs with commas (,). The default value is `{}`.
   * 
   * - If SecretType is set to ECS, you must specify the following parameters in ExtendedConfig:
   * 
   *   - SecretSubType (Required): The subtype of the secret. Valid values:
   * 
   *     - Password: an ECS password.
   * 
   *     - SSHKey: an ECS SSH key pair.
   * 
   *   - RegionId (Required): The ID of the region where the ECS instance resides.
   * 
   *   - InstanceId (Required): The ID of the ECS instance.
   * 
   *   - CustomData (Optional): The custom data. The value is a key-value pair in the JSON format. You can specify up to 10 key-value pairs. Separate multiple key-value pairs with commas (,). The default value is `{}`.
   * 
   * - If SecretType is set to PolarDB, you must specify the following parameters in ExtendedConfig:
   * 
   *   - SecretSubType (Required): The fixed value is DoubleUsers.
   * 
   *   - RegionId (Required): The region.
   * 
   *   - DBClusterId (Required): The ID of the PolarDB instance.
   * 
   *   - DBType (Required): MySQL or PostgreSQL.
   * 
   *   - AccountName (Required): The account name.
   * 
   *   - CloneAccountName: The value is AccountName_clone.
   * 
   *   - AccountType: Only Normal is supported.
   * 
   *   - AccountPrivilege: This parameter is available only for MySQL.
   * 
   *   - DBName: This parameter is available only for MySQL.
   * 
   *   - CustomData (Optional): The custom data. The value is a key-value pair in the JSON format. You can specify up to 10 key-value pairs. Separate multiple key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The default value is {}.
   * 
   * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must configure this parameter.
   * 
   * @example
   * {"SecretSubType":"SingleUser", "DBInstanceId":"rm-bp1b3dd3a506e****" ,"CustomData":{"Key1": "v1", "fds":"fdsf"}}
   */
  extendedConfig?: { [key: string]: any };
  /**
   * @remarks
   * The content of the secret policy. The value is in the JSON format. The value can be up to 32,768 bytes in length.
   * 
   * For more information about secret policies, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html). If you do not specify this parameter, the default secret policy is used.
   * 
   * A secret policy contains the following parts:
   * 
   * - Version: The version of the secret policy. Only 1 is supported.
   * 
   * - Statement: The statements of the secret policy. Each secret policy can contain one or more statements.
   * 
   * The following is the format of a secret policy:
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
   * Details about a statement:
   * 
   * - Sid: (Optional) The custom identifier of the statement. The value can be up to 128 characters in length and can contain uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters, including underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods (.), at signs (@), and hyphens (-).
   * 
   * - Effect: (Required) The effect of the policy statement. Valid values: Allow and Deny.
   * 
   * - Principal: (Required) The principal that is authorized by the policy. You can specify the current Alibaba Cloud account (the account to which the secret belongs), a RAM user or RAM role of the current Alibaba Cloud account, or a RAM user or RAM role of another Alibaba Cloud account.
   * 
   * - Action: (Required) The API operations that are allowed or denied. The value must start with "kms:". For the list of supported operations, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html). If you specify an operation that is not in the list, the setting does not take effect.
   * 
   * - Resource: (Required) The resource. The value can only be \\*, which indicates the current KMS secret.
   * 
   * - Condition: (Optional) The conditions for the authorization to take effect. You can use conditions to evaluate the context of an API request to determine whether to apply the policy statement. The format is `"Condition": {"condition operator": {"condition key": "condition value"}}`. For more information, see [Overview of secret policies](https://help.aliyun.com/document_detail/2716465.html).
   * 
   * > After you grant permissions to a RAM user or RAM role of another Alibaba Cloud account, you must use the Alibaba Cloud account to which the RAM user or RAM role belongs to grant the RAM user or RAM role the permissions to use the secret in the RAM console. Then, the RAM user or RAM role can use the secret. For more information, see [Custom policies for KMS](https://help.aliyun.com/document_detail/480682.html), [Grant permissions to a RAM user](https://help.aliyun.com/document_detail/116146.html), and [Grant permissions to a RAM role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
  /**
   * @remarks
   * The interval for automatic rotation. The value is in the range of 6 hours to 8,760 hours (365 days).<br>
   * The value is in the `integer[unit]` format. `integer` indicates the interval. `unit` indicates the unit of time.<br>
   * Valid values for unit: d (day), h (hour), m (minute), and s (second). For example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
   * 
   * > You must specify this parameter if you set EnableAutomaticRotation to true. You do not need to specify this parameter if you set EnableAutomaticRotation to false.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The value of the secret. The value can be up to 30,720 bytes (30 KB) in length. KMS encrypts the secret value with the specified key and stores the encrypted value in the initial version.
   * 
   * - If SecretType is set to Generic, you can specify a custom secret value.
   * 
   * - If SecretType is set to Rds, the secret value must be in the following format: `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format, `AccountName` specifies the username of the account for the RDS instance and `AccountPassword` specifies the password of the account.
   * 
   * - If SecretType is set to Redis, set this parameter to `$Auto`.
   * 
   * - If SecretType is set to RAMCredentials, the secret value must be in the following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret` specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM user.
   * 
   * - If SecretType is set to PolarDB, set this parameter to `$Auto`.
   * 
   * - If SecretType is set to ECS, the secret value must be in one of the following formats:
   * 
   *   - If SecretSubType in the ExtendedConfig parameter is set to Password: `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the username used to log on to the ECS instance and `Password` specifies the password used to log on to the ECS instance.
   * 
   *   - If SecretSubType in the ExtendedConfig parameter is set to SSHKey: `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey` specifies the SSH-formatted public key used to log on to the ECS instance and `PrivateKey` specifies the private key used to log on to the ECS instance.
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
   * 
   * - text (default): The secret value is a text string.
   * 
   * - binary: The secret value is a binary string.
   * 
   * > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, SecretDataType must be set to text.
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the secret. The name must be unique in the same region.
   * The name can be up to 192 characters in length and can contain letters, digits, underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The following limits apply to secret names for different types of secrets:
   * 
   * - If SecretType is set to Generic, Rds, or Redis, the name cannot start with `acs/`.
   * 
   * - If SecretType is set to RAMCredentials, set this parameter to the fixed value `$Auto`. In this case, KMS automatically generates a secret name that starts with `acs/ram/user/` and contains the display name of the RAM user.
   * 
   * - If SecretType is set to ECS, the name must start with `acs/ecs/`.
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
   * - Generic (default): a generic secret.
   * 
   * - Rds: an RDS secret.
   * 
   * - Redis: a Redis secret.
   * 
   * - RAMCredentials: a RAM secret.
   * 
   * - ECS: an ECS secret.
   * 
   * - PolarDB: a PolarDB secret.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The tags of the secret. Each tag consists of a key-value pair. A tag consists of a tag key and a tag value.
   * 
   * The tag key and tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
   * 
   * - The tag key cannot start with aliyun or acs:.
   * 
   * - You can specify up to 20 key-value pairs for each secret.
   * 
   * @example
   * [{\\"TagKey\\":\\"key1\\",\\"TagValue\\":\\"val1\\"},{\\"TagKey\\":\\"key2\\",\\"TagValue\\":\\"val2\\"}]
   */
  tags?: string;
  /**
   * @remarks
   * The version number of the initial version. The version number must be unique within the secret.
   * The version number can be up to 64 characters in length.
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
      extendedConfig: 'ExtendedConfig',
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
      extendedConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.extendedConfig) {
      $dara.Model.validateMap(this.extendedConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


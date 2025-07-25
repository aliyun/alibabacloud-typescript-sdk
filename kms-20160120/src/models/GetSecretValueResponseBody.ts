// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueResponseBodyVersionStages extends $dara.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionStage)) {
      $dara.Model.validateArray(this.versionStage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * 2020-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned if you set the FetchExtendedConfig parameter to true. This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The time when the last rotation was performed.
   * 
   * >  This parameter is returned if the secret was rotated.
   * 
   * @example
   * 2020-07-05T08:22:03Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6a3e9c36-1150-4881-84d3-eb8672fcafad
   */
  requestId?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. The `unit` field has a fixed value of s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The secret value. Secrets Manager decrypts the ciphertext of the secret value and returns the plaintext of the secret value in this parameter.
   * 
   * *   For a generic secret, the secret value of the specified version is returned.
   * 
   * *   For a managed ApsaraDB RDS secret, the value is returned in the following format:`{"AccountName":"","AccountPassword":""}` .
   * 
   * *   For a managed RAM secret, the secret value is returned in the following format: `{"AccessKeyId":"Adfdsfd","AccessKeySecret":"fdsfdsf","GenerateTimestamp": "2016-03-25T10:42:40Z"}`.
   * 
   * *   For a managed ECS secret, the secret value is returned in one of the following formats:
   * 
   *     *   `{"UserName":"root","Password":"H5asdasdsads****"}`: The secret value is returned in this format if the ECS secret is a password.
   *     *   `{"UserName":"root","PublicKey":"ssh-rsa ****mKwnVix9YTFY9Rs= imported-openssh-key","PrivateKey": "d6bee1cb-2e14-4277-ba6b-73786b21****"}`: The secret value is returned in this format is the ECS secret is a pair of SSH keys. The private key is in the Privacy Enhanced Mail (PEM) format.
   * 
   * @example
   * testdata1
   */
  secretData?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * *   text
   * *   binary
   * 
   * @example
   * binary
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * *   RAMCredentials: indicates a managed RAM secret.
   * *   ECS: indicates a managed ECS secret.
   * 
   * @example
   * Generic
   */
  secretType?: string;
  /**
   * @remarks
   * The version number of the secret value.
   * 
   * @example
   * 00000000000000000000000000000001
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that mark the secret versions.
   */
  versionStages?: GetSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticRotation: 'string',
      createTime: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      versionId: 'string',
      versionStages: GetSecretValueResponseBodyVersionStages,
    };
  }

  validate() {
    if(this.versionStages && typeof (this.versionStages as any).validate === 'function') {
      (this.versionStages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


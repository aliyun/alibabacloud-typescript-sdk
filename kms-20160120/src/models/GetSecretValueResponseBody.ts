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
   * - Enabled: Automatic rotation is enabled.  
   * - Disabled: Automatic rotation is disabled.  
   * - Invalid: The rotation status is abnormal, and KMS cannot automatically rotate the credential for you.  
   * 
   * > This parameter is returned only for RDS credentials, PolarDB credentials, Redis/Tair credentials, RAM credentials, or ECS credentials.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the credential was created.
   * 
   * @example
   * 2024-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The extended configuration of the credential.  
   * 
   * > This parameter is returned only for RDS credentials, PolarDB credentials, Redis/Tair credentials, RAM credentials, or ECS credentials when FetchExtendedConfig is set to true.
   * 
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The time of the most recent rotation.  
   * 
   * > This parameter is returned only if the credential has been rotated.
   * 
   * @example
   * 2023-07-05T08:22:03Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time of the next rotation.  
   * 
   * > This parameter is returned only when automatic rotation is enabled.
   * 
   * @example
   * 2024-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The ID of the current request. Alibaba Cloud generates a unique identifier for each request, which can be used for troubleshooting and issue tracking.
   * 
   * @example
   * 6a3e9c36-1150-4881-84d3-eb8672fcafad
   */
  requestId?: string;
  /**
   * @remarks
   * The epoch for automatic credential rotation.    
   * The format is `integer[unit]`, where `integer` indicates the time duration and `unit` indicates the time unit. Valid value for `unit`: s (seconds). For example, a 7-day rotation epoch is 604800s.
   * 
   * > This parameter is returned only when automatic rotation is enabled.
   * 
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The value of the credential. KMS decrypts the stored ciphertext and returns this parameter.  
   * 
   * - For generic secrets, the credential value you specified is returned.  
   * 
   * - For RDS credentials and Redis/Tair credentials, the credential value is in the format: `{"AccountName":"","AccountPassword":""}`.  
   * 
   * - For RAM credentials, the credential value is in the format: `{"AccessKeyId":"Adfdsfd","AccessKeySecret":"fdsfdsf","GenerateTimestamp": "2023-03-25T10:42:40Z"}`.  
   * 
   * - For ECS credentials, the credential value is in one of the following formats:  
   *   - Security token type: `{"UserName":"ecs-user","Password":"H5asdasdsads****"}`.  
   *   - Public-private key pair type (private key in PEM format): `{"UserName":"ecs-user","PublicKey":"ssh-rsa ****mKwnVix9YTFY9Rs= imported-openssh-key","PrivateKey": "d6bee1cb-2e14-4277-ba6b-73786b21****"}`.  
   * 
   * - For PolarDB credentials, the credential value is in the format: `{"AccountName":"","AccountPassword":""}`.
   * 
   * @example
   * testdata1
   */
  secretData?: string;
  /**
   * @remarks
   * The value type of the credential. Valid values:
   * - text
   * - binary
   * 
   * @example
   * binary
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the credential. Valid values:
   * - Generic: generic secret.  
   * - Rds: RDS credential.  
   * - Redis: Redis/Tair credential.
   * - RAMCredentials: RAM credential.  
   * - ECS: ECS credential.
   * - PolarDB: PolarDB credential.
   * 
   * @example
   * Generic
   */
  secretType?: string;
  /**
   * @remarks
   * The version number of the credential.
   * 
   * @example
   * v1
   */
  versionId?: string;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretResponseBody extends $dara.Model {
  /**
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/mydbconninfo
   */
  arn?: string;
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
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * 2022-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2dd3
   */
  requestId?: string;
  /**
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. The value of the `unit` field is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * mydbconninfo
   */
  secretName?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      DKMSInstanceId: 'DKMSInstanceId',
      extendedConfig: 'ExtendedConfig',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      DKMSInstanceId: 'string',
      extendedConfig: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
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


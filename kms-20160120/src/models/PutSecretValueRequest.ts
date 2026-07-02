// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The secret value. The value is encrypted and stored in the specified new version.
   * 
   * This parameter is required.
   * 
   * @example
   * importantdata
   */
  secretData?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * - text (default)
   * 
   * - binary
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * > When you access a secret in another Alibaba Cloud account, you must specify the ARN of the secret. The ARN of a secret is in the format of `acs:kms:${region}:${account}:secret/${secret-name}`.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret. The value must be unique in the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that are used to mark the new version. If you do not specify this parameter, KMS marks the new version with ACSCurrent.
   * 
   * @example
   * ["ACSCurrent","ACSNext"]
   */
  versionStages?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


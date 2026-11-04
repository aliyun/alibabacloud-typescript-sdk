// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The secret value. The secret value is encrypted and stored in the specified new version.
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
   * - text (default)
   * - binary
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the secret.
   * > When you access a secret that belongs to another Alibaba Cloud account, you must specify the ARN of the secret. The ARN of a secret is in the `acs:kms:${region}:${account}:secret/${secret-name}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version ID of the secret. The version ID must be unique within the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  versionId?: string;
  /**
   * @remarks
   * The version stages that are attached to the secret version when it is stored. If you do not specify this parameter, KMS attaches ACSCurrent to the new version by default.
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


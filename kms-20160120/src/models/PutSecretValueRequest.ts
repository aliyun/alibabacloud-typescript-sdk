// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The secret value. The value is encrypted and then stored in the new version.
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
   * *   text: This is the default value.
   * *   binary
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The new version of the secret value. Version numbers must be unique in each secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that are used to mark the new version. If you do not specify this parameter, Secrets Manager marks the new version with ACSCurrent.
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


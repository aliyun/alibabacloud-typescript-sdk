// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretVersionStageRequest extends $dara.Model {
  /**
   * @remarks
   * The version number of the secret. This parameter specifies that the version stage set by VersionStage is attached to this version.
   * 
   * > - You must specify at least one of RemoveFromVersion and MoveToVersion.
   * >
   * > - If you set VersionStage to ACSCurrent or ACSPrevious, you must specify this parameter.
   * 
   * @example
   * 002
   */
  moveToVersion?: string;
  /**
   * @remarks
   * The version number of the secret. This parameter specifies that the version stage set by VersionStage is removed from this version.
   * 
   * > You must specify at least one of RemoveFromVersion and MoveToVersion.
   * 
   * @example
   * 001
   */
  removeFromVersion?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * > To access a secret in a different Alibaba Cloud account, you must specify the ARN of the secret. The ARN is in the format of `acs:kms:${region}:${account}:secret/${secret-name}`.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version stage of the secret.
   * 
   * **Scenario 1: Add a version stage to a specified secret version.**
   * 
   * Specify this parameter and MoveToVersion. Do not specify RemoveFromVersion. This parameter can be set to ACSCurrent, ACSPrevious, or a custom stage.
   * 
   * **Scenario 2: Remove a version stage from a specified secret version.**
   * 
   * Specify this parameter and RemoveFromVersion. Do not specify MoveToVersion. This parameter must be set to a custom stage.
   * 
   * > ACSCurrent and ACSPrevious are system-reserved stages. You cannot directly remove them. You can only remove them from one secret version and attach them to another.
   * 
   * **Scenario 3: Remove a version stage from a specified secret version and attach it to another secret version.**
   * 
   * Specify this parameter, MoveToVersion, and RemoveFromVersion. This parameter can be set to ACSCurrent, ACSPrevious, or a custom stage.
   * 
   * This parameter is required.
   * 
   * @example
   * ACSCurrent
   */
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      moveToVersion: 'MoveToVersion',
      removeFromVersion: 'RemoveFromVersion',
      secretName: 'SecretName',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moveToVersion: 'string',
      removeFromVersion: 'string',
      secretName: 'string',
      versionStage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


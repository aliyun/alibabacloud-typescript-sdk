// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretVersionStageRequest extends $dara.Model {
  /**
   * @remarks
   * The version from which you want to remove the specified stage label.
   * 
   * >  You must specify at least one of the RemoveFromVersion and MoveToVersion parameters.
   * 
   * @example
   * 002
   */
  moveToVersion?: string;
  /**
   * @remarks
   * The specified stage label. Valid values:
   * 
   * *   ACSCurrent
   * *   ACSPrevious
   * *   Custom stage label
   * 
   * @example
   * 001
   */
  removeFromVersion?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **UpdateSecretVersionStage**.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The name of the secret.
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


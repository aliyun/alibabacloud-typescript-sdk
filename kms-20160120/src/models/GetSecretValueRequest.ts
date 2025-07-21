// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueRequest extends $dara.Model {
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether to obtain the extended configuration of the secret. Valid values:
   * 
   * *   true
   * *   false: This is the default value.
   * 
   * >  This parameter is ignored for a generic secret.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: boolean;
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
   * The version number of the secret value. If you specify this parameter, Secrets Manager returns the secret value of the specified version.
   * 
   * >  This parameter is ignored for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * 00000000000000000000000000000001
   */
  versionId?: string;
  /**
   * @remarks
   * The stage label that marks the secret version. If you specify this parameter, Secrets Manager returns the secret value of the version that is marked with the specified stage label.
   * 
   * Default value: ACSCurrent.
   * 
   * >  For a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret, Secrets Manager can return only the secret value of the version marked with ACSPrevious or ACSCurrent.
   * 
   * @example
   * ACSCurrent
   */
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      fetchExtendedConfig: 'FetchExtendedConfig',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      fetchExtendedConfig: 'boolean',
      secretName: 'string',
      versionId: 'string',
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


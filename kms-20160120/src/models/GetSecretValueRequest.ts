// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DryRun mode. Valid values:
   * 
   * - true: enables DryRun mode.
   * - false (default): disables DryRun mode.
   * 
   * DryRun mode is used to test API calls and verify whether you have the required permissions on the corresponding resources and whether the request parameters are correctly configured. When DryRun mode is enabled, KMS always returns a failure and provides the failure reason. Failure reasons include:
   * 
   * - DryRunOperationError: The request would succeed without the DryRun parameter.
   * - ValidationError: The parameters specified in the request are invalid.
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the extended configuration of the secret. Valid values:
   * 
   * - true: retrieves the extended configuration.
   * - false (default): does not retrieve the extended configuration.
   * 
   * > Generic secrets do not support extended configurations. This parameter is ignored if specified.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: boolean;
  /**
   * @example
   * { "AttestationDocument":"base64-encoded-attestion-document",  "KeyEncryptionAlgorithm":"RSAES_OAEP_SHA_256" }
   */
  recipient?: string;
  /**
   * @remarks
   * The secret name or secret Alibaba Cloud Resource Name (ARN).
   * >To access a secret in another Alibaba Cloud account, you must specify the secret ARN. The format of the secret ARN is `acs:kms:${region}:${account}:secret/${secret-name}`.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * > ApsaraDB RDS secrets, PolarDB secrets, Redis/Tair secrets, RAM secrets, and ECS secrets do not support specifying VersionId. This parameter is ignored if specified.
   * 
   * @example
   * v1
   */
  versionId?: string;
  /**
   * @remarks
   * The version stage. Default value: ACSCurrent.
   * 
   * If you specify this parameter, the secret value of the specified version stage is returned. If you do not specify this parameter, the secret value of the ACSCurrent version stage is returned.
   * > For ApsaraDB RDS secrets, PolarDB secrets, Redis/Tair secrets, RAM secrets, and ECS secrets, you can retrieve only the secret values of the ACSPrevious and ACSCurrent versions.
   * 
   * @example
   * ACSCurrent
   */
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      fetchExtendedConfig: 'FetchExtendedConfig',
      recipient: 'Recipient',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      fetchExtendedConfig: 'boolean',
      recipient: 'string',
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


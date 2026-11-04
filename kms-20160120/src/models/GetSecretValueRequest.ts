// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the dry run mode. Valid values:
   * 
   * - true: Enables the dry run mode.
   * - false: Disables the dry run mode. This is the default value.
   * 
   * The dry run mode is used to test API calls, verify whether you have the required permissions on the resources, and check whether the request parameters are correctly configured. After the dry run mode is enabled, KMS always returns a failure and provides the cause of the failure. The causes include:
   * 
   * - DryRunOperationError: The request would succeed if the DryRun parameter is not configured.
   * - ValidationError: The specified parameters in the request are invalid.
   * - AccessDeniedError: You do not have the permissions to perform the operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the extended configuration of the secret. Valid values:
   * 
   * - true: Retrieves the extended configuration.
   * - false: Does not retrieve the extended configuration. This is the default value.
   * 
   * > Generic secrets do not support extended configurations. If you specify this parameter for a generic secret, it is ignored.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: boolean;
  /**
   * @remarks
   * The remote attestation.
   * 
   * @example
   * { "AttestationDocument":"base64-encoded-attestion-document",  "KeyEncryptionAlgorithm":"RSAES_OAEP_SHA_256" }
   */
  recipient?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the secret.
   * > To access a secret that belongs to another Alibaba Cloud account, you must specify the ARN of the secret. The ARN of a secret is in the `acs:kms:${region}:${account}:secret/${secret-name}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * > ApsaraDB RDS secrets, PolarDB secrets, Redis/Tair secrets, RAM secrets, and ECS secrets do not support the VersionId parameter. If you specify this parameter, it is ignored.
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
   * > For ApsaraDB RDS secrets, PolarDB secrets, Redis/Tair secrets, RAM secrets, and ECS secrets, you can only retrieve the secret values of the versions marked with ACSPrevious and ACSCurrent.
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


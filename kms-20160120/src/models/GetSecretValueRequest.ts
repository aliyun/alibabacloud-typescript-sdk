// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable DryRun mode.
   * 
   * - true: Enabled  
   * - false (Default Value): Disabled  
   * 
   * DryRun mode is used for Testing API Calls to authenticate whether you have the required permissions on the specified resource and whether the Request Parameters are correctly configured. When DryRun mode is enabled, KMS always returns a failed response along with the failure reason. Possible failure reasons include:
   * 
   * - DryRunOperationError: The request would succeed if the DryRun parameter were not specified.  
   * - ValidationError: One or more parameters in the request are invalid.  
   * - AccessDeniedError: You do not have permission to execute this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * Indicates whether to retrieve the extended configuration of the credential. Valid values:
   * 
   * - true: Retrieve  
   * - false (Default Value): Do not retrieve  
   * 
   * > Generic secrets do not support extended configuration. If you specify this parameter, it will be ignored.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: boolean;
  /**
   * @remarks
   * The name or ARN of the credential.  
   * > When accessing a credential under another Alibaba Cloud account, you must specify the credential ARN. The ARN format is `acs:kms:${region}:${account}:secret/${secret-name}`.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * Version number.
   * 
   * > The VersionId parameter is not supported for RDS credentials, PolarDB credentials, Redis/Tair credentials, RAM credentials, and ECS credentials. If you specify this parameter, it will be ignored.
   * 
   * @example
   * v1
   */
  versionId?: string;
  /**
   * @remarks
   * The version stage. Default value: ACSCurrent.  
   * 
   * If you specify this parameter, the credential value of the specified version stage is returned. If you do not specify this parameter, the credential value of the ACSCurrent version stage is returned.  
   * > For RDS credentials, PolarDB credentials, Redis/Tair credentials, RAM credentials, and ECS credentials, you can retrieve only the credential values corresponding to the ACSPrevious or ACSCurrent version stages.
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


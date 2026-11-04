// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetSecretValueRequestSecretsList extends $dara.Model {
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
  fetchExtendedConfig?: string;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the secret.
   * > To access a secret that belongs to another Alibaba Cloud account, you must specify the ARN of the secret. The ARN is in the `acs:kms:${region}:${account}:secret/${secret-name}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version ID of the secret.
   * 
   * @example
   * v1
   */
  versionId?: string;
  /**
   * @remarks
   * The stage of the secret version. Default value: ACSCurrent.
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
      fetchExtendedConfig: 'FetchExtendedConfig',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchExtendedConfig: 'string',
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

export class BatchGetSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The list of secret information. You can query up to 20 different secrets at a time.
   */
  secretsList?: BatchGetSecretValueRequestSecretsList[];
  static names(): { [key: string]: string } {
    return {
      secretsList: 'SecretsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretsList: { 'type': 'array', 'itemType': BatchGetSecretValueRequestSecretsList },
    };
  }

  validate() {
    if(Array.isArray(this.secretsList)) {
      $dara.Model.validateArray(this.secretsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


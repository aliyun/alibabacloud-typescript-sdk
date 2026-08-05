// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetSecretValueRequestSecretsList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the extended configuration of the secret. Valid values:
   * 
   * - true: Retrieve the extended configuration.
   * - false (default): Do not retrieve the extended configuration.
   * 
   * > Generic secrets do not support extended configurations. This parameter is ignored for generic secrets.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: string;
  /**
   * @remarks
   * The secret name or secret Alibaba Cloud Resource Name (ARN).
   * >When accessing a secret in another Alibaba Cloud account, you must specify the secret ARN. The format of a secret ARN is `acs:kms:${region}:${account}:secret/${secret-name}`.
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


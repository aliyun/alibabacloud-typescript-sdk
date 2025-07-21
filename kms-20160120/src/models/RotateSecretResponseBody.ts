// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RotateSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/RdsSecret/Mysql5.4/MyCred
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10257c86-269d-43aa-aaf3-90ed4144bb7c
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret after the secret is rotated.
   * 
   * @example
   * 000000123
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


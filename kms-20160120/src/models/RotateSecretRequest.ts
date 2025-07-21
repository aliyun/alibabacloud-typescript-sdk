// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RotateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret after the secret is rotated.
   * 
   * >  The version number is used to ensure the idempotence of the request. Secrets Manager uses this version number to prevent your application from creating the same version of the secret when the application retries a request. If a version number already exists, Secrets Manager ignores the request for rotation and returns a success message.
   * 
   * This parameter is required.
   * 
   * @example
   * 000000123
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


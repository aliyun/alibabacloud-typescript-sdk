// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutSecretValueResponseBodyVersionStages extends $dara.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionStage)) {
      $dara.Model.validateArray(this.versionStage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f94ec9d3-2d10-4922-9a5c-5dcd5ebcb5e8
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The new version of the secret value.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that are used to mark the new version.
   */
  versionStages?: PutSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: PutSecretValueResponseBodyVersionStages,
    };
  }

  validate() {
    if(this.versionStages && typeof (this.versionStages as any).validate === 'function') {
      (this.versionStages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


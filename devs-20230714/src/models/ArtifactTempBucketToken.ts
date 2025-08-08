// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ArtifactTempBucketTokenCredentials extends $dara.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      securityToken: 'securityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactTempBucketToken extends $dara.Model {
  credentials?: ArtifactTempBucketTokenCredentials;
  ossBucketName?: string;
  ossObjectName?: string;
  ossRegion?: string;
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      ossRegion: 'ossRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: ArtifactTempBucketTokenCredentials,
      ossBucketName: 'string',
      ossObjectName: 'string',
      ossRegion: 'string',
    };
  }

  validate() {
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


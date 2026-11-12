// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWorkspaceOssMountRamAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


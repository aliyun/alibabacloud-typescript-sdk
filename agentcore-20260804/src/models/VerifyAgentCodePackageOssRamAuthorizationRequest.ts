// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAgentCodePackageOssRamAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the source OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent-bucket
   */
  ossBucketName?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'ossBucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


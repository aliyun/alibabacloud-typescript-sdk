// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket endpoint.
   * 
   * @example
   * *******.oss-cn-hangzhou.aliyuncs.com
   */
  ossBucketEndpoint?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * bucket-****
   */
  ossBucketName?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketEndpoint: 'oss_bucket_endpoint',
      ossBucketName: 'oss_bucket_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketEndpoint: 'string',
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


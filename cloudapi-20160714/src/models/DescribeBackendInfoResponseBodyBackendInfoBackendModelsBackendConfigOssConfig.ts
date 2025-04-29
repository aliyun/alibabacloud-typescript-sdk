// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * my_bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket.
   * 
   * @example
   * cn-hangzhou
   */
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ossRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


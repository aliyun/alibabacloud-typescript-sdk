// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskRequestOssDelivery extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 1234***
   */
  aliuid?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test_rlog
   */
  bucketName?: string;
  /**
   * @remarks
   * The prefix of the path in which you want to store logs.
   * 
   * @example
   * logriver-test/log
   */
  prefixPath?: string;
  /**
   * @remarks
   * The region in which the bucket is located.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      bucketName: 'BucketName',
      prefixPath: 'PrefixPath',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      bucketName: 'string',
      prefixPath: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


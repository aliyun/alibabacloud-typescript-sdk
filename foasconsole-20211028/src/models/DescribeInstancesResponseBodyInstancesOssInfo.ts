// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesOssInfo extends $dara.Model {
  accessId?: string;
  accessKey?: string;
  bucket?: string;
  bucketVersioningStatus?: string;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      bucketVersioningStatus: 'BucketVersioningStatus',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      bucket: 'string',
      bucketVersioningStatus: 'string',
      endpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskRequestS3Delivery extends $dara.Model {
  /**
   * @remarks
   * The access key ID of your Amazon S3 account.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The directory in the bucket.
   * 
   * @example
   * logriver-test/log
   */
  bucketPath?: string;
  /**
   * @remarks
   * The endpoint. This parameter is required when the S3Cmpt parameter is set to true.
   * 
   * @example
   * https://s3.oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
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
   * The region ID of the service.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether the service is compatible with Amazon S3.
   * 
   * @example
   * true
   */
  s3Cmpt?: boolean;
  /**
   * @remarks
   * The secret access key of your Amazon S3 account.
   * 
   * @example
   * LDSIKh***
   */
  secretKey?: string;
  serverSideEncryption?: boolean;
  vertifyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucketPath: 'BucketPath',
      endpoint: 'Endpoint',
      prefixPath: 'PrefixPath',
      region: 'Region',
      s3Cmpt: 'S3Cmpt',
      secretKey: 'SecretKey',
      serverSideEncryption: 'ServerSideEncryption',
      vertifyType: 'VertifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      prefixPath: 'string',
      region: 'string',
      s3Cmpt: 'boolean',
      secretKey: 'string',
      serverSideEncryption: 'boolean',
      vertifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


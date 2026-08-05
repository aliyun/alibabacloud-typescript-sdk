// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolarFsMappingAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
   */
  bucket?: string;
  /**
   * @remarks
   * The AccessKey ID for the storage bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  bucketAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret for the storage bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  bucketAccessKeySecret?: string;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in a specified region, including the cluster ID.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The destination path.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      bucketAccessKeyId: 'BucketAccessKeyId',
      bucketAccessKeySecret: 'BucketAccessKeySecret',
      DBClusterId: 'DBClusterId',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      bucketAccessKeyId: 'string',
      bucketAccessKeySecret: 'string',
      DBClusterId: 'string',
      path: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


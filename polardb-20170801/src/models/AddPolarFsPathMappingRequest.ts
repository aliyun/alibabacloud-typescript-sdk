// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddPolarFsPathMappingRequestCustomBucketPathList extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * Bucket1
   */
  bucket?: string;
  bucketAccessKeyId?: string;
  bucketAccessKeySecret?: string;
  /**
   * @remarks
   * The custom storage path.
   * 
   * @example
   * /data1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      bucketAccessKeyId: 'BucketAccessKeyId',
      bucketAccessKeySecret: 'BucketAccessKeySecret',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      bucketAccessKeyId: 'string',
      bucketAccessKeySecret: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPolarFsPathMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket and corresponding path information.
   */
  customBucketPathList?: AddPolarFsPathMappingRequestCustomBucketPathList[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
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
      customBucketPathList: 'CustomBucketPathList',
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customBucketPathList: { 'type': 'array', 'itemType': AddPolarFsPathMappingRequestCustomBucketPathList },
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customBucketPathList)) {
      $dara.Model.validateArray(this.customBucketPathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


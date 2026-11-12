// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsPathMappingRequestCustomBucketPathList extends $dara.Model {
  /**
   * @remarks
   * The custom storage bucket.
   * 
   * @example
   * Bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The custom storage path.
   * 
   * @example
   * /data
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

export class DeletePolarFsPathMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket and corresponding path information. Usage notes: This parameter is required. You must provide at least one element, and each element must include Bucket (the OSS internal endpoint, in the format of {bucket}.oss-{regionId}-internal.aliyuncs.com) and Path. If this parameter is not provided or an empty array is provided, the API returns InvalidPolarFsPathList.Malformed (400).
   * 
   * @example
   * []
   */
  customBucketPathList?: DeletePolarFsPathMappingRequestCustomBucketPathList[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
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
      customBucketPathList: { 'type': 'array', 'itemType': DeletePolarFsPathMappingRequestCustomBucketPathList },
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


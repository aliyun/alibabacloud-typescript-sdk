// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsPathMappingRequestCustomBucketPathList extends $dara.Model {
  /**
   * @example
   * Bucket
   */
  bucket?: string;
  /**
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
  customBucketPathList?: DeletePolarFsPathMappingRequestCustomBucketPathList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
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


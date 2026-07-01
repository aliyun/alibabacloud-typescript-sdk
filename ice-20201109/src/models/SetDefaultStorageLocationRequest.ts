// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultStorageLocationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket you created.
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * - When storageType is set to user_oss_bucket, temporary files are stored under this path. If path is empty or set to /, files are stored in the root directory.
   * 
   * - This field does not take effect for VOD storage.
   * 
   * @example
   * ims/dir
   */
  path?: string;
  /**
   * @remarks
   * Storage type:
   * 
   * - **vod_oss_bucket**: VOD-managed bucket.<br>
   *   Supports adding buckets managed by the VOD system or OSS buckets added within the VOD system. If no active buckets are available, you can add a new bucket in the ApsaraVideo VOD console. After activating ApsaraVideo VOD, the system assigns a storage address in each storage region. You must enable this address before use. For details, see [Manage Storage Buckets](https://help.aliyun.com/document_detail/86097.html).
   * 
   * - **user_oss_bucket**: User private bucket. Before adding an Object Storage address, you must activate Object Storage Service (OSS) and create a bucket. For details, see [Create a Bucket in the Console](https://help.aliyun.com/document_detail/31885.html).
   * 
   * @example
   * user_oss_bucket
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


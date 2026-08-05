// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultStorageLocationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket that you created.
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * - When StorageType is set to user_oss_bucket, temporary files are stored in this path. If the path is empty or set to /, files are stored in the root directory.
   * - This field does not take effect for VOD storage.
   * 
   * @example
   * ims/dir
   */
  path?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - vod_oss_bucket: VOD-managed bucket. You can add VOD system buckets and your own OSS buckets that have been added to the VOD system. If no bucket is available, you can create a bucket in the ApsaraVideo VOD console. The ApsaraVideo VOD system assigns a storage address in each storage region. After you activate ApsaraVideo VOD, you must enable the address before you can use it. For more information, see [Manage storage buckets](https://help.aliyun.com/document_detail/86097.html).
   * - user_oss_bucket: user-owned private bucket. Before adding an OSS storage address, you must activate OSS and create a storage bucket. For more information, see [Create a bucket in the console](https://help.aliyun.com/document_detail/31885.html).
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


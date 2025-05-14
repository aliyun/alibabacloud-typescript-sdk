// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket of the output endpoint. If the storage type is set to oss, the OSS bucket is returned.
   * 
   * @example
   * testbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The output endpoint. If the storage type is set to oss, the Object Storage Service (OSS) domain name is returned.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage type. The value can only be oss.
   * 
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
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


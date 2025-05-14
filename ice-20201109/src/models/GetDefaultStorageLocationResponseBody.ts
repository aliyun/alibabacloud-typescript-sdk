// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultStorageLocationResponseBody extends $dara.Model {
  /**
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @example
   * ice/dir
   */
  path?: string;
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * normal
   */
  status?: string;
  /**
   * @example
   * user_oss_bucket
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
      requestId: 'RequestId',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
      requestId: 'string',
      status: 'string',
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


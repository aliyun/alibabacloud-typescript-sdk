// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultStorageLocationRequest extends $dara.Model {
  /**
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @example
   * ims/dir
   */
  path?: string;
  /**
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


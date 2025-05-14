// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveSnapshotJobRequestSnapshotOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket of the snapshot output endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * testbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The output endpoint of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage type of the snapshot. The value can only be oss.
   * 
   * This parameter is required.
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


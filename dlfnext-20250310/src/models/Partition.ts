// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1747120676378
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * Indicates whether the tagging is complete.
   * 
   * @example
   * true
   */
  done?: boolean;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 1
   */
  fileCount?: number;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 1
   */
  fileSizeInBytes?: number;
  /**
   * @remarks
   * The creation time of the latest file.
   * 
   * @example
   * 1741701564261
   */
  lastFileCreationTime?: number;
  /**
   * @remarks
   * The extension options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The number of records.
   * 
   * @example
   * 1
   */
  recordCount?: number;
  /**
   * @remarks
   * The key-value pairs of the partition values.
   * 
   * @example
   * {"year":"2025"}
   */
  spec?: { [key: string]: any };
  /**
   * @remarks
   * The storage type conversion status.
   * 
   * @example
   * COMPLETE
   */
  storageAction?: string;
  /**
   * @remarks
   * The storage type conversion time.
   * 
   * @example
   * 1758189669915
   */
  storageActionTimestamp?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The total number of buckets.
   * 
   * @example
   * 1
   */
  totalBuckets?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      done: 'done',
      fileCount: 'fileCount',
      fileSizeInBytes: 'fileSizeInBytes',
      lastFileCreationTime: 'lastFileCreationTime',
      options: 'options',
      recordCount: 'recordCount',
      spec: 'spec',
      storageAction: 'storageAction',
      storageActionTimestamp: 'storageActionTimestamp',
      storageClass: 'storageClass',
      totalBuckets: 'totalBuckets',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      done: 'boolean',
      fileCount: 'number',
      fileSizeInBytes: 'number',
      lastFileCreationTime: 'number',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      recordCount: 'number',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      storageAction: 'string',
      storageActionTimestamp: 'number',
      storageClass: 'string',
      totalBuckets: 'number',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


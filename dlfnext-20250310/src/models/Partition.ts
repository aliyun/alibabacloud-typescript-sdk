// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  /**
   * @example
   * 1747120676378
   */
  createdAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @example
   * true
   */
  done?: boolean;
  /**
   * @example
   * 1
   */
  fileCount?: number;
  /**
   * @example
   * 1
   */
  fileSizeInBytes?: number;
  /**
   * @example
   * 1741701564261
   */
  lastFileCreationTime?: number;
  /**
   * @example
   * 1
   */
  recordCount?: number;
  /**
   * @example
   * {"year":"2025"}
   */
  spec?: { [key: string]: any };
  /**
   * @example
   * COMPLETE
   */
  storageAction?: string;
  /**
   * @example
   * 1758189669915
   */
  storageActionTimestamp?: number;
  /**
   * @example
   * STANDARD
   */
  storageClass?: string;
  totalBuckets?: number;
  /**
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
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
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


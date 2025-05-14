// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesDatasets extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * Indicates whether dynamic mounting was enabled. Default value: false.
   * 
   * @example
   * false
   */
  dynamic?: boolean;
  /**
   * @remarks
   * The read and write permissions. Valid values: RW and RO.
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The mount path in the container.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The type of the mount option.
   * 
   * @example
   * FastReadWrite
   */
  optionType?: string;
  /**
   * @remarks
   * The mount type of the dataset.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The dataset URI.
   * 
   * @example
   * oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      dynamic: 'Dynamic',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetVersion: 'string',
      dynamic: 'boolean',
      mountAccess: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


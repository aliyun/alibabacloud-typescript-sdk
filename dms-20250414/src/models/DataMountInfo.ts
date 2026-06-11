// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataMountInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the mount directory. The actual mount path is prefixed with /Workspace/data/.
   * 
   * @example
   * image
   */
  mountFolderName?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test-bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The prefix. If this parameter is not specified, the root directory is used.
   * 
   * @example
   * /prod
   */
  prefix?: string;
  /**
   * @remarks
   * Whether to mount the data volume as read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      mountFolderName: 'MountFolderName',
      ossBucket: 'OssBucket',
      prefix: 'Prefix',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountFolderName: 'string',
      ossBucket: 'string',
      prefix: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


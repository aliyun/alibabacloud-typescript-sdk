// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataMountInfo extends $dara.Model {
  /**
   * @example
   * image
   */
  mountFolderName?: string;
  /**
   * @example
   * test-bucket
   */
  ossBucket?: string;
  /**
   * @example
   * /prod
   */
  prefix?: string;
  /**
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


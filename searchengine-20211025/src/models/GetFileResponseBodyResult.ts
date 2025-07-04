// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * None
   */
  content?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * ha-cn-2r42p5oi202_xijie_test
   */
  dataSource?: string;
  /**
   * @remarks
   * Extended information
   */
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * ""
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ha-cn-2r42ostoc01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * ds=20210828
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataSource: 'dataSource',
      extend: 'extend',
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      name: 'name',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSource: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      fullPathName: 'string',
      isDir: 'boolean',
      name: 'string',
      partition: 'number',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


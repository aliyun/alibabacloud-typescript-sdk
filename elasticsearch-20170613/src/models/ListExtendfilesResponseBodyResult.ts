// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExtendfilesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The path of the driver file.
   */
  filePath?: string;
  /**
   * @remarks
   * The size of the driver file.
   * 
   * @example
   * 968668
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the driver file.
   * 
   * @example
   * mysql-connector-java-5.1.35.jar
   */
  name?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'filePath',
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


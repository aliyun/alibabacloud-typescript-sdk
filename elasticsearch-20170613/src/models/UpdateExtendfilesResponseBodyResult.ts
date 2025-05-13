// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExtendfilesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The size of the driver file. Unit: byte.
   * 
   * @example
   * 1853083
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the driver file.
   * 
   * @example
   * mysql-connector-java-6.0.2.jar
   */
  name?: string;
  /**
   * @remarks
   * The source of the driver file. This parameter is fixed as ORIGIN, which indicates that the driver file is retained.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


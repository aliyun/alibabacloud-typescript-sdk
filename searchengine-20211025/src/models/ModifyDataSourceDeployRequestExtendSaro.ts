// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceDeployRequestExtendSaro extends $dara.Model {
  /**
   * @remarks
   * The path of the SARO data source.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The version number of the SARO data source.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


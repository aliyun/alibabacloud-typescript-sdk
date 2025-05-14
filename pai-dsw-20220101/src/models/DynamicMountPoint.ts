// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DynamicMountPoint extends $dara.Model {
  options?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: 'string',
      rootPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


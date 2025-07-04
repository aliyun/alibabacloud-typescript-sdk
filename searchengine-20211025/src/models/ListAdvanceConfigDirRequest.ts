// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigDirRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the directory
   * 
   * This parameter is required.
   * 
   * @example
   * /zones/general
   */
  dirName?: string;
  static names(): { [key: string]: string } {
    return {
      dirName: 'dirName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


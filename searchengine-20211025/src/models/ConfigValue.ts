// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValueFiles } from "./ConfigValueFiles";


export class ConfigValue extends $dara.Model {
  /**
   * @remarks
   * The description of the offline configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files to be modified.
   */
  files?: ConfigValueFiles[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': ConfigValueFiles },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


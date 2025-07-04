// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAdvanceConfigRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /cluster.json
   */
  fullPathName?: string;
  /**
   * @remarks
   * Specifies whether the file is a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Specifies whether the file is a template.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * general
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


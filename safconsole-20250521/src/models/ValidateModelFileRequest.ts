// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateModelFileRequest extends $dara.Model {
  /**
   * @remarks
   * File path.
   * 
   * @example
   * saf/xxxxxxx/xxx.pmml
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


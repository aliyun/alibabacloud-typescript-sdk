// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTestFileRequest extends $dara.Model {
  /**
   * @remarks
   * Model ID.
   * 
   * @example
   * 456
   */
  customerModuleId?: string;
  /**
   * @remarks
   * File path.
   * 
   * @example
   * saf/xxxxxx/xxxxx.pmml
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'string',
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


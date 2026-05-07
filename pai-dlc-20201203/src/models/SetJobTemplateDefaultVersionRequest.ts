// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetJobTemplateDefaultVersionRequest extends $dara.Model {
  /**
   * @remarks
   * 要设置为默认的模板版本号
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


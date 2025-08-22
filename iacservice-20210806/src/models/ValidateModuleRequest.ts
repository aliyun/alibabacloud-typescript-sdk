// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateModuleRequest extends $dara.Model {
  /**
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * {"main.tf":"xxx"}
   */
  codeMap?: { [key: string]: any };
  /**
   * @example
   * Upload
   */
  source?: string;
  /**
   * @example
   * test
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      code: 'code',
      codeMap: 'codeMap',
      source: 'source',
      sourcePath: 'sourcePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      codeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    if(this.codeMap) {
      $dara.Model.validateMap(this.codeMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


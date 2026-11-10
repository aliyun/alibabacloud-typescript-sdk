// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateModuleRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * The template text. This parameter is required when source is set to Upload.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The configuration file map. You can pass multiple configuration files.
   * 
   * @example
   * {"main.tf":"xxx"}
   */
  codeMap?: { [key: string]: any };
  /**
   * @remarks
   * The template source. Valid values:
   * - Upload: text upload.
   * 
   * @example
   * Upload
   */
  source?: string;
  /**
   * @remarks
   * The source path.
   * 
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


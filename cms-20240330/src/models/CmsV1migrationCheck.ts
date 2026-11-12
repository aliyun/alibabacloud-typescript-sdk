// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CmsV1MigrationCheck extends $dara.Model {
  /**
   * @remarks
   * The check result code, where NAME_ indicates a naming issue and UNSUPPORTED_ indicates an unsupported resource.
   * 
   * @example
   * NAME_INVALID
   */
  code?: string;
  /**
   * @remarks
   * The check result description.
   * 
   * @example
   * Target name must contain 1 to 256 characters
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


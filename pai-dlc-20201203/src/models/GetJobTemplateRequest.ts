// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The version number. If you leave this parameter empty, the default version is returned. If you specify a number, the specified version is returned. If you specify all, all versions are returned.
   * 
   * @example
   * all
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


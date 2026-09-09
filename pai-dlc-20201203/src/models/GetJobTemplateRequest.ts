// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * If this parameter is not specified, the default version is returned. If a specific number is specified, the corresponding version is returned. If all is specified, all versions are returned.
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


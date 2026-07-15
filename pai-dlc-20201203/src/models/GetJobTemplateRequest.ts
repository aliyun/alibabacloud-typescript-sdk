// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The version to retrieve. If omitted, the default version is returned. Specify `all` to retrieve all versions.
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


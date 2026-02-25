// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PathConfig extends $dara.Model {
  /**
   * @remarks
   * applicationName
   * 
   * @example
   * applicationName
   */
  applicationName?: string;
  /**
   * @remarks
   * path
   * 
   * @example
   * /packages
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'applicationName',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


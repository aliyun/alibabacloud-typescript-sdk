// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallUserPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom plugins to install.
   * 
   * @example
   * [     {"name": "pluginName1.zip"},     {"name": "pluginName2.zip"} ]
   */
  body?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


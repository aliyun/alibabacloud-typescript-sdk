// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePluginRequest extends $dara.Model {
  /**
   * @example
   * [
   *   {
   *     "name": "pluginName",
   *     "elasticsearchVersion": "8.17.0",
   *     "version": "8.17.0",
   *     "fileVersion": "CAEQbxiBgIDMoJqe6hkiIGYzM****",
   *     "state": "UNINSTALLED",
   *     "source": "USER",
   *     "pluginType": "CUSTOM_PLUGIN"
   *   }
   * ]
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


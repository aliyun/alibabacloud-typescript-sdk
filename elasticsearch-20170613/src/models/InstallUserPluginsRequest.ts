// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallUserPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom plugins.
   * 
   * @example
   * [
   *   {
   *     "elasticsearchVersion": "8.17.0",
   *     "pluginType": "CUSTOM_PLUGIN",
   *     "name": "analysis-stempel",
   *     "description": "The Stempel Analysis plugin is ***",
   *     "version": "8.17.0",
   *     "fileVersion": "CAEQnwIYgYDAzYfNj4oaI***"
   *   }
   * ]
   */
  body?: string;
  /**
   * @remarks
   * Specifies whether to forcibly install custom user plugins. Default value: false. Instances with the legacy architecture do not support forced installation.
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-********************
   */
  applicationId?: string;
  /**
   * @remarks
   * The name and version of the new npm package.
   * 
   * This parameter is required.
   * 
   * @example
   * @larksuite/openclaw-lark@2026.4.7
   */
  npmPackage?: string;
  /**
   * @remarks
   * The ID of the plugin to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the upgrade. The default is true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      npmPackage: 'NpmPackage',
      pluginId: 'PluginId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      npmPackage: 'string',
      pluginId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


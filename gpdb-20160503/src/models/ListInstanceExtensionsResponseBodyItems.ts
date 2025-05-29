// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceExtensionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 1.0
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * citext usage
   */
  description?: string;
  /**
   * @remarks
   * The extension ID.
   * 
   * @example
   * 1
   */
  extensionId?: string;
  /**
   * @remarks
   * The names of the databases in which the extension is installed.
   * 
   * @example
   * test
   */
  installedDatabases?: string;
  /**
   * @remarks
   * Indicates whether an instance restart is required after you install the extension for the extension to take effect.
   * 
   * @example
   * false
   */
  isInstallNeedRestart?: boolean;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1.1
   */
  latestVersion?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * citext
   */
  name?: string;
  /**
   * @remarks
   * The status of the extension.
   * 
   * @example
   * installed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      description: 'Description',
      extensionId: 'ExtensionId',
      installedDatabases: 'InstalledDatabases',
      isInstallNeedRestart: 'IsInstallNeedRestart',
      latestVersion: 'LatestVersion',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      description: 'string',
      extensionId: 'string',
      installedDatabases: 'string',
      isInstallNeedRestart: 'boolean',
      latestVersion: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The plugin category.
   * 
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * OK
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the plugin.
   * 
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the plugin.
   * 
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The owner of the plugin.
   * 
   * @example
   * alton
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the plugin.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The plugins that this plugin depends on during installation.
   * 
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
   * @remarks
   * Specifies whether to restart the application. Valid values: true: Restart. false: Do not restart.
   * 
   * @example
   * true
   */
  restart?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      comment: 'Comment',
      defaultVersion: 'DefaultVersion',
      installedVersion: 'InstalledVersion',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      requires: 'Requires',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      comment: 'string',
      defaultVersion: 'string',
      installedVersion: 'string',
      name: 'string',
      owner: 'string',
      priority: 'string',
      requires: 'string',
      restart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExtensionsResponseBodyUninstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The plugin category.
   * 
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @remarks
   * The purpose of the plugin.
   * 
   * @example
   * OK
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the plugin.
   * 
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the plugin.
   * 
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The owner of the plugin.
   * 
   * @example
   * alton
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the plugin.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The plugins that this plugin depends on during installation.
   * 
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
   * @remarks
   * Specifies whether to restart the application. Valid values: true: Restart. false: Do not restart.
   * 
   * @example
   * true
   */
  restart?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      comment: 'Comment',
      defaultVersion: 'DefaultVersion',
      installedVersion: 'InstalledVersion',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      requires: 'Requires',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      comment: 'string',
      defaultVersion: 'string',
      installedVersion: 'string',
      name: 'string',
      owner: 'string',
      priority: 'string',
      requires: 'string',
      restart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about installed plugins in the specified database.
   */
  installedExtensions?: DescribeExtensionsResponseBodyInstalledExtensions[];
  /**
   * @remarks
   * The plugin overview information.
   * 
   * @example
   * Test ticket creation, please ignore
   */
  overview?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 309073D4-9C99-511C-AF84-0C67A6F52E67
   */
  requestId?: string;
  /**
   * @remarks
   * The information about uninstalled plugins in the specified database.
   */
  uninstalledExtensions?: DescribeExtensionsResponseBodyUninstalledExtensions[];
  static names(): { [key: string]: string } {
    return {
      installedExtensions: 'InstalledExtensions',
      overview: 'Overview',
      requestId: 'RequestId',
      uninstalledExtensions: 'UninstalledExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installedExtensions: { 'type': 'array', 'itemType': DescribeExtensionsResponseBodyInstalledExtensions },
      overview: 'string',
      requestId: 'string',
      uninstalledExtensions: { 'type': 'array', 'itemType': DescribeExtensionsResponseBodyUninstalledExtensions },
    };
  }

  validate() {
    if(Array.isArray(this.installedExtensions)) {
      $dara.Model.validateArray(this.installedExtensions);
    }
    if(Array.isArray(this.uninstalledExtensions)) {
      $dara.Model.validateArray(this.uninstalledExtensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


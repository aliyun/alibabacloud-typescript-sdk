// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The extension type.
   * 
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * OK
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the extension.
   * 
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the extension.
   * 
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The owner of the extension.
   * 
   * @example
   * alton
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the extension.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which this extension depends.
   * 
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
   * @remarks
   * Specifies whether to restart the application. \\`true\\`: The application is restarted. \\`false\\`: The application is not restarted.
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
   * The extension type.
   * 
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @remarks
   * The purpose of the extension.
   * 
   * @example
   * OK
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the extension.
   * 
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the extension.
   * 
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The owner of the extension.
   * 
   * @example
   * alton
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the extension.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which this extension depends.
   * 
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
   * @remarks
   * Specifies whether to restart the application. \\`true\\`: The application is restarted. \\`false\\`: The application is not restarted.
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
   * The extensions that are installed in the specified database.
   */
  installedExtensions?: DescribeExtensionsResponseBodyInstalledExtensions[];
  /**
   * @remarks
   * The overview of the extension.
   * 
   * @example
   * 测试建单，请忽略
   */
  overview?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 309073D4-9C99-511C-AF84-0C67A6F52E67
   */
  requestId?: string;
  /**
   * @remarks
   * The extensions that are not installed in the specified database.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostgresExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The extension category. Valid values:
   * 
   * - **external_access**: external access.
   * - **index_support**: index support.
   * - **information_stat**: information statistics.
   * - **geography_space**: geospatial.
   * - **vector_engine**: vector engine.
   * - **timing_engine**: time series engine.
   * - **data_type**: data type.
   * - **encrypt_secure**: encryption and security.
   * - **text_process**: text processing.
   * - **operation_maintenance**: application O&M.
   * - **self_develop**: self-developed.
   * 
   * @example
   * information_stat
   */
  category?: string;
  /**
   * @remarks
   * The purpose of the extension.
   * 
   * @example
   * PostgreSQL load profile repository and report builder
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the extension.
   * 
   * @example
   * 4.1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the extension.
   * 
   * @example
   * 4.1
   */
  installedVersion?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * pg_profile
   */
  name?: string;
  /**
   * @remarks
   * The user to which the extension belongs.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The extension priority. Valid values:
   * 
   * - **0**: displayed by default.
   * - **1**: displayed with priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which this extension depends during installation.
   * 
   * @example
   * {dblink,plpgsql}
   */
  requires?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * > This parameter is returned only for exclusive extensions (extensions written by the user). Each Alibaba Cloud account can view only its own exclusive extensions.
   * 
   * @example
   * 181578148294****
   */
  uid?: string;
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
      uid: 'Uid',
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
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostgresExtensionsResponseBodyUninstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The extension category.
   * 
   * @example
   * information_stat
   */
  category?: string;
  /**
   * @remarks
   * The purpose of the extension.
   * 
   * @example
   * PostgreSQL load profile repository and report builder
   */
  comment?: string;
  /**
   * @remarks
   * The default version of the extension.
   * 
   * @example
   * 4.1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The currently installed version of the extension.
   * 
   * @example
   * 4.1
   */
  installedVersion?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * pg_cron
   */
  name?: string;
  /**
   * @remarks
   * The user to which the extension belongs.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The extension priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which this extension depends during installation.
   * 
   * @example
   * {dblink,plpgsql}
   */
  requires?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * > This parameter is returned only for exclusive extensions (extensions written by the user). Each Alibaba Cloud account can view only its own exclusive extensions.
   * 
   * @example
   * 181578148294****
   */
  uid?: string;
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
      uid: 'Uid',
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
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostgresExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of installed extensions in the specified database.
   */
  installedExtensions?: DescribePostgresExtensionsResponseBodyInstalledExtensions[];
  /**
   * @remarks
   * The overview information about extensions.
   * 
   * @example
   * None
   */
  overview?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC
   */
  requestId?: string;
  /**
   * @remarks
   * The list of uninstalled extensions in the specified database.
   */
  uninstalledExtensions?: DescribePostgresExtensionsResponseBodyUninstalledExtensions[];
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
      installedExtensions: { 'type': 'array', 'itemType': DescribePostgresExtensionsResponseBodyInstalledExtensions },
      overview: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      uninstalledExtensions: { 'type': 'array', 'itemType': DescribePostgresExtensionsResponseBodyUninstalledExtensions },
    };
  }

  validate() {
    if(Array.isArray(this.installedExtensions)) {
      $dara.Model.validateArray(this.installedExtensions);
    }
    if(this.overview) {
      $dara.Model.validateMap(this.overview);
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


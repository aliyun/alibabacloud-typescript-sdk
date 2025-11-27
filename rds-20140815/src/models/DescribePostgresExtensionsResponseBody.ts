// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostgresExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  /**
   * @remarks
   * The category of the extension.
   * 
   * *   **external_access**
   * *   **index_support**
   * *   **information_stat**
   * *   **geography_space**
   * *   **vector_engine**
   * *   **timing_engine**
   * *   **data_type**
   * *   **encrypt_secure**
   * *   **text_process**
   * *   **operation_maintenance**
   * *   **self_develop**
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
   * The current version of the extension.
   * 
   * @example
   * 4.1
   */
  installedVersion?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * pg_profile
   */
  name?: string;
  /**
   * @remarks
   * The user of the extension.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the extension.
   * 
   * *   **0**: The extension is displayed by default.
   * *   **1**: The extension is preferentially displayed.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which the current extension depends when it is installed.
   * 
   * @example
   * {dblink,plpgsql}
   */
  requires?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * >  This parameter is returned only for self-developed exclusive extensions. You can view exclusive extensions only within your Alibaba Cloud account.
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
   * The category of the extension.
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
   * The current version of the extension.
   * 
   * @example
   * 4.1
   */
  installedVersion?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * pg_cron
   */
  name?: string;
  /**
   * @remarks
   * The user of the extension.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the extension.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The extensions on which the current extension depends when it is installed.
   * 
   * @example
   * {dblink,plpgsql}
   */
  requires?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * >  This parameter is returned only for self-developed exclusive extensions. You can view exclusive extensions only within your Alibaba Cloud account.
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
   * The list of extensions that are installed on the specified database.
   */
  installedExtensions?: DescribePostgresExtensionsResponseBodyInstalledExtensions[];
  /**
   * @remarks
   * The overview of the extension.
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
   * The list of extensions that are not installed on the specified database.
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


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


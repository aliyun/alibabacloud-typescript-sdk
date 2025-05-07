// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePostgresExtensionsResponseBodyInstalledExtensions } from "./DescribePostgresExtensionsResponseBodyInstalledExtensions";
import { DescribePostgresExtensionsResponseBodyUninstalledExtensions } from "./DescribePostgresExtensionsResponseBodyUninstalledExtensions";


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


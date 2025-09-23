// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  /**
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @example
   * OK
   */
  comment?: string;
  /**
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @example
   * jueming
   */
  name?: string;
  /**
   * @example
   * alton
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
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
   * @example
   * geography_space, self_develop
   */
  category?: string;
  /**
   * @example
   * OK
   */
  comment?: string;
  /**
   * @example
   * 7.7
   */
  defaultVersion?: string;
  /**
   * @example
   * 7.7
   */
  installedVersion?: string;
  /**
   * @example
   * jueming
   */
  name?: string;
  /**
   * @example
   * alton
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * ganos_networking
   */
  requires?: string;
  /**
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
  installedExtensions?: DescribeExtensionsResponseBodyInstalledExtensions[];
  overview?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
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


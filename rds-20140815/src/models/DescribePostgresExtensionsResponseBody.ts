// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostgresExtensionsResponseBodyInstalledExtensions extends $dara.Model {
  category?: string;
  comment?: string;
  defaultVersion?: string;
  installedVersion?: string;
  name?: string;
  owner?: string;
  priority?: string;
  requires?: string;
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
  category?: string;
  comment?: string;
  defaultVersion?: string;
  installedVersion?: string;
  name?: string;
  owner?: string;
  priority?: string;
  requires?: string;
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
  installedExtensions?: DescribePostgresExtensionsResponseBodyInstalledExtensions[];
  overview?: { [key: string]: any };
  requestId?: string;
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


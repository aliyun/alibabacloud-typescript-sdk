// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterVersionZonalResponseBodyDBRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release status of the database version. Valid values:
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is outdated. Do not upgrade to this version.
   * 
   * - **HighRisk**: The current version has critical bugs. Do not upgrade to this version.
   * 
   * - **Beta**: The current version is a beta version.
   * 
   * @example
   * Stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The code of the patch version for the database engine. Use this code to specify the target version for an upgrade.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The patch version of the database engine.
   * 
   * @example
   * 8.0.1.1.35.1
   */
  revisionVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      revisionVersionCode: 'RevisionVersionCode',
      revisionVersionName: 'RevisionVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      releaseType: 'string',
      revisionVersionCode: 'string',
      revisionVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionZonalResponseBodyProxyRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * - **LTS**: Long-Term Support (LTS) version.
   * 
   * - **BETA**: Preview version.
   * 
   * @example
   * LTS
   */
  releaseType?: string;
  /**
   * @remarks
   * The code of the patch version for the database proxy. Use this code to specify the target version for an upgrade.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The patch version of the database proxy.
   * 
   * @example
   * 2.8.24
   */
  revisionVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      revisionVersionCode: 'RevisionVersionCode',
      revisionVersionName: 'RevisionVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      releaseType: 'string',
      revisionVersionCode: 'string',
      revisionVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The latest version of the database kernel.
   * 
   * @example
   * 8.0.1.1.16
   */
  DBLatestVersion?: string;
  /**
   * @remarks
   * The minor version of the database engine.
   * 
   * - If `DBVersion` is **8.0**, the valid values are:
   * 
   *   - **8.0.2**
   * 
   *   - **8.0.1**
   * 
   * - If `DBVersion` is **5.7**, the value is **5.7.28**.
   * 
   * - If `DBVersion` is **5.6**, the value is **5.6.16**.
   * 
   * @example
   * 8.0.1
   */
  DBMinorVersion?: string;
  /**
   * @remarks
   * The patch version of the database engine.
   * 
   * @example
   * 8.0.1.1.7
   */
  DBRevisionVersion?: string;
  /**
   * @remarks
   * The list of upgradable versions.
   */
  DBRevisionVersionList?: DescribeDBClusterVersionZonalResponseBodyDBRevisionVersionList[];
  /**
   * @remarks
   * The major version of the database engine. Valid values:
   * 
   * - 8.0
   * 
   * - 5.7
   * 
   * - 5.6
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The status of the current minor version of the database. Valid values:
   * 
   * - Stable: The current version is stable.
   * 
   * - Old: The current version is outdated. Upgrade to the latest version.
   * 
   * - HighRisk: The current version has critical bugs. Upgrade to the latest version immediately.
   * 
   * - Beta: The current version is a beta version.
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @remarks
   * Indicates whether the current database kernel version is the latest version. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  isLatestVersion?: string;
  /**
   * @remarks
   * Indicates whether the current database proxy version is the latest version. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  isProxyLatestVersion?: string;
  /**
   * @remarks
   * The latest version of the database proxy.
   * 
   * @example
   * 2.4.17
   */
  proxyLatestVersion?: string;
  /**
   * @remarks
   * The version of the database proxy.
   * 
   * @example
   * 2.4.15
   */
  proxyRevisionVersion?: string;
  /**
   * @remarks
   * The list of upgradable database proxy versions.
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is outdated. Do not upgrade to this version.
   * 
   * - **HighRisk**: The current version has critical bugs. Do not upgrade to this version.
   * 
   * - **Beta**: The current version is a beta version.
   */
  proxyRevisionVersionList?: DescribeDBClusterVersionZonalResponseBodyProxyRevisionVersionList[];
  /**
   * @remarks
   * The status of the database proxy version. Valid values:
   * 
   * - Stable: The current version is stable.
   * 
   * - Old: The current version is outdated. Upgrade to the latest version.
   * 
   * - HighRisk: The current version has critical bugs. Upgrade to the latest version immediately.
   * 
   * - Beta: The current version is a beta version.
   * 
   * @example
   * Stable
   */
  proxyVersionStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 47921222-0D37-4133-8C0D-017DC3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLatestVersion: 'DBLatestVersion',
      DBMinorVersion: 'DBMinorVersion',
      DBRevisionVersion: 'DBRevisionVersion',
      DBRevisionVersionList: 'DBRevisionVersionList',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      isLatestVersion: 'IsLatestVersion',
      isProxyLatestVersion: 'IsProxyLatestVersion',
      proxyLatestVersion: 'ProxyLatestVersion',
      proxyRevisionVersion: 'ProxyRevisionVersion',
      proxyRevisionVersionList: 'ProxyRevisionVersionList',
      proxyVersionStatus: 'ProxyVersionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLatestVersion: 'string',
      DBMinorVersion: 'string',
      DBRevisionVersion: 'string',
      DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionZonalResponseBodyDBRevisionVersionList },
      DBVersion: 'string',
      DBVersionStatus: 'string',
      isLatestVersion: 'string',
      isProxyLatestVersion: 'string',
      proxyLatestVersion: 'string',
      proxyRevisionVersion: 'string',
      proxyRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionZonalResponseBodyProxyRevisionVersionList },
      proxyVersionStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBRevisionVersionList)) {
      $dara.Model.validateArray(this.DBRevisionVersionList);
    }
    if(Array.isArray(this.proxyRevisionVersionList)) {
      $dara.Model.validateArray(this.proxyRevisionVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


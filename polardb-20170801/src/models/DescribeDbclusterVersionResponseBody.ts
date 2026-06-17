// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterVersionResponseBodyDBRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes of the version.
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
   * The revision version code of the database engine. You can use this code to specify the target version for an upgrade.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The revision version of the database engine.
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

export class DescribeDBClusterVersionResponseBodyProxyRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes of the version.
   * 
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * - **LTS**: long-term support version.
   * 
   * - **BETA**: preview version.
   * 
   * @example
   * LTS
   */
  releaseType?: string;
  /**
   * @remarks
   * The revision version code of the database proxy engine. You can use this code to specify the target version for an upgrade.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The revision version of the database proxy engine.
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

export class DescribeDBClusterVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @example
   * 2.0.16.13.14.0
   */
  DBLatestStableVersion?: string;
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
   * - If `DBVersion` is **8.0**, valid values are:
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
   * The revision version of the database engine.
   * 
   * > For a PolarDB for MySQL 5.6 cluster, this parameter is returned only when the release date of the revision version is later than 20200831. Otherwise, this parameter is empty. For more information about the kernel version of a PolarDB for MySQL cluster, see [Kernel release notes](https://help.aliyun.com/document_detail/423884.html).
   * 
   * @example
   * 8.0.1.1.7
   */
  DBRevisionVersion?: string;
  /**
   * @remarks
   * A list of upgradable versions.
   */
  DBRevisionVersionList?: DescribeDBClusterVersionResponseBodyDBRevisionVersionList[];
  /**
   * @remarks
   * The major version of the database engine. Valid values:
   * 
   * - **8.0**
   * 
   * - **5.7**
   * 
   * - **5.6**
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The status of the current minor version of the database. Valid values:
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is outdated. Upgrade to the latest version.
   * 
   * - **HighRisk**: The current version has critical bugs. Upgrade to the latest version immediately.
   * 
   * - **Beta**: The current version is a beta version.
   * 
   * > For more information about how to upgrade the minor version of a database, see [Upgrade versions](https://help.aliyun.com/document_detail/158572.html).
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @example
   * true
   */
  isLatestStableVersion?: string;
  /**
   * @remarks
   * Indicates whether the current database kernel version is the latest version. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  isLatestVersion?: string;
  /**
   * @remarks
   * Indicates whether the current database proxy version is the latest version. Valid values:
   * 
   * - **true**
   * 
   * - **false**
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
   * A list of upgradable proxy versions.
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: This version is outdated and not recommended for upgrades.
   * 
   * - **HighRisk**: This version has critical bugs and is not recommended for upgrades.
   * 
   * - **Beta**: This is a beta version.
   */
  proxyRevisionVersionList?: DescribeDBClusterVersionResponseBodyProxyRevisionVersionList[];
  /**
   * @remarks
   * The status of the database proxy version. Valid values:
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is outdated. Upgrade to the latest version.
   * 
   * - **HighRisk**: The current version has critical bugs. Upgrade to the latest version immediately.
   * 
   * - **Beta**: The current version is a beta version.
   * 
   * > For more information about how to upgrade the database proxy version, see [Upgrade versions](https://help.aliyun.com/document_detail/158572.html).
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
      DBLatestStableVersion: 'DBLatestStableVersion',
      DBLatestVersion: 'DBLatestVersion',
      DBMinorVersion: 'DBMinorVersion',
      DBRevisionVersion: 'DBRevisionVersion',
      DBRevisionVersionList: 'DBRevisionVersionList',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      isLatestStableVersion: 'IsLatestStableVersion',
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
      DBLatestStableVersion: 'string',
      DBLatestVersion: 'string',
      DBMinorVersion: 'string',
      DBRevisionVersion: 'string',
      DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyDBRevisionVersionList },
      DBVersion: 'string',
      DBVersionStatus: 'string',
      isLatestStableVersion: 'string',
      isLatestVersion: 'string',
      isProxyLatestVersion: 'string',
      proxyLatestVersion: 'string',
      proxyRevisionVersion: 'string',
      proxyRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyProxyRevisionVersionList },
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


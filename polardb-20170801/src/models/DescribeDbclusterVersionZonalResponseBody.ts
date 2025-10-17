// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterVersionZonalResponseBodyDBRevisionVersionList extends $dara.Model {
  /**
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @example
   * Stable
   */
  releaseType?: string;
  /**
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
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
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @example
   * LTS
   */
  releaseType?: string;
  /**
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
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
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @example
   * 8.0.1.1.16
   */
  DBLatestVersion?: string;
  /**
   * @example
   * 8.0.1
   */
  DBMinorVersion?: string;
  /**
   * @example
   * 8.0.1.1.7
   */
  DBRevisionVersion?: string;
  DBRevisionVersionList?: DescribeDBClusterVersionZonalResponseBodyDBRevisionVersionList[];
  /**
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @example
   * true
   */
  isLatestVersion?: string;
  /**
   * @example
   * true
   */
  isProxyLatestVersion?: string;
  /**
   * @example
   * 2.4.17
   */
  proxyLatestVersion?: string;
  /**
   * @example
   * 2.4.15
   */
  proxyRevisionVersion?: string;
  proxyRevisionVersionList?: DescribeDBClusterVersionZonalResponseBodyProxyRevisionVersionList[];
  /**
   * @example
   * Stable
   */
  proxyVersionStatus?: string;
  /**
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


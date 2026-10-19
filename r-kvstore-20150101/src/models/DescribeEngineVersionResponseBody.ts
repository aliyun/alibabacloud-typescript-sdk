// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList extends $dara.Model {
  createTime?: string;
  level?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      level: 'Level',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseVersion: 'ReleaseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      level: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfo extends $dara.Model {
  releaseInfoList?: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList[];
  static names(): { [key: string]: string } {
    return {
      releaseInfoList: 'ReleaseInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInfoList: { 'type': 'array', 'itemType': DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.releaseInfoList)) {
      $dara.Model.validateArray(this.releaseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionRelease extends $dara.Model {
  releaseInfo?: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfo;
  /**
   * @remarks
   * The importance level of the version upgrade (recommended upgrade level). Valid values:
   * * 0: Normal.
   * * 1: Important.
   * * 2: Critical.
   * 
   * @example
   * 0
   */
  versionChangesLevel?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInfo: 'ReleaseInfo',
      versionChangesLevel: 'VersionChangesLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInfo: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfo,
      versionChangesLevel: 'string',
    };
  }

  validate() {
    if(this.releaseInfo && typeof (this.releaseInfo as any).validate === 'function') {
      (this.releaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyDBLatestMinorVersion extends $dara.Model {
  /**
   * @remarks
   * The importance level of the version change. Valid values:
   * * **0**: Normal.
   * * **1**: Important.
   * * **2**: Critical.
   * 
   * @example
   * 0
   */
  level?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 7.0.1.4
   */
  minorVersion?: string;
  /**
   * @remarks
   * The version evolution path from the current minor version of the instance to the latest minor version. This is consistent with the version documentation. You can refer to the version release notes for more detailed information.
   */
  versionRelease?: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionRelease;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      minorVersion: 'MinorVersion',
      versionRelease: 'VersionRelease',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      minorVersion: 'string',
      versionRelease: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionRelease,
    };
  }

  validate() {
    if(this.versionRelease && typeof (this.versionRelease as any).validate === 'function') {
      (this.versionRelease as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList extends $dara.Model {
  createTime?: string;
  level?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      level: 'Level',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseVersion: 'ReleaseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      level: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfo extends $dara.Model {
  releaseInfoList?: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList[];
  static names(): { [key: string]: string } {
    return {
      releaseInfoList: 'ReleaseInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInfoList: { 'type': 'array', 'itemType': DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.releaseInfoList)) {
      $dara.Model.validateArray(this.releaseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionRelease extends $dara.Model {
  releaseInfo?: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfo;
  /**
   * @remarks
   * The importance level of the version upgrade (recommended upgrade level). Valid values:
   * * 0: Normal.
   * * 1: Important.
   * * 2: Critical.
   * 
   * @example
   * 0
   */
  versionChangesLevel?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInfo: 'ReleaseInfo',
      versionChangesLevel: 'VersionChangesLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInfo: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfo,
      versionChangesLevel: 'string',
    };
  }

  validate() {
    if(this.releaseInfo && typeof (this.releaseInfo as any).validate === 'function') {
      (this.releaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBodyProxyLatestMinorVersion extends $dara.Model {
  /**
   * @remarks
   * The importance level of the version change. Valid values:
   * * **0**: Normal.
   * * **1**: Important.
   * * **2**: Critical.
   * 
   * @example
   * 0
   */
  level?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 7.0.6
   */
  minorVersion?: string;
  /**
   * @remarks
   * The version evolution path from the current minor version of the instance to the latest minor version. This is consistent with the version documentation. You can refer to the version release notes for more detailed information.
   */
  versionRelease?: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionRelease;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      minorVersion: 'MinorVersion',
      versionRelease: 'VersionRelease',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      minorVersion: 'string',
      versionRelease: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionRelease,
    };
  }

  validate() {
    if(this.versionRelease && typeof (this.versionRelease as any).validate === 'function') {
      (this.versionRelease as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the latest minor version to which the instance can be upgraded.
   */
  DBLatestMinorVersion?: DescribeEngineVersionResponseBodyDBLatestMinorVersion;
  /**
   * @remarks
   * The update notes for the minor version of the instance, including the release time, minor version number, type (such as new feature), and detailed description.
   * 
   * @example
   * {\\"releaseInfo\\":{\\"createTime\\":\\"2021-07-27\\",\\"level\\":1,\\"releaseVersion\\":\\"0.5.4\\",\\"releaseNote\\":\\"Feature update: Enhanced stability.\\"}],\\"versionChangesLevel\\":2}
   */
  DBVersionRelease?: string;
  /**
   * @remarks
   * Indicates whether the major version of the instance can be upgraded. Valid values:
   * * **true**: The major version can be upgraded.
   * * **false**: The major version cannot be upgraded, usually because it is already the latest version.
   * 
   * > To upgrade the major version, call the [ModifyInstanceMajorVersion](https://help.aliyun.com/document_detail/473776.html) operation.
   * 
   * @example
   * true
   */
  enableUpgradeMajorVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the minor version of the instance can be upgraded. Valid values:
   * 
   * * **true**: The minor version can be upgraded.
   * * **false**: The minor version is already the latest and cannot be upgraded. 
   * 
   * > To upgrade the minor version, call the [ModifyInstanceMinorVersion](https://help.aliyun.com/document_detail/473777.html) operation.
   * 
   * @example
   * true
   */
  enableUpgradeMinorVersion?: boolean;
  /**
   * @remarks
   * The database engine type. Valid values: **redis** and **memcache**.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether automatic minor version upgrade is enabled. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  isAutoUpgradeOpen?: string;
  /**
   * @remarks
   * Indicates whether the minor version of the instance is the latest. Valid values:
   * * **true**: Yes.
   * * **false**: No.
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the new TLS version is supported. Valid values:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * @example
   * 1
   */
  isNewSSLMode?: string;
  /**
   * @remarks
   * Indicates whether NGLB mode is enabled. Valid values:
   * * **0**: Disabled.
   * * **1**: Enabled.
   * 
   * @example
   * 1
   */
  isOpenNGLB?: string;
  /**
   * @remarks
   * Indicates whether the instance is a Redis-compatible version.
   * 
   * @example
   * 1
   */
  isRedisCompatibleVersion?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled. Valid values:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * @example
   * 1
   */
  isSSLEnable?: string;
  /**
   * @remarks
   * The major version of the instance.
   * 
   * @example
   * 5.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The current minor version of the instance.
   * 
   * @example
   * redis-5.0_0.5.0
   */
  minorVersion?: string;
  /**
   * @remarks
   * The information about the latest minor version to which the proxy node can be upgraded.
   */
  proxyLatestMinorVersion?: DescribeEngineVersionResponseBodyProxyLatestMinorVersion;
  /**
   * @remarks
   * The current minor version of the proxy node.
   * > This parameter is returned only for instances of the cluster or read/write splitting architecture.
   * 
   * @example
   * 6.6.0
   */
  proxyMinorVersion?: string;
  /**
   * @remarks
   * The update notes for the minor version of the proxy node, including the release time, minor version number, type (such as new feature), and detailed description.
   * > This parameter is returned only for instances of the cluster or read/write splitting architecture.
   * 
   * @example
   * {\\"releaseInfo\\":[{\\"createTime\\":\\"2021-06-08\\",\\"level\\":0,\\"releaseVersion\\":\\"6.6.2\\",\\"releaseNote\\":\\"New feature: Added support for some internal commands.\\"}],\\"versionChangesLevel\\":2}
   */
  proxyVersionRelease?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A52974D1-9D57-4805-86CC-92E6EDE8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBLatestMinorVersion: 'DBLatestMinorVersion',
      DBVersionRelease: 'DBVersionRelease',
      enableUpgradeMajorVersion: 'EnableUpgradeMajorVersion',
      enableUpgradeMinorVersion: 'EnableUpgradeMinorVersion',
      engine: 'Engine',
      isAutoUpgradeOpen: 'IsAutoUpgradeOpen',
      isLatestVersion: 'IsLatestVersion',
      isNewSSLMode: 'IsNewSSLMode',
      isOpenNGLB: 'IsOpenNGLB',
      isRedisCompatibleVersion: 'IsRedisCompatibleVersion',
      isSSLEnable: 'IsSSLEnable',
      majorVersion: 'MajorVersion',
      minorVersion: 'MinorVersion',
      proxyLatestMinorVersion: 'ProxyLatestMinorVersion',
      proxyMinorVersion: 'ProxyMinorVersion',
      proxyVersionRelease: 'ProxyVersionRelease',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBLatestMinorVersion: DescribeEngineVersionResponseBodyDBLatestMinorVersion,
      DBVersionRelease: 'string',
      enableUpgradeMajorVersion: 'boolean',
      enableUpgradeMinorVersion: 'boolean',
      engine: 'string',
      isAutoUpgradeOpen: 'string',
      isLatestVersion: 'boolean',
      isNewSSLMode: 'string',
      isOpenNGLB: 'string',
      isRedisCompatibleVersion: 'string',
      isSSLEnable: 'string',
      majorVersion: 'string',
      minorVersion: 'string',
      proxyLatestMinorVersion: DescribeEngineVersionResponseBodyProxyLatestMinorVersion,
      proxyMinorVersion: 'string',
      proxyVersionRelease: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBLatestMinorVersion && typeof (this.DBLatestMinorVersion as any).validate === 'function') {
      (this.DBLatestMinorVersion as any).validate();
    }
    if(this.proxyLatestMinorVersion && typeof (this.proxyLatestMinorVersion as any).validate === 'function') {
      (this.proxyLatestMinorVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


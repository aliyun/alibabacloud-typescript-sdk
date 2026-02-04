// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfoReleaseInfoList extends $dara.Model {
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 2022-11-21T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The importance level.
   * 
   * @example
   * 0
   */
  level?: string;
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * netbank1022
   */
  releaseNote?: string;
  /**
   * @remarks
   * The description of the minor versions to which the instance can be updated.
   * 
   * @example
   * ReleaseNoteEn
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The release version of EMR.
   * 
   * @example
   * EMR-5.7.0
   */
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
  /**
   * @remarks
   * The information about the minor versions.
   */
  releaseInfo?: DescribeEngineVersionResponseBodyDBLatestMinorVersionVersionReleaseReleaseInfo;
  /**
   * @remarks
   * The version update level, which indicates how strongly the update is recommended. Valid values:
   * 
   * *   0: regular
   * *   1: recommended
   * *   2: critical
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
   * The version update level. Valid values:
   * 
   * *   **0**: regular
   * *   **1**: recommended
   * *   **2**: critical
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
   * The version update path from the current minor version to the latest minor version of the instance, which is consistent with the version documentation. For more detailed information, you can directly refer to the release notes.
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
  /**
   * @remarks
   * The time when the version was released.
   * 
   * @example
   * 2022-08-23T14:26:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The version update level. Valid values:
   * 
   * *   **0**: regular
   * *   **1**: recommended
   * *   **2**: critical
   * 
   * @example
   * 0
   */
  level?: string;
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * x x x x
   */
  releaseNote?: string;
  /**
   * @remarks
   * The description of the minor versions to which the instance can be updated.
   * 
   * @example
   * ReleaseNoteEn
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The release version of EMR.
   * 
   * @example
   * EMR-5.9.1
   */
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
  /**
   * @remarks
   * The information about the minor versions.
   */
  releaseInfo?: DescribeEngineVersionResponseBodyProxyLatestMinorVersionVersionReleaseReleaseInfo;
  /**
   * @remarks
   * The version update level, which indicates how strongly the update is recommended. Valid values:
   * 
   * *   0: regular
   * *   1: recommended
   * *   2: critical
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
   * The version update level. Valid values:
   * 
   * *   **0**: regular
   * *   **1**: recommended
   * *   **2**: critical
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
   * The version update path from the current minor version to the latest minor version of the instance, which is consistent with the version documentation. For more detailed information, you can directly refer to the release notes.
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
   * The latest minor version to which the instance can be updated.
   */
  DBLatestMinorVersion?: DescribeEngineVersionResponseBodyDBLatestMinorVersion;
  /**
   * @remarks
   * The release notes for the minor version of the instance, including the release date, minor version number, release type such as new feature, and description.
   * 
   * @example
   * {\\"releaseInfo\\":{\\"createTime\\":\\"2021-07-27\\",\\"level\\":1,\\"releaseVersion\\":\\"0.5.4\\",\\"releaseNote\\":\\"Feature optimization: The stability is improved.\\"}],\\"versionChangesLevel\\":2}
   */
  DBVersionRelease?: string;
  /**
   * @remarks
   * Indicates whether the instance major version can be upgraded. Valid values:
   * 
   * *   **true**: The major version can be upgraded.
   * *   **false**: The major version is the latest version and cannot be upgraded.
   * 
   * >  To upgrade the major version, call the [ModifyInstanceMajorVersion](https://help.aliyun.com/document_detail/473776.html) operation.
   * 
   * @example
   * true
   */
  enableUpgradeMajorVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance minor version can be updated. Valid values:
   * 
   * *   **true**: The minor version can be updated.
   * *   **false**: The minor version is the latest version and cannot be updated.
   * 
   * >  To update the minor version, call the [ModifyInstanceMinorVersion](https://help.aliyun.com/document_detail/473777.html) operation.
   * 
   * @example
   * true
   */
  enableUpgradeMinorVersion?: boolean;
  /**
   * @remarks
   * The database engine. Valid values: **redis** and **memcache**.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether automatic minor version update is enabled. Valid values:
   * 
   * *   **0**: Automatic minor version update is disabled.
   * *   **1**: Automatic minor version update is enabled.
   * 
   * @example
   * 0
   */
  isAutoUpgradeOpen?: string;
  /**
   * @remarks
   * Indicates whether the instance uses the latest minor version. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether Transport Layer Security (TLS) is enabled. Valid values:
   * 
   * *   **1**: TLS is enabled.
   * *   **0**: TLS is disabled.
   * 
   * @example
   * 1
   */
  isNewSSLMode?: string;
  /**
   * @remarks
   * Indicates whether the NGLB mode is enabled. Valid values:
   * 
   * *   **0**: The NGLB mode is disabled.
   * *   **1**: The NGLB mode is enabled.
   * 
   * @example
   * 1
   */
  isOpenNGLB?: string;
  /**
   * @remarks
   * Indicates whether the instance runs a Redis version.
   * 
   * @example
   * 1
   */
  isRedisCompatibleVersion?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled. Valid values:
   * 
   * *   **1**: SSL is enabled.
   * *   **0**: TLS is disabled.
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
   * The latest minor version to which the proxy node can be updated.
   */
  proxyLatestMinorVersion?: DescribeEngineVersionResponseBodyProxyLatestMinorVersion;
  /**
   * @remarks
   * The current minor version of the proxy node.
   * 
   * >  This parameter is returned only for cluster and read/write splitting instances.
   * 
   * @example
   * 6.6.0
   */
  proxyMinorVersion?: string;
  /**
   * @remarks
   * The release notes for the minor version of proxy nodes. The release notes include the release date, minor version number, release type such as new feature, and description.
   * 
   * >  This parameter is returned only for cluster and read/write splitting instances.
   * 
   * @example
   * {\\"releaseInfo\\":[{\\"createTime\\":\\"2021-06-08\\",\\"level\\":0,\\"releaseVersion\\":\\"6.6.2\\",\\"releaseNote\\":\\"New feature: Some internal commands are supported.\\"}],\\"versionChangesLevel\\":2}
   */
  proxyVersionRelease?: string;
  /**
   * @remarks
   * The request ID.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwarelibSoftwareResponseBodyDataListVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the software version was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-08-05 18:03:58
   */
  createTime?: string;
  /**
   * @remarks
   * The number of times the software is downloaded from the client.
   * 
   * @example
   * 1
   */
  downloadTimes?: number;
  /**
   * @remarks
   * The MD5 hash value of the software package.
   * 
   * @example
   * 0b5824cdd509d3ed560e2d20d29a1bcb
   */
  md5?: string;
  /**
   * @remarks
   * The time when the software version was last modified.
   * 
   * @example
   * 2026-08-05 18:03:58
   */
  modifyTime?: string;
  /**
   * @remarks
   * The operating system applicable to the software package. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS with Apple silicon.
   * - **Mac(Intel)**: macOS with Intel processors.
   * 
   * @example
   * Windows
   */
  os?: string;
  /**
   * @remarks
   * The type of the software publisher. Valid values:
   * - **local**: Local upload.
   * - **thirdparty**: Third-party link.
   * 
   * @example
   * local
   */
  publisherType?: string;
  /**
   * @remarks
   * The ID of the software to which the version belongs.
   * 
   * @example
   * softwarelib-software-1da844a39729****
   */
  softwareId?: string;
  /**
   * @remarks
   * The name of the software package.
   * 
   * @example
   * test softwarename
   */
  softwarePkgName?: string;
  /**
   * @remarks
   * The size of the software package.
   * 
   * @example
   * 100
   */
  softwarePkgSize?: number;
  /**
   * @remarks
   * The download URL of the software package.
   * 
   * @example
   * https://****.com/****
   */
  softwareUrl?: string;
  /**
   * @remarks
   * The release status of the version. Valid values:
   * - **published**: Published.
   * - **unpublished**: Unpublished.
   * 
   * @example
   * published
   */
  status?: string;
  /**
   * @remarks
   * The software version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The ID of the software version.
   * 
   * @example
   * softwarelib-version-21ae186e2ac9****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadTimes: 'DownloadTimes',
      md5: 'Md5',
      modifyTime: 'ModifyTime',
      os: 'Os',
      publisherType: 'PublisherType',
      softwareId: 'SoftwareId',
      softwarePkgName: 'SoftwarePkgName',
      softwarePkgSize: 'SoftwarePkgSize',
      softwareUrl: 'SoftwareUrl',
      status: 'Status',
      version: 'Version',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadTimes: 'number',
      md5: 'string',
      modifyTime: 'string',
      os: 'string',
      publisherType: 'string',
      softwareId: 'string',
      softwarePkgName: 'string',
      softwarePkgSize: 'number',
      softwareUrl: 'string',
      status: 'string',
      version: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwarelibSoftwareResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated built-in software.
   * 
   * @example
   * softwarelib-software-1da844a39729****
   */
  builtinSoftwareId?: string;
  /**
   * @remarks
   * The software bundle ID used for verification.
   * 
   * @example
   * test software
   */
  checkBundleId?: string;
  /**
   * @remarks
   * The software name used for verification.
   * 
   * @example
   * test software
   */
  checkSoftwareName?: string;
  /**
   * @remarks
   * The ID of the software category.
   * 
   * @example
   * softwarelib-classify-61b7ccc63cae****
   */
  classifyId?: string;
  /**
   * @remarks
   * The time when the software was created. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1781748302
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the software.
   * 
   * @example
   * This is a demo software.
   */
  description?: string;
  /**
   * @remarks
   * The list of associated terminal device IDs.
   */
  devTags?: string[];
  /**
   * @remarks
   * The list of associated device group IDs.
   */
  deviceGroupIds?: string[];
  /**
   * @remarks
   * The number of times the software is manually downloaded from the client.
   * 
   * @example
   * 1
   */
  downloadTimes?: number;
  /**
   * @remarks
   * Indicates whether a new version is available for the software.
   * 
   * @example
   * false
   */
  hasNewVersion?: boolean;
  /**
   * @remarks
   * The URL of the software logo.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01mXKAQX1P3a5fbS0Dp_!!6000000001785-2-tps-40-40.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The maximum software version number for macOS with Apple silicon.
   * 
   * @example
   * 1.0.0
   */
  macAppleVersion?: string;
  /**
   * @remarks
   * The maximum software version number for macOS with Intel processors.
   * 
   * @example
   * 1.0.0
   */
  macIntelVersion?: string;
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * - **UserGroupAll**: All users.
   * - **UserGroupNormal**: Specified user groups.
   * - **DevTagNormal**: Specified devices.
   * - **DeviceGroupNormal**: Specified device groups.
   * - **DevTagAll**: All devices.
   * - **None**: Not configured.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The official download URL of the software.
   * 
   * @example
   * http://xxx.com/****
   */
  officialDownloadUrl?: string;
  /**
   * @remarks
   * The execution account. Only Windows is supported.
   * 
   * @example
   * admin
   */
  runAsAccount?: string;
  /**
   * @remarks
   * The ID of the software.
   * 
   * @example
   * softwarelib-software-1da844a39729****
   */
  softwareId?: string;
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * Indicates whether the source in the built-in library is deleted.
   * 
   * @example
   * false
   */
  sourceRemoved?: boolean;
  /**
   * @remarks
   * The source of the software. Valid values:
   * - **custom**: Custom software.
   * - **builtin**: Built-in software library.
   * 
   * @example
   * custom
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of associated user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of software versions. This field is not returned by the current API operation. For more information about how to view and manage software versions, see [Software management](https://www.alibabacloud.com/help/en/sase/user-guide/software-management).
   */
  versions?: ListSoftwarelibSoftwareResponseBodyDataListVersions[];
  /**
   * @remarks
   * The maximum software version number for Windows.
   * 
   * @example
   * 1.0.0
   */
  windowsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      builtinSoftwareId: 'BuiltinSoftwareId',
      checkBundleId: 'CheckBundleId',
      checkSoftwareName: 'CheckSoftwareName',
      classifyId: 'ClassifyId',
      createTime: 'CreateTime',
      description: 'Description',
      devTags: 'DevTags',
      deviceGroupIds: 'DeviceGroupIds',
      downloadTimes: 'DownloadTimes',
      hasNewVersion: 'HasNewVersion',
      logoUrl: 'LogoUrl',
      macAppleVersion: 'MacAppleVersion',
      macIntelVersion: 'MacIntelVersion',
      matchMode: 'MatchMode',
      officialDownloadUrl: 'OfficialDownloadUrl',
      runAsAccount: 'RunAsAccount',
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      sourceRemoved: 'SourceRemoved',
      sourceType: 'SourceType',
      userGroupIds: 'UserGroupIds',
      versions: 'Versions',
      windowsVersion: 'WindowsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinSoftwareId: 'string',
      checkBundleId: 'string',
      checkSoftwareName: 'string',
      classifyId: 'string',
      createTime: 'string',
      description: 'string',
      devTags: { 'type': 'array', 'itemType': 'string' },
      deviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      downloadTimes: 'number',
      hasNewVersion: 'boolean',
      logoUrl: 'string',
      macAppleVersion: 'string',
      macIntelVersion: 'string',
      matchMode: 'string',
      officialDownloadUrl: 'string',
      runAsAccount: 'string',
      softwareId: 'string',
      softwareName: 'string',
      sourceRemoved: 'boolean',
      sourceType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      versions: { 'type': 'array', 'itemType': ListSoftwarelibSoftwareResponseBodyDataListVersions },
      windowsVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devTags)) {
      $dara.Model.validateArray(this.devTags);
    }
    if(Array.isArray(this.deviceGroupIds)) {
      $dara.Model.validateArray(this.deviceGroupIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwarelibSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of software packages.
   */
  dataList?: ListSoftwarelibSoftwareResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of entries returned on each page. This parameter is not returned by the current API operation.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. This parameter is not returned by the current API operation.
   * 
   * @example
   * FFM+3L1WZbKngBeLWcDmQrzLuGDDwAw7JA5q2AjvTSJm9WyhQ0MwJoOWpky9ZhgcWfIgtGpZ+4NQX97+EIwsqUNQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of software packages that meet the query conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSoftwarelibSoftwareResponseBodyDataList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


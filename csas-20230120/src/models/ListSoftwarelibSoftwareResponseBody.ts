// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwarelibSoftwareResponseBodyDataListVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the software version was created.
   * 
   * @example
   * 2026-08-05 18:03:58
   */
  createTime?: string;
  /**
   * @remarks
   * The number of times the software has been downloaded from the client.
   * 
   * @example
   * 1
   */
  downloadTimes?: number;
  /**
   * @remarks
   * The MD5 value of the software package.
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
   * The operating system to which the software package applies. Valid values:
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
   * The software publisher type. Valid values:
   * - **local**: locally uploaded.
   * - **thirdparty**: third-party link.
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
   * The version publish status. Valid values:
   * - **published**: Published.
   * - **unpublished**: Not published.
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
   * The software version ID.
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
   * The associated built-in software ID.
   * 
   * @example
   * softwarelib-software-1da844a39729****
   */
  builtinSoftwareId?: string;
  /**
   * @remarks
   * The software BundleId used for verification.
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
   * The software classification ID.
   * 
   * @example
   * softwarelib-classify-61b7ccc63cae****
   */
  classifyId?: string;
  /**
   * @remarks
   * The time when the software was created, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1781748302
   */
  createTime?: string;
  /**
   * @remarks
   * The software description.
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
   * The number of times the software has been manually downloaded from the client.
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
   * The latest software version number for Mac (Apple).
   * 
   * @example
   * 1.0.0
   */
  macAppleVersion?: string;
  /**
   * @remarks
   * The latest software version number for Mac (Intel).
   * 
   * @example
   * 1.0.0
   */
  macIntelVersion?: string;
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: all users.
   * - **UserGroupNormal**: specified user groups.
   * - **DevTagNormal**: specified devices.
   * - **DeviceGroupNormal**: specified device groups.
   * - **DevTagAll**: all devices.
   * - **None**: not configured.
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
   * The software ID.
   * 
   * @example
   * softwarelib-software-1da844a39729****
   */
  softwareId?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * Indicates whether the built-in library source has been removed.
   * 
   * @example
   * false
   */
  sourceRemoved?: boolean;
  /**
   * @remarks
   * The software source. Valid values:
   * - **custom**: custom software.
   * - **builtin**: built-in software library.
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
   * The software version list. This field is not returned by this operation. Call [ListSoftwarelibVersion](~~ListSoftwarelibVersion~~) to query software versions.
   */
  versions?: ListSoftwarelibSoftwareResponseBodyDataListVersions[];
  /**
   * @remarks
   * The latest software version number for Windows.
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
   * The software list.
   */
  dataList?: ListSoftwarelibSoftwareResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of entries per page. This parameter is not returned by this operation.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is not returned by this operation.
   * 
   * @example
   * FFM+3L1WZbKngBeLWcDmQrzLuGDDwAw7JA5q2AjvTSJm9WyhQ0MwJoOWpky9ZhgcWfIgtGpZ+4NQX97+EIwsqUNQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of software entries that match the query conditions.
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


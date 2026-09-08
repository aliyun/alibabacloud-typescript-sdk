// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   */
  adminTag?: string[];
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   * 
   * @example
   * Recommended
   */
  appAdminTag?: string;
  /**
   * @remarks
   * The application registry identification information, returned as a string. This value can be used to match the name of an application registry entry.
   * 
   * @example
   * SampleEditor
   */
  appRegInfo?: string;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   */
  appTag?: string[];
  /**
   * @remarks
   * The application UID string, which is a different identifier from the numeric Id field.
   * 
   * @example
   * app-demo-001
   */
  appUid?: string;
  /**
   * @remarks
   * The authorization dimension of the application.
   * 
   * Valid values:
   * - auth_type_user: Authorized by user.
   * - auth_type_resource_group: Authorized by resource group.
   * 
   * @example
   * auth_type_user
   */
  authType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   */
  autoDeleteFlag?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   */
  autoInstallFlag?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * SILENCE_INSTALL
   */
  autoInstallType?: string;
  /**
   * @remarks
   * The new automatic installation scope policy. Use this field together with AuthType to determine the authorization dimension. Valid values:
   * - 0: Automatically install for all visible users or resource groups.
   * - 1: Automatically install for some visible users or resource groups.
   * - 2: Disable automatic installation.
   * - 99: Unknown policy.
   * 
   * This field describes the configuration scope and does not indicate that the installation has been completed on the endpoint.
   * 
   * @example
   * 1
   */
  autoInstallmentType?: number;
  /**
   * @remarks
   * The display category ID of the application. The category ID is a dynamic identifier and is not a fixed enumeration.
   * 
   * @example
   * 1001
   */
  cateId?: number;
  /**
   * @remarks
   * The display category name of the application.
   * 
   * @example
   * Office
   */
  cateName?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * cluster-demo-001
   */
  clusterUid?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Used for document editing
   */
  description?: string;
  /**
   * @remarks
   * The name of the application developer.
   * 
   * @example
   * Sample Software Company
   */
  developer?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The authorization distribution scope of the application. This field must be interpreted together with AuthType. An empty value does not necessarily mean that the application is not distributed.
   * 
   * Valid values:
   * - ALL: Distributed to all.
   * - DESIGNATED: Distributed to a specified scope.
   * - NOTDISTRO: Not distributed.
   * - UNKNOWN: Unknown scope.
   * 
   * The distribution target is determined by AuthType.
   * 
   * @example
   * ALL
   */
  distributeType?: string;
  /**
   * @remarks
   * The authorization end time of the application. The value is returned as a string with a time zone, in the format of date, the letter T, hours-minutes-seconds, 3-digit milliseconds, and a time zone offset without colons. The +0000 in the example indicates UTC. This field may be empty or not returned if no value is available.
   * 
   * @example
   * 2026-10-07T00:00:00.000+0000
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended information of the application, returned as a string. There is no unified fixed field structure.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The storage file name of the installation package, which may differ from the original file name.
   * 
   * @example
   * editor_1.2.3.exe
   */
  fileName?: string;
  /**
   * @remarks
   * The storage path of the installation package. This value is not a directly accessible download URL.
   * 
   * @example
   * packages/example/editor.exe
   */
  filePath?: string;
  /**
   * @remarks
   * The original file name of the installation package.
   * 
   * @example
   * editor.exe
   */
  fileRealName?: string;
  /**
   * @remarks
   * The creation time of the application record. The value is returned as a string with a time zone, in the format of date, the letter T, hours-minutes-seconds, 3-digit milliseconds, and a time zone offset without colons. The +0000 in the example indicates UTC. This field may be empty or not returned if no value is available.
   * 
   * @example
   * 2026-09-07T09:04:38.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the application record. The value is returned as a string with a time zone, in the format of date, the letter T, hours-minutes-seconds, 3-digit milliseconds, and a time zone offset without colons. The +0000 in the example indicates UTC. This field may be empty or not returned if no value is available.
   * 
   * @example
   * 2026-09-07T09:04:38.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * **[Deprecated]**
   */
  hasCert?: boolean;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://example.com/icons/editor.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The internal network icon URL of the application. Use this URL only when the corresponding network access conditions are met. The domain name in the example is for illustrative purposes only.
   * 
   * @example
   * https://example.com/icons/editor.png
   */
  iconUrlInternal?: string;
  /**
   * @remarks
   * The numeric ID of the application, used as the identity of the application and to associate what to do next.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * **[Deprecated]**
   */
  install?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  installMode?: number;
  /**
   * @remarks
   * Specifies whether elevated privilege installation is configured. This does not indicate the administrator identity of the caller.
   * 
   * Valid values:
   * - true: Elevated privilege installation is configured.
   * - false: Elevated privilege installation is not configured.
   * 
   * @example
   * false
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * TRUE
   */
  isFree?: string;
  /**
   * @remarks
   * **[Deprecated]**
   */
  isGame?: boolean;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   * 
   * @example
   * 0
   */
  isWhiteList?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * app-demo-001
   */
  itemCode?: string;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   * 
   * @example
   * Office
   */
  labels?: string;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   * 
   * @example
   * MANUAL
   */
  licenseType?: string;
  /**
   * @remarks
   * The English name of the management category of the application.
   * 
   * @example
   * Office
   */
  manageCateEnName?: string;
  /**
   * @remarks
   * The management category ID of the application, which may differ from the display category CateId.
   * 
   * @example
   * 1001
   */
  manageCateId?: number;
  /**
   * @remarks
   * The management category name of the application.
   * 
   * @example
   * Office
   */
  manageCateName?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SampleEditor
   */
  name?: string;
  /**
   * @remarks
   * The application type.
   * 
   * Valid values:
   * - ClientBase: Client-based application.
   * - WebBase: Web-based application.
   * 
   * @example
   * ClientBase
   */
  originAppType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The operating system type of the application.
   * 
   * Valid values:
   * - WINDOWS: Windows.
   * - LINUX: Linux.
   * - ANDROID: Android.
   * - UNKNOWN: Unknown operating system.
   * 
   * @example
   * WINDOWS
   */
  osType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * WINDOWS
   */
  ownerOs?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  paymentType?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  price?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The publish time of the application. The value is returned as a string with a time zone, in the format of date, the letter T, hours-minutes-seconds, 3-digit milliseconds, and a time zone offset without colons. The +0000 in the example indicates UTC. This field may be empty or not returned if no value is available.
   * 
   * @example
   * 2026-09-07T09:04:39.000+0000
   */
  publishDate?: string;
  /**
   * @remarks
   * The customer scope of the application.
   * 
   * Valid values:
   * - ENT: Enterprise.
   * - PER: Individual.
   * - BOTH: Enterprise and individual.
   * 
   * @example
   * ENT
   */
  publishType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  sandboxMode?: number;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   * 
   * @example
   * Edit Document
   */
  searchTag?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 1
   */
  silenceDeleteFlag?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * /uninstall /quiet
   */
  silenceDeleteParam?: string;
  /**
   * @remarks
   * Indicates whether silent installtion is supported. Valid values:
   * - 0: Not supported.
   * - 1: Supported.
   * 
   * This field indicates the application capability and does not represent the actual installation execute result.
   * 
   * @example
   * 1
   */
  silenceFlag?: number;
  /**
   * @remarks
   * The silent installtion parameters, used by the corresponding installation flow.
   * 
   * @example
   * /quiet
   */
  silenceParam?: string;
  /**
   * @remarks
   * The size of the installation package.
   * 
   * @example
   * 10485760
   */
  size?: number;
  /**
   * @remarks
   * The application source. Valid values:
   * - MARKET: Alibaba Cloud Marketplace application.
   * - TENANT: Tenant-uploaded application.
   * - UNKNOWN: Unknown source.
   * 
   * @example
   * TENANT
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the application authorization. The value is returned as a string with time zone information, in the format of date, the letter T, hours-minutes-seconds, 3-digit milliseconds, and a time zone offset without colons. The +0000 in the example indicates UTC. This field may be empty or not returned if no value is available.
   * 
   * @example
   * 2026-09-07T00:00:00.000+0000
   */
  startTime?: string;
  /**
   * @remarks
   * The application status. This field does not represent the installation status on the endpoint. Valid values:
   * - NORMAL: Normal.
   * - DELETE: Deleted.
   * - UNCHECK: Not reviewed or not verified.
   * - DISABLE: All versions are unavailable.
   * - UNKNOWN: Unknown status.
   * 
   * **The following historical statuses from the sandbox packaging and publishing process are deprecated. Do not use them: UNPACKED (not packaged), TESTING (packaged, pending testing), UNPUBLISHED (testing completed, not published), PUBLISHED (published).**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * sandbox
   */
  subAppType?: string;
  /**
   * @remarks
   * The secondary source of the application. Valid values:
   * - ALI_MARKET: Alibaba Cloud Marketplace.
   * - ISV: Independent software vendor.
   * - OPS: Operations channel.
   * - UNKNOWN: Unknown source.
   * 
   * @example
   * ISV
   */
  subSourceType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 0
   */
  subscribeCount?: number;
  /**
   * @remarks
   * The account ID of the application supplier or uploader.
   * 
   * @example
   * 1234567890123456
   */
  supplierId?: number;
  /**
   * @remarks
   * An internal field. We do not recommend that you use this field.
   */
  userTag?: string[];
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * 1.2.3
   */
  version?: string;
  /**
   * @remarks
   * The display name of the application version.
   * 
   * @example
   * 1.2.3 Release
   */
  versionName?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * editor_1.2.3.wam
   */
  wamFileName?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * packages/example/editor.wam
   */
  wamFilePath?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * editor.wam
   */
  wamFileRealName?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 1024
   */
  wamFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminTag: 'AdminTag',
      appAdminTag: 'AppAdminTag',
      appRegInfo: 'AppRegInfo',
      appTag: 'AppTag',
      appUid: 'AppUid',
      authType: 'AuthType',
      autoDeleteFlag: 'AutoDeleteFlag',
      autoInstallFlag: 'AutoInstallFlag',
      autoInstallType: 'AutoInstallType',
      autoInstallmentType: 'AutoInstallmentType',
      cateId: 'CateId',
      cateName: 'CateName',
      clusterUid: 'ClusterUid',
      description: 'Description',
      developer: 'Developer',
      discountPrice: 'DiscountPrice',
      distributeType: 'DistributeType',
      expireTime: 'ExpireTime',
      extend: 'Extend',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasCert: 'HasCert',
      iconUrl: 'IconUrl',
      iconUrlInternal: 'IconUrlInternal',
      id: 'Id',
      install: 'Install',
      installMode: 'InstallMode',
      isAdmin: 'IsAdmin',
      isFree: 'IsFree',
      isGame: 'IsGame',
      isWhiteList: 'IsWhiteList',
      itemCode: 'ItemCode',
      labels: 'Labels',
      licenseType: 'LicenseType',
      manageCateEnName: 'ManageCateEnName',
      manageCateId: 'ManageCateId',
      manageCateName: 'ManageCateName',
      name: 'Name',
      originAppType: 'OriginAppType',
      originalPrice: 'OriginalPrice',
      osType: 'OsType',
      ownerOs: 'OwnerOs',
      paymentType: 'PaymentType',
      price: 'Price',
      priority: 'Priority',
      publishDate: 'PublishDate',
      publishType: 'PublishType',
      sandboxMode: 'SandboxMode',
      searchTag: 'SearchTag',
      silenceDeleteFlag: 'SilenceDeleteFlag',
      silenceDeleteParam: 'SilenceDeleteParam',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      size: 'Size',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      subAppType: 'SubAppType',
      subSourceType: 'SubSourceType',
      subscribeCount: 'SubscribeCount',
      supplierId: 'SupplierId',
      userTag: 'UserTag',
      version: 'Version',
      versionName: 'VersionName',
      wamFileName: 'WamFileName',
      wamFilePath: 'WamFilePath',
      wamFileRealName: 'WamFileRealName',
      wamFileSize: 'WamFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminTag: { 'type': 'array', 'itemType': 'string' },
      appAdminTag: 'string',
      appRegInfo: 'string',
      appTag: { 'type': 'array', 'itemType': 'string' },
      appUid: 'string',
      authType: 'string',
      autoDeleteFlag: 'boolean',
      autoInstallFlag: 'boolean',
      autoInstallType: 'string',
      autoInstallmentType: 'number',
      cateId: 'number',
      cateName: 'string',
      clusterUid: 'string',
      description: 'string',
      developer: 'string',
      discountPrice: 'number',
      distributeType: 'string',
      expireTime: 'string',
      extend: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasCert: 'boolean',
      iconUrl: 'string',
      iconUrlInternal: 'string',
      id: 'number',
      install: 'boolean',
      installMode: 'number',
      isAdmin: 'boolean',
      isFree: 'string',
      isGame: 'boolean',
      isWhiteList: 'number',
      itemCode: 'string',
      labels: 'string',
      licenseType: 'string',
      manageCateEnName: 'string',
      manageCateId: 'number',
      manageCateName: 'string',
      name: 'string',
      originAppType: 'string',
      originalPrice: 'number',
      osType: 'string',
      ownerOs: 'string',
      paymentType: 'number',
      price: 'string',
      priority: 'number',
      publishDate: 'string',
      publishType: 'string',
      sandboxMode: 'number',
      searchTag: 'string',
      silenceDeleteFlag: 'number',
      silenceDeleteParam: 'string',
      silenceFlag: 'number',
      silenceParam: 'string',
      size: 'number',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      subAppType: 'string',
      subSourceType: 'string',
      subscribeCount: 'number',
      supplierId: 'number',
      userTag: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      versionName: 'string',
      wamFileName: 'string',
      wamFilePath: 'string',
      wamFileRealName: 'string',
      wamFileSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adminTag)) {
      $dara.Model.validateArray(this.adminTag);
    }
    if(Array.isArray(this.appTag)) {
      $dara.Model.validateArray(this.appTag);
    }
    if(Array.isArray(this.userTag)) {
      $dara.Model.validateArray(this.userTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code, returned as a string. The value is typically "200" when the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of applications on the current page. Each element represents an application.
   */
  data?: ListTenantAppResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code field in the business response. This field may be empty. The actual transmission status is determined by the HTTP response status.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The actual page number of the query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The actual number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request tracking ID. Provide this value when reporting issues.
   * 
   * @example
   * 11111111-2222-4333-8444-555555555555
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. Valid values:
   * - true: Succeeded.
   * - false: Failed.
   * 
   * Refer to the corresponding field descriptions for specific business meanings.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of applications that match the filter conditions. This value is not equal to the length of the array on the current page.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTenantAppResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


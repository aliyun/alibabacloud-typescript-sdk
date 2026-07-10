// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The color.
   * 
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @remarks
   * The color name.
   * 
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @remarks
   * The actual amount of data copied from the original table during a DMS lock-free schema change.
   * 
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * SOAR
   */
  creator?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-11-20T02:26:38Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1627545952000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 9953352
   */
  id?: number;
  /**
   * @remarks
   * The industry of the file to be analyzed. Default value: **common** (general industry). Select an appropriate industry so that the backend matches the applicable algorithm combination. Valid values: 
   * 
   * - **microVideo**: short video industry.
   * - **common**: general industry.
   * 
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @remarks
   * The number of likes.
   * 
   * @example
   * 100
   */
  likeCount?: number;
  /**
   * @remarks
   * Indicates whether the current user has liked this template.
   */
  liked?: boolean;
  /**
   * @remarks
   * The remediation action.
   * 
   * @example
   * {\\"memFrom\\": \\"text\\", \\"uid\\": \\"text\\", \\"labels\\": \\"jsonb\\", \\"content\\": \\"text\\", \\"fromId\\": \\"text\\", \\"uuid\\": \\"text\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b2c5a245c44946b99cf5435210bbb8b8?subSceneIds=728166
   */
  previewUrl?: string;
  /**
   * @remarks
   * The product version. Valid values:
   * - **BasicVersion**: Basic edition.
   * - **EnterpriseVersion**: Enterprise edition.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The Edition name.
   * 
   * @example
   * 1.0.1
   */
  productVersionName?: string;
  /**
   * @remarks
   * The number of shares.
   * 
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * de10bf7d782392a70f293a3b1f7bb8fc
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * - Maximum length: 128.
   * 
   * @example
   * cfdna6
   */
  templateName?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The number of views.
   * 
   * @example
   * 100
   */
  viewCount?: number;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 255
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      bizId: 'BizId',
      colorScheme: 'ColorScheme',
      colorSchemeName: 'ColorSchemeName',
      copyCount: 'CopyCount',
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      id: 'Id',
      industry: 'Industry',
      industryName: 'IndustryName',
      lastModifier: 'LastModifier',
      likeCount: 'LikeCount',
      liked: 'Liked',
      metadata: 'Metadata',
      previewUrl: 'PreviewUrl',
      productVersion: 'ProductVersion',
      productVersionName: 'ProductVersionName',
      shareCount: 'ShareCount',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      thumbnailUrl: 'ThumbnailUrl',
      viewCount: 'ViewCount',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      bizId: 'string',
      colorScheme: 'string',
      colorSchemeName: 'string',
      copyCount: 'number',
      creator: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      id: 'number',
      industry: 'string',
      industryName: 'string',
      lastModifier: 'string',
      likeCount: 'number',
      liked: 'boolean',
      metadata: 'string',
      previewUrl: 'string',
      productVersion: 'string',
      productVersionName: 'string',
      shareCount: 'number',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      thumbnailUrl: 'string',
      viewCount: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * memory
   */
  appType?: string;
  /**
   * @remarks
   * The BizId of the associated application instance.
   * 
   * @example
   * WS20260502160409000001
   */
  bizId?: string;
  /**
   * @remarks
   * The color.
   * 
   * @example
   * red
   */
  colorScheme?: string;
  /**
   * @remarks
   * The color name.
   * 
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @remarks
   * The actual amount of data copied from the original table during a DMS lock-free schema change.
   * 
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @remarks
   * The tenant user information.
   * 
   * @example
   * 208116853206125255
   */
  creator?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-09-17 20:43:21
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-03-18T10:03:56+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 1000039405002
   */
  id?: number;
  /**
   * @remarks
   * The industry. Default value: **common** (general industry). Valid values:
   * 
   * - **microVideo**: short video industry.
   * 
   * - **common**: general industry.
   * 
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @remarks
   * The number of likes.
   * 
   * @example
   * 100
   */
  likeCount?: number;
  /**
   * @remarks
   * Indicates whether the current user has liked this template.
   */
  liked?: boolean;
  /**
   * @remarks
   * The remediation content.
   * 
   * @example
   * {\\"knowledge_point\\":\\"text\\",\\"trunk_id\\":\\"text\\",\\"doc_name\\":\\"text\\",\\"knowledge_point_id\\":\\"text\\",\\"doc_id\\":\\"text\\",\\"trunk_content\\":\\"text\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b989c9ac526e4fb48e018805f43d5fb1?subSceneIds=816576
   */
  previewUrl?: string;
  /**
   * @remarks
   * The product version. Valid values:
   * - **BasicVersion**: Basic edition.
   * - **EnterpriseVersion**: Enterprise edition.
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The Edition name.
   * 
   * @example
   * 1.0.2
   */
  productVersionName?: string;
  /**
   * @remarks
   * The number of shares.
   * 
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @remarks
   * Valid values: unknown, init, testing, online.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 3802aefc8cb0003b71286c47afc83624
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * iem
   */
  templateName?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The number of views.
   * 
   * @example
   * 100
   */
  viewCount?: number;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      bizId: 'BizId',
      colorScheme: 'ColorScheme',
      colorSchemeName: 'ColorSchemeName',
      copyCount: 'CopyCount',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      industry: 'Industry',
      industryName: 'IndustryName',
      lastModifier: 'LastModifier',
      likeCount: 'LikeCount',
      liked: 'Liked',
      metadata: 'Metadata',
      previewUrl: 'PreviewUrl',
      productVersion: 'ProductVersion',
      productVersionName: 'ProductVersionName',
      shareCount: 'ShareCount',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      thumbnailUrl: 'ThumbnailUrl',
      viewCount: 'ViewCount',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      bizId: 'string',
      colorScheme: 'string',
      colorSchemeName: 'string',
      copyCount: 'number',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      industry: 'string',
      industryName: 'string',
      lastModifier: 'string',
      likeCount: 'number',
      liked: 'boolean',
      metadata: 'string',
      previewUrl: 'string',
      productVersion: 'string',
      productVersionName: 'string',
      shareCount: 'number',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      thumbnailUrl: 'string',
      viewCount: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The request result.
   */
  data?: ListAppTemplatesResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: ListAppTemplatesResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether a next page exists.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to the pagination limit, the server processes a maximum of 1000 recent records per query. If the results exceed 1000 records, **ResultLimit** is **true**. Narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
   * 
   * @example
   * False
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      next: 'Next',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyModuleData },
      next: ListAppTemplatesResponseBodyModuleNext,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.next && typeof (this.next as any).validate === 'function') {
      (this.next as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppTemplatesResponseBodyModule;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: ListAppTemplatesResponseBodyModule,
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


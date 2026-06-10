// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * application Type
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * application instance ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Color
   * 
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @remarks
   * Color name
   * 
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @remarks
   * The actual data volume of the original table copied during DMS lockless change.
   * 
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * SOAR
   */
  creator?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-11-20T02:26:38Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Updated At
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1627545952000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * primary key
   * 
   * @example
   * 9953352
   */
  id?: number;
  /**
   * @remarks
   * Industry of the file to be analyzed. Default value: **common** (general industry). Select an appropriate industry to enable the backend to match an algorithm combination suitable for that industry. Valid values:  
   * 
   * - **microVideo**: Short video industry.  
   * - **common**: General industry.
   * 
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @remarks
   * Industry Name
   * 
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @remarks
   * Editor ID
   * 
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @remarks
   * Number of likes.
   * 
   * @example
   * 100
   */
  likeCount?: number;
  /**
   * @remarks
   * Whether the current user has liked it
   */
  liked?: boolean;
  /**
   * @remarks
   * Remediation action.
   * 
   * @example
   * {\\"memFrom\\": \\"text\\", \\"uid\\": \\"text\\", \\"labels\\": \\"jsonb\\", \\"content\\": \\"text\\", \\"fromId\\": \\"text\\", \\"uuid\\": \\"text\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * Preview URL
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b2c5a245c44946b99cf5435210bbb8b8?subSceneIds=728166
   */
  previewUrl?: string;
  /**
   * @remarks
   * Edition. Valid values:  
   * - **BasicVersion**: Basic Edition.  
   * - **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * Edition name.
   * 
   * @example
   * 1.0.1
   */
  productVersionName?: string;
  /**
   * @remarks
   * Share Count
   * 
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @remarks
   * File Status
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * de10bf7d782392a70f293a3b1f7bb8fc
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name.  
   * - Maximum length: 128 characters.
   * 
   * @example
   * cfdna6
   */
  templateName?: string;
  /**
   * @remarks
   * Application thumbnail
   * 
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * View Count.
   * 
   * @example
   * 100
   */
  viewCount?: number;
  /**
   * @remarks
   * weight
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
   * Application Type
   * 
   * @example
   * memory
   */
  appType?: string;
  /**
   * @remarks
   * bizId of the associated application instance
   * 
   * @example
   * WS20260502160409000001
   */
  bizId?: string;
  /**
   * @remarks
   * Color
   * 
   * @example
   * red
   */
  colorScheme?: string;
  /**
   * @remarks
   * Color scheme name
   * 
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @remarks
   * The actual data volume of the original table copied during DMS lockless change.
   * 
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @remarks
   * Tenant User Information
   * 
   * @example
   * 208116853206125255
   */
  creator?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2025-09-17 20:43:21
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2026-03-18T10:03:56+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 1000039405002
   */
  id?: number;
  /**
   * @remarks
   * Industry. Default value: **common** (General Industry). Valid values:  
   * 
   * - **microVideo**: Short Video Industry.  
   * 
   * - **common**: General Industry.
   * 
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @remarks
   * Industry Name
   * 
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @remarks
   * ID of the last modifier
   * 
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @remarks
   * Like count.
   * 
   * @example
   * 100
   */
  likeCount?: number;
  /**
   * @remarks
   * Whether the current user has liked the item.
   */
  liked?: boolean;
  /**
   * @remarks
   * Fix Content.
   * 
   * @example
   * {\\"knowledge_point\\":\\"text\\",\\"trunk_id\\":\\"text\\",\\"doc_name\\":\\"text\\",\\"knowledge_point_id\\":\\"text\\",\\"doc_id\\":\\"text\\",\\"trunk_content\\":\\"text\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * Preview URL
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b989c9ac526e4fb48e018805f43d5fb1?subSceneIds=816576
   */
  previewUrl?: string;
  /**
   * @remarks
   * Edition. Valid values:  
   * - **BasicVersion**: Basic Edition.  
   * - **EnterpriseVersion**: Enterprise Edition.  
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * Edition name.
   * 
   * @example
   * 1.0.2
   */
  productVersionName?: string;
  /**
   * @remarks
   * Share Count
   * 
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @remarks
   * Possible values: unknown, init, testing, online
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 3802aefc8cb0003b71286c47afc83624
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
   * @example
   * iem
   */
  templateName?: string;
  /**
   * @remarks
   * Application thumbnail
   * 
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * View count.
   * 
   * @example
   * 100
   */
  viewCount?: number;
  /**
   * @remarks
   * Weight
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Request Result.
   */
  data?: ListAppTemplatesResponseBodyModuleData[];
  /**
   * @remarks
   * Decision weight
   */
  next?: ListAppTemplatesResponseBodyModuleNext;
  /**
   * @remarks
   * Whether there is a next page.
   * 
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether there is a previous page.
   * 
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * For the current query, aside from paging limits, the server-side processes at most the latest 1000 records. If the result exceeds 1000 records, **ResultLimit** is **true**; you should narrow the Time Range and search again. Otherwise, **ResultLimit** is **false**.
   * 
   * @example
   * False
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * Total number of pages.
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
   * Detailed reason for access denial.
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
   * Application name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic message. Not currently used. Ignore it.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Faulty parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results returned per query.  
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Response data
   */
  module?: ListAppTemplatesResponseBodyModule;
  /**
   * @remarks
   * Token for starting the next query. It is empty if there is no next query.
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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


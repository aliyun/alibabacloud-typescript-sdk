// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesResponseBodyModuleData extends $dara.Model {
  /**
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @example
   * SOAR
   */
  creator?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-11-20T02:26:38Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1627545952000
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 9953352
   */
  id?: number;
  /**
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @example
   * 100
   */
  likeCount?: number;
  liked?: boolean;
  /**
   * @example
   * {\\"memFrom\\": \\"text\\", \\"uid\\": \\"text\\", \\"labels\\": \\"jsonb\\", \\"content\\": \\"text\\", \\"fromId\\": \\"text\\", \\"uuid\\": \\"text\\"}
   */
  metadata?: string;
  /**
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b2c5a245c44946b99cf5435210bbb8b8?subSceneIds=728166
   */
  previewUrl?: string;
  /**
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @example
   * 1.0.1
   */
  productVersionName?: string;
  /**
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * de10bf7d782392a70f293a3b1f7bb8fc
   */
  templateId?: string;
  /**
   * @example
   * cfdna6
   */
  templateName?: string;
  /**
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @example
   * 100
   */
  viewCount?: number;
  /**
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
   * @example
   * memory
   */
  appType?: string;
  /**
   * @example
   * WS20260502160409000001
   */
  bizId?: string;
  /**
   * @example
   * red
   */
  colorScheme?: string;
  /**
   * @example
   * red
   */
  colorSchemeName?: string;
  /**
   * @example
   * 100
   */
  copyCount?: number;
  /**
   * @example
   * 208116853206125255
   */
  creator?: string;
  /**
   * @example
   * 2025-09-17 20:43:21
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-03-18T10:03:56+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1000039405002
   */
  id?: number;
  /**
   * @example
   * NOUSE
   */
  industry?: string;
  /**
   * @example
   * abc
   */
  industryName?: string;
  /**
   * @example
   * admin
   */
  lastModifier?: string;
  /**
   * @example
   * 100
   */
  likeCount?: number;
  liked?: boolean;
  /**
   * @example
   * {\\"knowledge_point\\":\\"text\\",\\"trunk_id\\":\\"text\\",\\"doc_name\\":\\"text\\",\\"knowledge_point_id\\":\\"text\\",\\"doc_id\\":\\"text\\",\\"trunk_content\\":\\"text\\"}
   */
  metadata?: string;
  /**
   * @example
   * https://preview-lyj.aliyuncs.com/preview/b989c9ac526e4fb48e018805f43d5fb1?subSceneIds=816576
   */
  previewUrl?: string;
  /**
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @example
   * 1.0.2
   */
  productVersionName?: string;
  /**
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * 3802aefc8cb0003b71286c47afc83624
   */
  templateId?: string;
  /**
   * @example
   * iem
   */
  templateName?: string;
  /**
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  /**
   * @example
   * 100
   */
  viewCount?: number;
  /**
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
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListAppTemplatesResponseBodyModuleData[];
  next?: ListAppTemplatesResponseBodyModuleNext;
  /**
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @example
   * False
   */
  resultLimit?: boolean;
  /**
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * or
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppTemplatesResponseBodyModule;
  /**
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
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


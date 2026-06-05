// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppTemplateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @example
   * WD20250703155602000001
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
   * 208614160512124381
   */
  creator?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-07-04T01:40:25Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * modify time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-06-05T11:16:57.785Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 16257
   */
  id?: number;
  industry?: string;
  /**
   * @example
   * indextry
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
   * {\\"operations\\":[{\\"operator\\":\\"replace\\",\\"oldMetaName\\":\\"character2_add\\",\\"newMetaType\\":\\"varchar(2)\\"}]}
   */
  metadata?: string;
  /**
   * @example
   * https://preview-lyj.aliyuncs.com/preview/4825a3849c2e49e1b48804c7f90b766f?subSceneIds=807648
   */
  previewUrl?: string;
  /**
   * @example
   * V2
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
   * @remarks
   * trial,draft,live,refunded,expired,released
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * 7cc17da1-b670-4be7-a6b4-0b3cdf7bf5f7
   */
  templateId?: string;
  /**
   * @example
   * siemProtect_All_
   */
  templateName?: string;
  /**
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @example
   * 100
   */
  viewCount?: number;
  /**
   * @example
   * 100
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

export class GetAppTemplateResponseBody extends $dara.Model {
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
   * ish-intelligence-store-platform-admin-web
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
  module?: GetAppTemplateResponseBodyModule;
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
      module: 'Module',
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
      module: GetAppTemplateResponseBodyModule,
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


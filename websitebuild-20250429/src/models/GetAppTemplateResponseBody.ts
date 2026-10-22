// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppTemplateResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The color scheme.
   * 
   * @example
   * red
   */
  colorScheme?: string;
  /**
   * @remarks
   * The color scheme name.
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
   * The user ID of the creator.
   * 
   * @example
   * 208614160512124381
   */
  creator?: string;
  /**
   * @remarks
   * The creation time in UTC. The date format follows ISO 8601.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-07-04T01:40:25Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time in ISO 8601 format. The time zone is UTC (Z).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-06-05T11:16:57.785Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 16257
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
   * common
   */
  industry?: string;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * indextry
   */
  industryName?: string;
  /**
   * @remarks
   * The last modifier.
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
   * Indicates whether the current user has liked the template.
   */
  liked?: boolean;
  /**
   * @remarks
   * <props="china">
   * 
   * The metadata map of the text chunk.
   * 
   * > The `file_path` field in the metadata map of a document search knowledge base is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document search knowledge base, if a chunk contains images, the image URL is returned in the `image_url` field of the metadata map, along with an expiration time.
   * 
   * 
   * <props="intl">
   * 
   * The metadata map of the text chunk.
   * 
   * > The `file_path` field in the metadata map of a document search knowledge base is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document search knowledge base, if a chunk contains images, the image URL is returned in the `image_url` field of the metadata map, along with an expiration time.
   * 
   * @example
   * {\\"operations\\":[{\\"operator\\":\\"replace\\",\\"oldMetaName\\":\\"character2_add\\",\\"newMetaType\\":\\"varchar(2)\\"}]}
   */
  metadata?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/4825a3849c2e49e1b48804c7f90b766f?subSceneIds=807648
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
   * V2
   */
  productVersion?: string;
  /**
   * @remarks
   * The edition name.
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
   * trial,draft,live,refunded,expired,released
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 7cc17da1-b670-4be7-a6b4-0b3cdf7bf5f7
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * siemProtect_All_
   */
  templateName?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * placeHolder
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
   * The weight of the hot word. Valid values: integers in the range of [1, 5].
   * Common value: 4.
   * If the effect is not obvious, increase the weight as needed. However, an excessively large weight may cause negative effects and lead to inaccurate recognition of other words.
   * 
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
   * @remarks
   * The access denial details.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
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
   * ish-intelligence-store-platform-admin-web
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Indicates whether the deletion was successful.
   */
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
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The root error message.
   * 
   * @example
   * System exception
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


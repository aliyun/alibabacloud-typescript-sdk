// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppTemplateResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Application type
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * color
   * 
   * @example
   * red
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
   * User ID of the creator.
   * 
   * @example
   * 208614160512124381
   */
  creator?: string;
  /**
   * @remarks
   * Creation UTC time, in ISO 8601 date format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-07-04T01:40:25Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Modify time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-06-05T11:16:57.785Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * Industry. Default value: **common** (general industry). Valid values:
   * 
   * - **microVideo**: Short video industry.
   * 
   * - **common**: General industry.
   * 
   * @example
   * 通用
   */
  industry?: string;
  /**
   * @remarks
   * Industry name.
   * 
   * @example
   * indextry
   */
  industryName?: string;
  /**
   * @remarks
   * Last modifier
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
   * Whether the current user has liked it
   */
  liked?: boolean;
  /**
   * @remarks
   * <props="china">
   * 
   * Map of metadata for text segmentation.
   * 
   * > In document-search-type knowledge bases, the `file_path` field in the metadata Map is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document-search-type knowledge base, if a segment contains an image, the image URL will be exposed through the `image_url` field in the metadata Map, along with a time-to-live (TTL).
   * 
   * 
   * <props="intl">
   * 
   * Map of metadata for text segmentation.
   * 
   * > In document-search-type knowledge bases, the `file_path` field in the metadata Map is meaningless. Do not use it in your business code.
   * 
   * > When retrieving a document-search-type knowledge base, if a segment contains an image, the image URL will be exposed through the `image_url` field in the metadata Map, along with a time-to-live (TTL).
   * 
   * @example
   * {\\"operations\\":[{\\"operator\\":\\"replace\\",\\"oldMetaName\\":\\"character2_add\\",\\"newMetaType\\":\\"varchar(2)\\"}]}
   */
  metadata?: string;
  /**
   * @remarks
   * Preview URL
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/4825a3849c2e49e1b48804c7f90b766f?subSceneIds=807648
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
   * V2
   */
  productVersion?: string;
  /**
   * @remarks
   * Edition Name.
   * 
   * @example
   * 1.0.2
   */
  productVersionName?: string;
  /**
   * @remarks
   * Share count
   * 
   * @example
   * 100
   */
  shareCount?: number;
  /**
   * @remarks
   * trial, draft, live, refunded, expired, released
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 7cc17da1-b670-4be7-a6b4-0b3cdf7bf5f7
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
   * @example
   * siemProtect_All_
   */
  templateName?: string;
  /**
   * @remarks
   * application thumbnail
   * 
   * @example
   * placeHolder
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
   * Hot word weight, an integer in the range [1, 5].  
   * Common value: 4.  
   * If the effect is not obvious, you can moderately increase the weight. However, if the weight is too high, it may cause negative effects and reduce the accuracy of detecting other words.
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
   * permission denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App Name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
   */
  appName?: string;
  /**
   * @remarks
   * dynamic error Code
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * whether deletion succeeded
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * abnormal message
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


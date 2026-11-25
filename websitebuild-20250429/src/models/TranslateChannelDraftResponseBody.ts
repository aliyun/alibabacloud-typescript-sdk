// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateChannelDraftResponseBodyModuleCoverImages extends $dara.Model {
  /**
   * @remarks
   * The ID of the file in the material center.
   * 
   * @example
   * material-file-demo-001
   */
  materialFileId?: string;
  /**
   * @remarks
   * The CDN URL of the image.
   * 
   * @example
   * oss://anchashiscan.oss-cn-hangzhou.aliyuncs.com/prodpopscanBnlK054f
   */
  ossUrl?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  static names(): { [key: string]: string } {
    return {
      materialFileId: 'MaterialFileId',
      ossUrl: 'OssUrl',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialFileId: 'string',
      ossUrl: 'string',
      sortOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateChannelDraftResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The AI adaptation status. Valid values: NONE, ADAPTING, DONE, and FAILED.
   * 
   * @example
   * DONE
   */
  adaptStatus?: string;
  /**
   * @remarks
   * The adapted content for the channel.
   * 
   * @example
   * Introduces the main features and usage of the website
   */
  adaptedContent?: string;
  /**
   * @remarks
   * The adapted title for the channel.
   * 
   * @example
   * Website features and user guide
   */
  adaptedTitle?: string;
  /**
   * @remarks
   * The channel enumeration.
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * The snapshot of the publishing account.
   * 
   * @example
   * social-account-demo-001
   */
  channelAccount?: string;
  /**
   * @remarks
   * The display name of the publishing account.
   * 
   * @example
   * Sample publishing account
   */
  channelAccountName?: string;
  /**
   * @remarks
   * The display name of the channel.
   * 
   * @example
   * channel_905
   */
  channelName?: string;
  /**
   * @remarks
   * The type of the channel. Valid values: DOMESTIC, OVERSEA, and INTERNAL.
   * 
   * @example
   * wechat
   */
  channelType?: string;
  /**
   * @remarks
   * The list of cover images for the channel.
   */
  coverImages?: TranslateChannelDraftResponseBodyModuleCoverImages[];
  /**
   * @remarks
   * The ID of the channel draft.
   * 
   * @example
   * 85e219ef-c458-4a0d-a249-2776864143bb
   */
  draftId?: string;
  /**
   * @remarks
   * The ID returned by the platform.
   * 
   * @example
   * a367d19c02ff004ac20a7b2078066fe1f370
   */
  externalId?: string;
  /**
   * @remarks
   * The redirect URL of the platform.
   * 
   * @example
   * https://net-video.mistong.com:10160/api/preview/video/2026/02/02/7181627703f6437480a7bffe8ed1e7b0_20260202100338.mp4
   */
  externalUrl?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Invalid parameter
   */
  failReason?: string;
  /**
   * @remarks
   * The JSON string of channel-specific publishing fields.
   * 
   * @example
   * {}
   */
  publishConfig?: string;
  /**
   * @remarks
   * The publishing time. The value is a millisecond timestamp.
   * 
   * @example
   * 1767225600000
   */
  publishedAt?: number;
  /**
   * @remarks
   * The status. Valid values: EDITING, PUBLISHING, SUCCESS, and FAILED.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adaptStatus: 'AdaptStatus',
      adaptedContent: 'AdaptedContent',
      adaptedTitle: 'AdaptedTitle',
      channel: 'Channel',
      channelAccount: 'ChannelAccount',
      channelAccountName: 'ChannelAccountName',
      channelName: 'ChannelName',
      channelType: 'ChannelType',
      coverImages: 'CoverImages',
      draftId: 'DraftId',
      externalId: 'ExternalId',
      externalUrl: 'ExternalUrl',
      failReason: 'FailReason',
      publishConfig: 'PublishConfig',
      publishedAt: 'PublishedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptStatus: 'string',
      adaptedContent: 'string',
      adaptedTitle: 'string',
      channel: 'string',
      channelAccount: 'string',
      channelAccountName: 'string',
      channelName: 'string',
      channelType: 'string',
      coverImages: { 'type': 'array', 'itemType': TranslateChannelDraftResponseBodyModuleCoverImages },
      draftId: 'string',
      externalId: 'string',
      externalUrl: 'string',
      failReason: 'string',
      publishConfig: 'string',
      publishedAt: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coverImages)) {
      $dara.Model.validateArray(this.coverImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateChannelDraftResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application to query.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic code. This field is currently unused and can be ignored.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The invalid parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   */
  module?: TranslateChannelDraftResponseBodyModule;
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
   * System exception
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
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
      module: TranslateChannelDraftResponseBodyModule,
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


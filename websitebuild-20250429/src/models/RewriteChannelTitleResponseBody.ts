// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RewriteChannelTitleResponseBodyModuleCoverImages extends $dara.Model {
  /**
   * @remarks
   * The file ID in the material center.
   * 
   * @example
   * xx
   */
  materialFileId?: string;
  /**
   * @remarks
   * The CDN URL of the image.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/30516570
   */
  ossUrl?: string;
  /**
   * @remarks
   * The sort order number.
   * 
   * @example
   * Ascending
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

export class RewriteChannelTitleResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The AI adaptation status. Valid values: NONE, ADAPTING, DONE, and FAILED.
   * 
   * @example
   * xxx
   */
  adaptStatus?: string;
  /**
   * @remarks
   * The channel-adapted content.
   * 
   * @example
   * xxx
   */
  adaptedContent?: string;
  /**
   * @remarks
   * The channel-adapted title.
   * 
   * @example
   * xxx
   */
  adaptedTitle?: string;
  /**
   * @remarks
   * The channel enumeration value.
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * The publishing account snapshot.
   * 
   * @example
   * xxx
   */
  channelAccount?: string;
  /**
   * @remarks
   * The display name of the publishing account.
   * 
   * @example
   * xx
   */
  channelAccountName?: string;
  /**
   * @remarks
   * The display name of the channel.
   * 
   * @example
   * sipmplm
   */
  channelName?: string;
  /**
   * @remarks
   * The channel type. Valid values: DOMESTIC, OVERSEA, and INTERNAL.
   * 
   * @example
   * wechat
   */
  channelType?: string;
  /**
   * @remarks
   * The list of channel cover images.
   */
  coverImages?: RewriteChannelTitleResponseBodyModuleCoverImages[];
  /**
   * @remarks
   * The channel draft ID.
   * 
   * @example
   * draft-789
   */
  draftId?: string;
  /**
   * @remarks
   * The ID returned by the platform.
   * 
   * @example
   * a2b36d4b1dab614623187f01f01d138e809d
   */
  externalId?: string;
  /**
   * @remarks
   * The redirect URL of the platform.
   * 
   * @example
   * https://net-video.mistong.com:10160/api/preview/video/2025/11/03/53a90dd9bdfa44bda53aa2534bb8f463_20251103100032.mp4
   */
  externalUrl?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Invalid parameter
   */
  failReason?: string;
  /**
   * @remarks
   * The channel-specific publishing configuration in JSON format.
   * 
   * @example
   * xx
   */
  publishConfig?: string;
  /**
   * @remarks
   * The publishing time, in millisecond timestamp.
   * 
   * @example
   * xx
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
      coverImages: { 'type': 'array', 'itemType': RewriteChannelTitleResponseBodyModuleCoverImages },
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

export class RewriteChannelTitleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission verification failure.
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
   * abc
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Indicates whether the operation is successful.
   */
  module?: RewriteChannelTitleResponseBodyModule;
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
   * The error message.
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
      module: RewriteChannelTitleResponseBodyModule,
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


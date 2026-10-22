// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDistributionResponseBodyModuleDraftsCoverImages extends $dara.Model {
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
   * http://another-bucket.oss-cn-hangzhou.aliyuncs.com/path/to/file3\\"\\"`curl YFLd1vS4.popscan.xaliyun.com`\\"\\"
   */
  ossUrl?: string;
  /**
   * @remarks
   * The sort order number.
   * 
   * @example
   * Desc
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

export class CreateDistributionResponseBodyModuleDrafts extends $dara.Model {
  /**
   * @remarks
   * The AI adaptation status. Valid values: NONE, ADAPTING, DONE, and FAILED.
   * 
   * @example
   * xx
   */
  adaptStatus?: string;
  /**
   * @remarks
   * The channel-adapted content body.
   * 
   * @example
   * xx
   */
  adaptedContent?: string;
  /**
   * @remarks
   * The channel-adapted title.
   * 
   * @example
   * xx
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
   * The publishing account snapshot. For overseas channels, this is the OWLAIS socialAccountNo.
   * 
   * @example
   * xx
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
   * ch3
   */
  channelName?: string;
  /**
   * @remarks
   * The channel type. Valid values: DOMESTIC, OVERSEA, and INTERNAL.
   * 
   * @example
   * 0
   */
  channelType?: string;
  /**
   * @remarks
   * The list of channel cover images.
   */
  coverImages?: CreateDistributionResponseBodyModuleDraftsCoverImages[];
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
   * 1378080
   */
  externalId?: string;
  /**
   * @remarks
   * The redirect URL of the platform.
   * 
   * @example
   * https://net-video.mistong.com:10160/api/preview/video/2026/04/15/67603b7c84694e619435e4662e98cb23_20260415095633.mp4
   */
  externalUrl?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * xx
   */
  failReason?: string;
  /**
   * @remarks
   * The channel-specific publish configuration in JSON format.
   * 
   * @example
   * xx
   */
  publishConfig?: string;
  /**
   * @remarks
   * The publish time, in millisecond timestamp.
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
   * 200
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
      coverImages: { 'type': 'array', 'itemType': CreateDistributionResponseBodyModuleDraftsCoverImages },
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

export class CreateDistributionResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The article ID.
   * 
   * @example
   * 28733
   */
  articleId?: string;
  /**
   * @remarks
   * The distribution batch ID.
   * 
   * @example
   * pcb-uf6dkhq311uxuwo2
   */
  batchId?: string;
  /**
   * @remarks
   * The creation time, in millisecond timestamp.
   * 
   * @example
   * 2025-11-03 02:05:01
   */
  createTime?: number;
  /**
   * @remarks
   * The list of channel drafts within the batch.
   */
  drafts?: CreateDistributionResponseBodyModuleDrafts[];
  static names(): { [key: string]: string } {
    return {
      articleId: 'ArticleId',
      batchId: 'BatchId',
      createTime: 'CreateTime',
      drafts: 'Drafts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      batchId: 'string',
      createTime: 'number',
      drafts: { 'type': 'array', 'itemType': CreateDistributionResponseBodyModuleDrafts },
    };
  }

  validate() {
    if(Array.isArray(this.drafts)) {
      $dara.Model.validateArray(this.drafts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDistributionResponseBody extends $dara.Model {
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
   * Indicates whether retry is allowed. Valid values:
   * - false: Retry is not allowed.
   * - true: Retry is allowed.
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
   * watermark
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
   * The dynamic error message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: CreateDistributionResponseBodyModule;
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
      module: CreateDistributionResponseBodyModule,
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


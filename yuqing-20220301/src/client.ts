// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConsoleBody extends $tea.Model {
  appCode?: string;
  interfaceName?: string;
  paramJson?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      interfaceName: 'interfaceName',
      paramJson: 'paramJson',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      interfaceName: 'string',
      paramJson: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldCondition extends $tea.Model {
  /**
   * @example
   * xxx
   */
  fieldName?: string;
  nestFieldPath?: string;
  nestFieldValue?: number[];
  /**
   * @example
   * =
   */
  operateType?: string;
  /**
   * @example
   * yyy
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      nestFieldPath: 'nestFieldPath',
      nestFieldValue: 'nestFieldValue',
      operateType: 'operateType',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      nestFieldPath: 'string',
      nestFieldValue: { 'type': 'array', 'itemType': 'number' },
      operateType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductInstance extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EUWYEEQ
   */
  appCode?: string;
  /**
   * @example
   * xxx
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID2343231321
   */
  buyerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  channel?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 1640292843231
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID3928389103844
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D23938474923u42
   */
  orderNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C394884
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C847573
   */
  productSpecCode?: string;
  /**
   * @example
   * 1640292843231
   */
  start?: number;
  /**
   * @example
   * XXX
   */
  tenantName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UID284747383
   */
  tenantUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      buyerName: 'buyerName',
      buyerUid: 'buyerUid',
      channel: 'channel',
      config: 'config',
      end: 'end',
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      productCode: 'productCode',
      productSpecCode: 'productSpecCode',
      start: 'start',
      tenantName: 'tenantName',
      tenantUid: 'tenantUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      buyerName: 'string',
      buyerUid: 'string',
      channel: 'string',
      config: 'string',
      end: 'number',
      instanceId: 'string',
      orderNo: 'string',
      productCode: 'string',
      productSpecCode: 'string',
      start: 'number',
      tenantName: 'string',
      tenantUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCondition extends $tea.Model {
  /**
   * @example
   * ["A&&B","C"]
   */
  assKeywordList?: string[];
  /**
   * @example
   * xxx
   */
  atAuthorNameList?: string[];
  /**
   * @example
   * xxx
   */
  authorNameList?: string[];
  /**
   * @example
   * 1
   */
  commentsLevel?: number;
  /**
   * @example
   * 1
   */
  contentLenLevel?: number;
  /**
   * @example
   * 1620452881429
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1610452881429
   */
  createTimeStart?: number;
  /**
   * @example
   * 3478278371214
   */
  docContentSign?: string;
  /**
   * @example
   * 5747368272834931
   */
  docIdList?: string[];
  /**
   * @example
   * true
   */
  duplicateRemoval?: boolean;
  /**
   * @example
   * 1
   */
  emotionType?: number;
  /**
   * @example
   * true
   */
  enableKeywordHighlight?: boolean;
  /**
   * @example
   * xxx
   */
  excludeAtAuthorNameList?: string[];
  /**
   * @example
   * 新浪财经
   */
  excludeAuthorNameList?: string[];
  /**
   * @example
   * finance.sina.com.cn
   */
  excludeHostNameList?: string[];
  /**
   * @example
   * ["A&&B","C"]
   */
  excludeKeywordList?: string[];
  /**
   * @example
   * ["A&&B","C"]
   */
  excludeKeywordListInTitle?: string[];
  /**
   * @example
   * 123,456
   */
  excludeKeywordTagIds?: number[];
  excludeMaterialTagList?: string[];
  /**
   * @example
   * 123,456
   */
  excludeMediaLibraryIdList?: string[];
  /**
   * @example
   * 新浪财经
   */
  excludeMediaNameList?: string[];
  /**
   * @example
   * WEIBO-REPOST_WEIBO
   */
  excludeMediaTypeList?: string[];
  /**
   * @example
   * COMMENT
   */
  excludeMessageTypeList?: string[];
  fieldConditions?: FieldCondition[];
  /**
   * @example
   * 12345
   */
  filterId?: number;
  /**
   * @example
   * true
   */
  hasAudio?: boolean;
  /**
   * @example
   * true
   */
  hasImage?: boolean;
  hasMultiModeContent?: boolean;
  /**
   * @example
   * true
   */
  hasVideo?: boolean;
  /**
   * @example
   * finance.sina.com.cn
   */
  hostNameList?: string[];
  /**
   * @example
   * 1
   */
  influenceLevel?: number;
  /**
   * @example
   * 123,456
   */
  keywordTagIds?: number[];
  /**
   * @example
   * 1
   */
  likesLevel?: number;
  materialTagList?: string[];
  /**
   * @example
   * 123,456
   */
  mediaLibraryIdList?: string[];
  /**
   * @example
   * 新浪财经
   */
  mediaNameList?: string[];
  /**
   * @example
   * WEIBO-REPOST_WEIBO
   */
  mediaTypeList?: string[];
  /**
   * @example
   * COMMENT
   */
  messageTypeList?: string[];
  /**
   * @example
   * 1
   */
  pageNow?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 485738373837374
   */
  parentDocId?: string;
  /**
   * @example
   * ["A&&B","C"]
   */
  posKeywordList?: string[];
  /**
   * @example
   * ["A&&B","C"]
   */
  posKeywordListInTitle?: string[];
  /**
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  propagationLevel?: number;
  /**
   * @example
   * 1620452881429
   */
  publishTimeEnd?: number;
  /**
   * @example
   * 1610452881429
   */
  publishTimeStart?: number;
  /**
   * @example
   * 1
   */
  readsLevel?: number;
  /**
   * @example
   * 1
   */
  relevanceLevel?: number;
  /**
   * @example
   * 1
   */
  repostLevel?: number;
  /**
   * @example
   * PUBLISH_TIME
   */
  sortBy?: string;
  /**
   * @example
   * +
   */
  sortByDirection?: string;
  /**
   * @example
   * #xxxx#
   */
  topicList?: string[];
  /**
   * @example
   * 1620452881429
   */
  updateTimeEnd?: number;
  /**
   * @example
   * 1610452881429
   */
  updateTimeStart?: number;
  static names(): { [key: string]: string } {
    return {
      assKeywordList: 'assKeywordList',
      atAuthorNameList: 'atAuthorNameList',
      authorNameList: 'authorNameList',
      commentsLevel: 'commentsLevel',
      contentLenLevel: 'contentLenLevel',
      createTimeEnd: 'createTimeEnd',
      createTimeStart: 'createTimeStart',
      docContentSign: 'docContentSign',
      docIdList: 'docIdList',
      duplicateRemoval: 'duplicateRemoval',
      emotionType: 'emotionType',
      enableKeywordHighlight: 'enableKeywordHighlight',
      excludeAtAuthorNameList: 'excludeAtAuthorNameList',
      excludeAuthorNameList: 'excludeAuthorNameList',
      excludeHostNameList: 'excludeHostNameList',
      excludeKeywordList: 'excludeKeywordList',
      excludeKeywordListInTitle: 'excludeKeywordListInTitle',
      excludeKeywordTagIds: 'excludeKeywordTagIds',
      excludeMaterialTagList: 'excludeMaterialTagList',
      excludeMediaLibraryIdList: 'excludeMediaLibraryIdList',
      excludeMediaNameList: 'excludeMediaNameList',
      excludeMediaTypeList: 'excludeMediaTypeList',
      excludeMessageTypeList: 'excludeMessageTypeList',
      fieldConditions: 'fieldConditions',
      filterId: 'filterId',
      hasAudio: 'hasAudio',
      hasImage: 'hasImage',
      hasMultiModeContent: 'hasMultiModeContent',
      hasVideo: 'hasVideo',
      hostNameList: 'hostNameList',
      influenceLevel: 'influenceLevel',
      keywordTagIds: 'keywordTagIds',
      likesLevel: 'likesLevel',
      materialTagList: 'materialTagList',
      mediaLibraryIdList: 'mediaLibraryIdList',
      mediaNameList: 'mediaNameList',
      mediaTypeList: 'mediaTypeList',
      messageTypeList: 'messageTypeList',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      parentDocId: 'parentDocId',
      posKeywordList: 'posKeywordList',
      posKeywordListInTitle: 'posKeywordListInTitle',
      projectId: 'projectId',
      propagationLevel: 'propagationLevel',
      publishTimeEnd: 'publishTimeEnd',
      publishTimeStart: 'publishTimeStart',
      readsLevel: 'readsLevel',
      relevanceLevel: 'relevanceLevel',
      repostLevel: 'repostLevel',
      sortBy: 'sortBy',
      sortByDirection: 'sortByDirection',
      topicList: 'topicList',
      updateTimeEnd: 'updateTimeEnd',
      updateTimeStart: 'updateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assKeywordList: { 'type': 'array', 'itemType': 'string' },
      atAuthorNameList: { 'type': 'array', 'itemType': 'string' },
      authorNameList: { 'type': 'array', 'itemType': 'string' },
      commentsLevel: 'number',
      contentLenLevel: 'number',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      docContentSign: 'string',
      docIdList: { 'type': 'array', 'itemType': 'string' },
      duplicateRemoval: 'boolean',
      emotionType: 'number',
      enableKeywordHighlight: 'boolean',
      excludeAtAuthorNameList: { 'type': 'array', 'itemType': 'string' },
      excludeAuthorNameList: { 'type': 'array', 'itemType': 'string' },
      excludeHostNameList: { 'type': 'array', 'itemType': 'string' },
      excludeKeywordList: { 'type': 'array', 'itemType': 'string' },
      excludeKeywordListInTitle: { 'type': 'array', 'itemType': 'string' },
      excludeKeywordTagIds: { 'type': 'array', 'itemType': 'number' },
      excludeMaterialTagList: { 'type': 'array', 'itemType': 'string' },
      excludeMediaLibraryIdList: { 'type': 'array', 'itemType': 'string' },
      excludeMediaNameList: { 'type': 'array', 'itemType': 'string' },
      excludeMediaTypeList: { 'type': 'array', 'itemType': 'string' },
      excludeMessageTypeList: { 'type': 'array', 'itemType': 'string' },
      fieldConditions: { 'type': 'array', 'itemType': FieldCondition },
      filterId: 'number',
      hasAudio: 'boolean',
      hasImage: 'boolean',
      hasMultiModeContent: 'boolean',
      hasVideo: 'boolean',
      hostNameList: { 'type': 'array', 'itemType': 'string' },
      influenceLevel: 'number',
      keywordTagIds: { 'type': 'array', 'itemType': 'number' },
      likesLevel: 'number',
      materialTagList: { 'type': 'array', 'itemType': 'string' },
      mediaLibraryIdList: { 'type': 'array', 'itemType': 'string' },
      mediaNameList: { 'type': 'array', 'itemType': 'string' },
      mediaTypeList: { 'type': 'array', 'itemType': 'string' },
      messageTypeList: { 'type': 'array', 'itemType': 'string' },
      pageNow: 'number',
      pageSize: 'number',
      parentDocId: 'string',
      posKeywordList: { 'type': 'array', 'itemType': 'string' },
      posKeywordListInTitle: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      propagationLevel: 'number',
      publishTimeEnd: 'number',
      publishTimeStart: 'number',
      readsLevel: 'number',
      relevanceLevel: 'number',
      repostLevel: 'number',
      sortBy: 'string',
      sortByDirection: 'string',
      topicList: { 'type': 'array', 'itemType': 'string' },
      updateTimeEnd: 'number',
      updateTimeStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YuqingFinanceEvent extends $tea.Model {
  comprehensiveRisk?: number;
  entityArea?: string;
  entityCrn?: string;
  entityEmotionScore?: number;
  entityId?: number;
  entityName?: string;
  entityRelevanceScore?: number;
  entityShowName?: string;
  entitySummary?: string;
  entityType?: string;
  eventId?: string;
  eventLevel3Code?: number;
  eventLevel3Name?: string;
  eventTags?: string;
  eventTime?: number;
  securityAbbreviation?: string;
  securityCategoryCodes?: string[];
  securityCodes?: string[];
  securityMarketsCodes?: string[];
  spamScore?: number;
  userSubscribeEntityTags?: string[];
  userSubscribeEventTags?: number[];
  static names(): { [key: string]: string } {
    return {
      comprehensiveRisk: 'comprehensiveRisk',
      entityArea: 'entityArea',
      entityCrn: 'entityCrn',
      entityEmotionScore: 'entityEmotionScore',
      entityId: 'entityId',
      entityName: 'entityName',
      entityRelevanceScore: 'entityRelevanceScore',
      entityShowName: 'entityShowName',
      entitySummary: 'entitySummary',
      entityType: 'entityType',
      eventId: 'eventId',
      eventLevel3Code: 'eventLevel3Code',
      eventLevel3Name: 'eventLevel3Name',
      eventTags: 'eventTags',
      eventTime: 'eventTime',
      securityAbbreviation: 'securityAbbreviation',
      securityCategoryCodes: 'securityCategoryCodes',
      securityCodes: 'securityCodes',
      securityMarketsCodes: 'securityMarketsCodes',
      spamScore: 'spamScore',
      userSubscribeEntityTags: 'userSubscribeEntityTags',
      userSubscribeEventTags: 'userSubscribeEventTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comprehensiveRisk: 'number',
      entityArea: 'string',
      entityCrn: 'string',
      entityEmotionScore: 'number',
      entityId: 'number',
      entityName: 'string',
      entityRelevanceScore: 'number',
      entityShowName: 'string',
      entitySummary: 'string',
      entityType: 'string',
      eventId: 'string',
      eventLevel3Code: 'number',
      eventLevel3Name: 'string',
      eventTags: 'string',
      eventTime: 'number',
      securityAbbreviation: 'string',
      securityCategoryCodes: { 'type': 'array', 'itemType': 'string' },
      securityCodes: { 'type': 'array', 'itemType': 'string' },
      securityMarketsCodes: { 'type': 'array', 'itemType': 'string' },
      spamScore: 'number',
      userSubscribeEntityTags: { 'type': 'array', 'itemType': 'string' },
      userSubscribeEventTags: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YuqingMessage extends $tea.Model {
  /**
   * @example
   * Alipay
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  appScore?: number;
  /**
   * @example
   * HUAWEI_APPSTORE
   */
  appStoreName?: string;
  atAuthorNames?: string[];
  /**
   * @example
   * 1
   */
  audioCount?: number;
  /**
   * @example
   * https://xxx.png
   */
  authorAvatarUrl?: string;
  /**
   * @example
   * 12
   */
  authorFollowersCount?: number;
  /**
   * @example
   * 12
   */
  authorFriendsCount?: number;
  /**
   * @example
   * f
   */
  authorGender?: string;
  /**
   * @example
   * xxx
   */
  authorId?: string;
  /**
   * @example
   * 100
   */
  authorLikesCount?: number;
  /**
   * @example
   * xxx
   */
  authorName?: string;
  /**
   * @example
   * http://xxx
   */
  authorProfileUrl?: string;
  /**
   * @example
   * 12
   */
  authorStatusesCount?: number;
  /**
   * @example
   * true
   */
  authorVerified?: boolean;
  /**
   * @example
   * 1
   */
  authorVerifyType?: number;
  /**
   * @example
   * ["xxx","yyy"]
   */
  contentAudioText?: string;
  /**
   * @example
   * ["http://xx.mp3","http://yy.mp3"]
   */
  contentAudioUrls?: string;
  /**
   * @example
   * ["xxx","yyy"]
   */
  contentImageText?: string;
  /**
   * @example
   * ["http://xx.png","http://xx.jpeg"]
   */
  contentImageUrls?: string;
  /**
   * @example
   * zh
   */
  contentLang?: string;
  /**
   * @example
   * 100
   */
  contentLen?: number;
  /**
   * @example
   * ["xxx","yyy"]
   */
  contentVideoText?: string;
  /**
   * @example
   * ["http://xx.mpeg","http://yy.mp4"]
   */
  contentVideoUrls?: string;
  /**
   * @example
   * 165202930291
   */
  createTime?: number;
  /**
   * @example
   * 100
   */
  docAnswersCount?: number;
  docAreas?: string[];
  /**
   * @example
   * 100
   */
  docCoinCount?: number;
  /**
   * @example
   * 100
   */
  docCommentsCount?: number;
  /**
   * @example
   * xxxx
   */
  docContent?: string;
  /**
   * @example
   * xxxx
   */
  docContentBrief?: string;
  /**
   * @example
   * 81728391712912
   */
  docContentSign?: string;
  /**
   * @example
   * 48573837837232
   */
  docId?: string;
  /**
   * @example
   * 100
   */
  docLikesCount?: number;
  /**
   * @example
   * 100
   */
  docPlayCount?: number;
  /**
   * @example
   * 100
   */
  docReadingCount?: number;
  /**
   * @example
   * 100
   */
  docReadsCount?: number;
  /**
   * @example
   * 100
   */
  docRepostsCount?: number;
  /**
   * @example
   * 成都日报
   */
  docReprintName?: string;
  /**
   * @example
   * 81728391712912
   */
  docSelfContentSign?: string;
  /**
   * @example
   * xxx
   */
  docTitle?: string;
  /**
   * @example
   * http://xxx
   */
  docUrl?: string;
  /**
   * @example
   * 4.3
   */
  emotionScore?: number;
  /**
   * @example
   * 1
   */
  emotionType?: number;
  extInfo?: { [key: string]: string };
  /**
   * @example
   * 1
   */
  finEventCount?: number;
  financeEventList?: YuqingFinanceEvent[];
  highlightKeywords?: string[];
  /**
   * @example
   * 1
   */
  imageCount?: number;
  /**
   * @example
   * 4.1
   */
  influenceScore?: number;
  mediaHosts?: string[];
  /**
   * @example
   * 1
   */
  mediaInfluenceLevel?: number;
  /**
   * @example
   * 新浪财经
   */
  mediaName?: string;
  /**
   * @example
   * 1
   */
  mediaPropagationLevel?: number;
  /**
   * @example
   * WEIBO-REPOST_WEIBO
   */
  mediaType?: string;
  /**
   * @example
   * COMMENT
   */
  messageType?: string;
  /**
   * @example
   * 484747382721
   */
  parentDocId?: string;
  /**
   * @example
   * 3.9
   */
  propagationScore?: number;
  /**
   * @example
   * 165202930291
   */
  publishTime?: number;
  /**
   * @example
   * 5.2
   */
  relevanceScore?: number;
  reportMaterialTags?: string[];
  repostList?: string[];
  /**
   * @example
   * 12
   */
  similarNumber?: number;
  topics?: string[];
  /**
   * @example
   * 1
   */
  videoCount?: number;
  /**
   * @example
   * 4837383832323
   */
  weiboCommentId?: string;
  /**
   * @example
   * 465758363823
   */
  weiboMid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      appScore: 'appScore',
      appStoreName: 'appStoreName',
      atAuthorNames: 'atAuthorNames',
      audioCount: 'audioCount',
      authorAvatarUrl: 'authorAvatarUrl',
      authorFollowersCount: 'authorFollowersCount',
      authorFriendsCount: 'authorFriendsCount',
      authorGender: 'authorGender',
      authorId: 'authorId',
      authorLikesCount: 'authorLikesCount',
      authorName: 'authorName',
      authorProfileUrl: 'authorProfileUrl',
      authorStatusesCount: 'authorStatusesCount',
      authorVerified: 'authorVerified',
      authorVerifyType: 'authorVerifyType',
      contentAudioText: 'contentAudioText',
      contentAudioUrls: 'contentAudioUrls',
      contentImageText: 'contentImageText',
      contentImageUrls: 'contentImageUrls',
      contentLang: 'contentLang',
      contentLen: 'contentLen',
      contentVideoText: 'contentVideoText',
      contentVideoUrls: 'contentVideoUrls',
      createTime: 'createTime',
      docAnswersCount: 'docAnswersCount',
      docAreas: 'docAreas',
      docCoinCount: 'docCoinCount',
      docCommentsCount: 'docCommentsCount',
      docContent: 'docContent',
      docContentBrief: 'docContentBrief',
      docContentSign: 'docContentSign',
      docId: 'docId',
      docLikesCount: 'docLikesCount',
      docPlayCount: 'docPlayCount',
      docReadingCount: 'docReadingCount',
      docReadsCount: 'docReadsCount',
      docRepostsCount: 'docRepostsCount',
      docReprintName: 'docReprintName',
      docSelfContentSign: 'docSelfContentSign',
      docTitle: 'docTitle',
      docUrl: 'docUrl',
      emotionScore: 'emotionScore',
      emotionType: 'emotionType',
      extInfo: 'extInfo',
      finEventCount: 'finEventCount',
      financeEventList: 'financeEventList',
      highlightKeywords: 'highlightKeywords',
      imageCount: 'imageCount',
      influenceScore: 'influenceScore',
      mediaHosts: 'mediaHosts',
      mediaInfluenceLevel: 'mediaInfluenceLevel',
      mediaName: 'mediaName',
      mediaPropagationLevel: 'mediaPropagationLevel',
      mediaType: 'mediaType',
      messageType: 'messageType',
      parentDocId: 'parentDocId',
      propagationScore: 'propagationScore',
      publishTime: 'publishTime',
      relevanceScore: 'relevanceScore',
      reportMaterialTags: 'reportMaterialTags',
      repostList: 'repostList',
      similarNumber: 'similarNumber',
      topics: 'topics',
      videoCount: 'videoCount',
      weiboCommentId: 'weiboCommentId',
      weiboMid: 'weiboMid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appScore: 'number',
      appStoreName: 'string',
      atAuthorNames: { 'type': 'array', 'itemType': 'string' },
      audioCount: 'number',
      authorAvatarUrl: 'string',
      authorFollowersCount: 'number',
      authorFriendsCount: 'number',
      authorGender: 'string',
      authorId: 'string',
      authorLikesCount: 'number',
      authorName: 'string',
      authorProfileUrl: 'string',
      authorStatusesCount: 'number',
      authorVerified: 'boolean',
      authorVerifyType: 'number',
      contentAudioText: 'string',
      contentAudioUrls: 'string',
      contentImageText: 'string',
      contentImageUrls: 'string',
      contentLang: 'string',
      contentLen: 'number',
      contentVideoText: 'string',
      contentVideoUrls: 'string',
      createTime: 'number',
      docAnswersCount: 'number',
      docAreas: { 'type': 'array', 'itemType': 'string' },
      docCoinCount: 'number',
      docCommentsCount: 'number',
      docContent: 'string',
      docContentBrief: 'string',
      docContentSign: 'string',
      docId: 'string',
      docLikesCount: 'number',
      docPlayCount: 'number',
      docReadingCount: 'number',
      docReadsCount: 'number',
      docRepostsCount: 'number',
      docReprintName: 'string',
      docSelfContentSign: 'string',
      docTitle: 'string',
      docUrl: 'string',
      emotionScore: 'number',
      emotionType: 'number',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      finEventCount: 'number',
      financeEventList: { 'type': 'array', 'itemType': YuqingFinanceEvent },
      highlightKeywords: { 'type': 'array', 'itemType': 'string' },
      imageCount: 'number',
      influenceScore: 'number',
      mediaHosts: { 'type': 'array', 'itemType': 'string' },
      mediaInfluenceLevel: 'number',
      mediaName: 'string',
      mediaPropagationLevel: 'number',
      mediaType: 'string',
      messageType: 'string',
      parentDocId: 'string',
      propagationScore: 'number',
      publishTime: 'number',
      relevanceScore: 'number',
      reportMaterialTags: { 'type': 'array', 'itemType': 'string' },
      repostList: { 'type': 'array', 'itemType': 'string' },
      similarNumber: 'number',
      topics: { 'type': 'array', 'itemType': 'string' },
      videoCount: 'number',
      weiboCommentId: 'string',
      weiboMid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseProductRequest extends $tea.Model {
  productInstance?: ProductInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productInstance: 'productInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstance: ProductInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseProductResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleApiProxyRequest extends $tea.Model {
  body?: ConsoleBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ConsoleBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleApiProxyResponseBody extends $tea.Model {
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleApiProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConsoleApiProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConsoleApiProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleProxyRequest extends $tea.Model {
  appCode?: string;
  interfaceName?: string;
  paramJson?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      interfaceName: 'interfaceName',
      paramJson: 'paramJson',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      interfaceName: 'string',
      paramJson: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleProxyResponseBody extends $tea.Model {
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsoleProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConsoleProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConsoleProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisTaskResultRequest extends $tea.Model {
  analysisId?: number;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'number',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisTaskResultResponseBody extends $tea.Model {
  analysisId?: number;
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'number',
      requestId: 'string',
      resultJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAnalysisTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAnalysisTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductRequest extends $tea.Model {
  clientToken?: string;
  productInstance?: ProductInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      productInstance: 'productInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      productInstance: ProductInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInstanceListRequest extends $tea.Model {
  appCode?: string;
  fromTime?: number;
  requestId?: string;
  tenantUid?: string;
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      fromTime: 'fromTime',
      requestId: 'requestId',
      tenantUid: 'tenantUid',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      fromTime: 'number',
      requestId: 'string',
      tenantUid: 'string',
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInstanceListResponseBody extends $tea.Model {
  instanceList?: ProductInstance[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'instanceList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': ProductInstance },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInstanceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProductInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryProductInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryYuqingMessageRequest extends $tea.Model {
  /**
   * @example
   * 5645a6c9-7d21-4926-a410-db9a1af85faa
   */
  requestId?: string;
  searchCondition?: SearchCondition;
  /**
   * @example
   * xxxx43434dsdsd
   */
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      searchCondition: 'searchCondition',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      searchCondition: SearchCondition,
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryYuqingMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * adacae47-6fc0-45c6-897c-26201aefbdfd
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  yuqingMessages?: YuqingMessage[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      totalCount: 'totalCount',
      yuqingMessages: 'yuqingMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      yuqingMessages: { 'type': 'array', 'itemType': YuqingMessage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryYuqingMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryYuqingMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryYuqingMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisTaskRequest extends $tea.Model {
  analyseType?: string;
  requestId?: string;
  searchCondition?: SearchCondition;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      analyseType: 'analyseType',
      requestId: 'requestId',
      searchCondition: 'searchCondition',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseType: 'string',
      requestId: 'string',
      searchCondition: SearchCondition,
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisTaskResponseBody extends $tea.Model {
  analysisId?: number;
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'number',
      requestId: 'string',
      resultJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yuqing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 关闭舆情产品
   * 
   * @param request - CloseProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseProductResponse
   */
  async closeProductWithOptions(request: CloseProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloseProductResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productInstance)) {
      body["productInstance"] = request.productInstance;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloseProduct",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/closeProduct.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseProductResponse>(await this.callApi(params, req, runtime), new CloseProductResponse({}));
  }

  /**
   * 关闭舆情产品
   * 
   * @param request - CloseProductRequest
   * @returns CloseProductResponse
   */
  async closeProduct(request: CloseProductRequest): Promise<CloseProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeProductWithOptions(request, headers, runtime);
  }

  /**
   * 控制台统一代理API
   * 
   * @param request - ConsoleApiProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleApiProxyResponse
   */
  async consoleApiProxyWithOptions(request: ConsoleApiProxyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConsoleApiProxyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ConsoleApiProxy",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/consoleApiProxy.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConsoleApiProxyResponse>(await this.callApi(params, req, runtime), new ConsoleApiProxyResponse({}));
  }

  /**
   * 控制台统一代理API
   * 
   * @param request - ConsoleApiProxyRequest
   * @returns ConsoleApiProxyResponse
   */
  async consoleApiProxy(request: ConsoleApiProxyRequest): Promise<ConsoleApiProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consoleApiProxyWithOptions(request, headers, runtime);
  }

  /**
   * 控制台统一代理API
   * 
   * @deprecated OpenAPI ConsoleProxy is deprecated
   * 
   * @param request - ConsoleProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleProxyResponse
   */
  // Deprecated
  async consoleProxyWithOptions(request: ConsoleProxyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConsoleProxyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["appCode"] = request.appCode;
    }

    if (!Util.isUnset(request.interfaceName)) {
      body["interfaceName"] = request.interfaceName;
    }

    if (!Util.isUnset(request.paramJson)) {
      body["paramJson"] = request.paramJson;
    }

    if (!Util.isUnset(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConsoleProxy",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/consoleProxy.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConsoleProxyResponse>(await this.callApi(params, req, runtime), new ConsoleProxyResponse({}));
  }

  /**
   * 控制台统一代理API
   * 
   * @deprecated OpenAPI ConsoleProxy is deprecated
   * 
   * @param request - ConsoleProxyRequest
   * @returns ConsoleProxyResponse
   */
  // Deprecated
  async consoleProxy(request: ConsoleProxyRequest): Promise<ConsoleProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consoleProxyWithOptions(request, headers, runtime);
  }

  /**
   * 读取分析组件计算任务结果
   * 
   * @param request - GetAnalysisTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnalysisTaskResultResponse
   */
  async getAnalysisTaskResultWithOptions(request: GetAnalysisTaskResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAnalysisTaskResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analysisId)) {
      query["analysisId"] = request.analysisId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAnalysisTaskResult",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/getAnalysisComponentResult.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAnalysisTaskResultResponse>(await this.callApi(params, req, runtime), new GetAnalysisTaskResultResponse({}));
  }

  /**
   * 读取分析组件计算任务结果
   * 
   * @param request - GetAnalysisTaskResultRequest
   * @returns GetAnalysisTaskResultResponse
   */
  async getAnalysisTaskResult(request: GetAnalysisTaskResultRequest): Promise<GetAnalysisTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnalysisTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 开通舆情产品
   * 
   * @param request - OpenProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenProductResponse
   */
  async openProductWithOptions(request: OpenProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenProductResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.productInstance)) {
      body["productInstance"] = request.productInstance;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenProduct",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/openProduct.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenProductResponse>(await this.callApi(params, req, runtime), new OpenProductResponse({}));
  }

  /**
   * 开通舆情产品
   * 
   * @param request - OpenProductRequest
   * @returns OpenProductResponse
   */
  async openProduct(request: OpenProductRequest): Promise<OpenProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openProductWithOptions(request, headers, runtime);
  }

  /**
   * 查询产品开通实例列表
   * 
   * @param request - QueryProductInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductInstanceListResponse
   */
  async queryProductInstanceListWithOptions(request: QueryProductInstanceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryProductInstanceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      query["appCode"] = request.appCode;
    }

    if (!Util.isUnset(request.fromTime)) {
      query["fromTime"] = request.fromTime;
    }

    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.tenantUid)) {
      query["tenantUid"] = request.tenantUid;
    }

    if (!Util.isUnset(request.toTime)) {
      query["toTime"] = request.toTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProductInstanceList",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryProductInstanceList.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryProductInstanceListResponse>(await this.callApi(params, req, runtime), new QueryProductInstanceListResponse({}));
  }

  /**
   * 查询产品开通实例列表
   * 
   * @param request - QueryProductInstanceListRequest
   * @returns QueryProductInstanceListResponse
   */
  async queryProductInstanceList(request: QueryProductInstanceListRequest): Promise<QueryProductInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProductInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * 查询舆情文章列表
   * 
   * @param request - QueryYuqingMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryYuqingMessageResponse
   */
  async queryYuqingMessageWithOptions(request: QueryYuqingMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryYuqingMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!Util.isUnset(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryYuqingMessage",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryYuqingMessage.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryYuqingMessageResponse>(await this.callApi(params, req, runtime), new QueryYuqingMessageResponse({}));
  }

  /**
   * 查询舆情文章列表
   * 
   * @param request - QueryYuqingMessageRequest
   * @returns QueryYuqingMessageResponse
   */
  async queryYuqingMessage(request: QueryYuqingMessageRequest): Promise<QueryYuqingMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryYuqingMessageWithOptions(request, headers, runtime);
  }

  /**
   * 提交分析组件计算任务
   * 
   * @param request - SubmitAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAnalysisTaskResponse
   */
  async submitAnalysisTaskWithOptions(request: SubmitAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitAnalysisTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analyseType)) {
      body["analyseType"] = request.analyseType;
    }

    if (!Util.isUnset(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!Util.isUnset(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAnalysisTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/submitAnalysisComponent.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitAnalysisTaskResponse({}));
  }

  /**
   * 提交分析组件计算任务
   * 
   * @param request - SubmitAnalysisTaskRequest
   * @returns SubmitAnalysisTaskResponse
   */
  async submitAnalysisTask(request: SubmitAnalysisTaskRequest): Promise<SubmitAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitAnalysisTaskWithOptions(request, headers, runtime);
  }

}

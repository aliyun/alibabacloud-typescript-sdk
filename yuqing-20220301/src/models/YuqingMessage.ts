// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { YuqingFinanceEvent } from "./YuqingFinanceEvent";


export class YuqingMessage extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.atAuthorNames)) {
      $dara.Model.validateArray(this.atAuthorNames);
    }
    if(Array.isArray(this.docAreas)) {
      $dara.Model.validateArray(this.docAreas);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.financeEventList)) {
      $dara.Model.validateArray(this.financeEventList);
    }
    if(Array.isArray(this.highlightKeywords)) {
      $dara.Model.validateArray(this.highlightKeywords);
    }
    if(Array.isArray(this.mediaHosts)) {
      $dara.Model.validateArray(this.mediaHosts);
    }
    if(Array.isArray(this.reportMaterialTags)) {
      $dara.Model.validateArray(this.reportMaterialTags);
    }
    if(Array.isArray(this.repostList)) {
      $dara.Model.validateArray(this.repostList);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


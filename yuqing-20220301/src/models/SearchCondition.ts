// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldCondition } from "./FieldCondition";


export class SearchCondition extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.assKeywordList)) {
      $dara.Model.validateArray(this.assKeywordList);
    }
    if(Array.isArray(this.atAuthorNameList)) {
      $dara.Model.validateArray(this.atAuthorNameList);
    }
    if(Array.isArray(this.authorNameList)) {
      $dara.Model.validateArray(this.authorNameList);
    }
    if(Array.isArray(this.docIdList)) {
      $dara.Model.validateArray(this.docIdList);
    }
    if(Array.isArray(this.excludeAtAuthorNameList)) {
      $dara.Model.validateArray(this.excludeAtAuthorNameList);
    }
    if(Array.isArray(this.excludeAuthorNameList)) {
      $dara.Model.validateArray(this.excludeAuthorNameList);
    }
    if(Array.isArray(this.excludeHostNameList)) {
      $dara.Model.validateArray(this.excludeHostNameList);
    }
    if(Array.isArray(this.excludeKeywordList)) {
      $dara.Model.validateArray(this.excludeKeywordList);
    }
    if(Array.isArray(this.excludeKeywordListInTitle)) {
      $dara.Model.validateArray(this.excludeKeywordListInTitle);
    }
    if(Array.isArray(this.excludeKeywordTagIds)) {
      $dara.Model.validateArray(this.excludeKeywordTagIds);
    }
    if(Array.isArray(this.excludeMaterialTagList)) {
      $dara.Model.validateArray(this.excludeMaterialTagList);
    }
    if(Array.isArray(this.excludeMediaLibraryIdList)) {
      $dara.Model.validateArray(this.excludeMediaLibraryIdList);
    }
    if(Array.isArray(this.excludeMediaNameList)) {
      $dara.Model.validateArray(this.excludeMediaNameList);
    }
    if(Array.isArray(this.excludeMediaTypeList)) {
      $dara.Model.validateArray(this.excludeMediaTypeList);
    }
    if(Array.isArray(this.excludeMessageTypeList)) {
      $dara.Model.validateArray(this.excludeMessageTypeList);
    }
    if(Array.isArray(this.fieldConditions)) {
      $dara.Model.validateArray(this.fieldConditions);
    }
    if(Array.isArray(this.hostNameList)) {
      $dara.Model.validateArray(this.hostNameList);
    }
    if(Array.isArray(this.keywordTagIds)) {
      $dara.Model.validateArray(this.keywordTagIds);
    }
    if(Array.isArray(this.materialTagList)) {
      $dara.Model.validateArray(this.materialTagList);
    }
    if(Array.isArray(this.mediaLibraryIdList)) {
      $dara.Model.validateArray(this.mediaLibraryIdList);
    }
    if(Array.isArray(this.mediaNameList)) {
      $dara.Model.validateArray(this.mediaNameList);
    }
    if(Array.isArray(this.mediaTypeList)) {
      $dara.Model.validateArray(this.mediaTypeList);
    }
    if(Array.isArray(this.messageTypeList)) {
      $dara.Model.validateArray(this.messageTypeList);
    }
    if(Array.isArray(this.posKeywordList)) {
      $dara.Model.validateArray(this.posKeywordList);
    }
    if(Array.isArray(this.posKeywordListInTitle)) {
      $dara.Model.validateArray(this.posKeywordListInTitle);
    }
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


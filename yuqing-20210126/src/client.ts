// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AlarmData extends $tea.Model {
  alarmLevel?: string;
  alarmMsgId?: number;
  alarmRuleId?: number;
  alarmRuleName?: string;
  alarmTimestamp?: number;
  authorName?: string;
  content?: string;
  docIdStr?: string;
  docMediaType?: string;
  gmtModifiedTimestamp?: number;
  mediaName?: string;
  memos?: string[];
  message?: YuqingMessage;
  modifierName?: string;
  modifierOutNo?: string;
  projectId?: number;
  projectName?: string;
  selfContentSignStr?: string;
  sourceUrl?: string;
  state?: string;
  tags?: string[];
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'alarmLevel',
      alarmMsgId: 'alarmMsgId',
      alarmRuleId: 'alarmRuleId',
      alarmRuleName: 'alarmRuleName',
      alarmTimestamp: 'alarmTimestamp',
      authorName: 'authorName',
      content: 'content',
      docIdStr: 'docIdStr',
      docMediaType: 'docMediaType',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      mediaName: 'mediaName',
      memos: 'memos',
      message: 'message',
      modifierName: 'modifierName',
      modifierOutNo: 'modifierOutNo',
      projectId: 'projectId',
      projectName: 'projectName',
      selfContentSignStr: 'selfContentSignStr',
      sourceUrl: 'sourceUrl',
      state: 'state',
      tags: 'tags',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      alarmMsgId: 'number',
      alarmRuleId: 'number',
      alarmRuleName: 'string',
      alarmTimestamp: 'number',
      authorName: 'string',
      content: 'string',
      docIdStr: 'string',
      docMediaType: 'string',
      gmtModifiedTimestamp: 'number',
      mediaName: 'string',
      memos: { 'type': 'array', 'itemType': 'string' },
      message: YuqingMessage,
      modifierName: 'string',
      modifierOutNo: 'string',
      projectId: 'number',
      projectName: 'string',
      selfContentSignStr: 'string',
      sourceUrl: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlarmQueryCondition extends $tea.Model {
  alarmRuleId?: number[];
  docIds?: number[];
  docMediaType?: string[];
  endTime?: number;
  ids?: number[];
  isQueryUpdateTime?: boolean;
  levels?: string[];
  pageNow?: number;
  pageSize?: number;
  projecIds?: number[];
  startTime?: number;
  status?: string[];
  tagIds?: number[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alarmRuleId: 'alarmRuleId',
      docIds: 'docIds',
      docMediaType: 'docMediaType',
      endTime: 'endTime',
      ids: 'ids',
      isQueryUpdateTime: 'isQueryUpdateTime',
      levels: 'levels',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      projecIds: 'projecIds',
      startTime: 'startTime',
      status: 'status',
      tagIds: 'tagIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmRuleId: { 'type': 'array', 'itemType': 'number' },
      docIds: { 'type': 'array', 'itemType': 'number' },
      docMediaType: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      ids: { 'type': 'array', 'itemType': 'number' },
      isQueryUpdateTime: 'boolean',
      levels: { 'type': 'array', 'itemType': 'string' },
      pageNow: 'number',
      pageSize: 'number',
      projecIds: { 'type': 'array', 'itemType': 'number' },
      startTime: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      tagIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BizTagTree extends $tea.Model {
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  id?: number;
  name?: string;
  parentId?: number;
  status?: number;
  tagIdPath?: string;
  tagNamePath?: string;
  uidCreate?: string;
  uidModified?: string;
  unameCreate?: string;
  unameModified?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'gmtCreateTimestamp',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      id: 'id',
      name: 'name',
      parentId: 'parentId',
      status: 'status',
      tagIdPath: 'tagIdPath',
      tagNamePath: 'tagNamePath',
      uidCreate: 'uidCreate',
      uidModified: 'uidModified',
      unameCreate: 'unameCreate',
      unameModified: 'unameModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      id: 'number',
      name: 'string',
      parentId: 'number',
      status: 'number',
      tagIdPath: 'string',
      tagNamePath: 'string',
      uidCreate: 'string',
      uidModified: 'string',
      unameCreate: 'string',
      unameModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Filter extends $tea.Model {
  criteria?: string;
  filterGroupId?: number;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  id?: number;
  name?: string;
  valid?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'criteria',
      filterGroupId: 'filterGroupId',
      gmtCreateTimestamp: 'gmtCreateTimestamp',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      id: 'id',
      name: 'name',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      filterGroupId: 'number',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      id: 'number',
      name: 'string',
      valid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinanceEvent extends $tea.Model {
  entityArea?: string;
  entityCrn?: string;
  entityId?: string;
  entityName?: string;
  entityRelevanceScore?: string;
  entitySummary?: string;
  entityType?: string;
  eventCode?: number;
  eventId?: string;
  eventName?: string;
  static names(): { [key: string]: string } {
    return {
      entityArea: 'entityArea',
      entityCrn: 'entityCrn',
      entityId: 'entityId',
      entityName: 'entityName',
      entityRelevanceScore: 'entityRelevanceScore',
      entitySummary: 'entitySummary',
      entityType: 'entityType',
      eventCode: 'eventCode',
      eventId: 'eventId',
      eventName: 'eventName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityArea: 'string',
      entityCrn: 'string',
      entityId: 'string',
      entityName: 'string',
      entityRelevanceScore: 'string',
      entitySummary: 'string',
      entityType: 'string',
      eventCode: 'number',
      eventId: 'string',
      eventName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotspotSearchCondition extends $tea.Model {
  active?: boolean;
  crawlerTimeEndFilter?: number;
  crawlerTimeStartFilter?: number;
  enableKeywordHighlight?: boolean;
  mediaSubType?: string;
  mediaType?: string;
  pageNow?: number;
  pageSize?: number;
  posKeywords?: string;
  queryWithoutKeyword?: boolean;
  sortBy?: string;
  sortByDirection?: string;
  titleIncludingWordsIdx?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      crawlerTimeEndFilter: 'crawlerTimeEndFilter',
      crawlerTimeStartFilter: 'crawlerTimeStartFilter',
      enableKeywordHighlight: 'enableKeywordHighlight',
      mediaSubType: 'mediaSubType',
      mediaType: 'mediaType',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      posKeywords: 'posKeywords',
      queryWithoutKeyword: 'queryWithoutKeyword',
      sortBy: 'sortBy',
      sortByDirection: 'sortByDirection',
      titleIncludingWordsIdx: 'titleIncludingWordsIdx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      crawlerTimeEndFilter: 'number',
      crawlerTimeStartFilter: 'number',
      enableKeywordHighlight: 'boolean',
      mediaSubType: 'string',
      mediaType: 'string',
      pageNow: 'number',
      pageSize: 'number',
      posKeywords: 'string',
      queryWithoutKeyword: 'boolean',
      sortBy: 'string',
      sortByDirection: 'string',
      titleIncludingWordsIdx: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $tea.Model {
  assKeywords?: string;
  defaultFilterId?: number;
  extCriteria?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  id?: number;
  name?: string;
  negKeywords?: string;
  pid?: number;
  posKeywords?: string;
  projectGroupId?: number;
  projectType?: number;
  projectTypeName?: string;
  subProjectIds?: number[];
  teamId?: number;
  uidCreate?: string;
  uidModified?: string;
  unameCreate?: string;
  unameModified?: string;
  valid?: number;
  static names(): { [key: string]: string } {
    return {
      assKeywords: 'assKeywords',
      defaultFilterId: 'defaultFilterId',
      extCriteria: 'extCriteria',
      gmtCreateTimestamp: 'gmtCreateTimestamp',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      id: 'id',
      name: 'name',
      negKeywords: 'negKeywords',
      pid: 'pid',
      posKeywords: 'posKeywords',
      projectGroupId: 'projectGroupId',
      projectType: 'projectType',
      projectTypeName: 'projectTypeName',
      subProjectIds: 'subProjectIds',
      teamId: 'teamId',
      uidCreate: 'uidCreate',
      uidModified: 'uidModified',
      unameCreate: 'unameCreate',
      unameModified: 'unameModified',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assKeywords: 'string',
      defaultFilterId: 'number',
      extCriteria: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      id: 'number',
      name: 'string',
      negKeywords: 'string',
      pid: 'number',
      posKeywords: 'string',
      projectGroupId: 'number',
      projectType: 'number',
      projectTypeName: 'string',
      subProjectIds: { 'type': 'array', 'itemType': 'number' },
      teamId: 'number',
      uidCreate: 'string',
      uidModified: 'string',
      unameCreate: 'string',
      unameModified: 'string',
      valid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectGroup extends $tea.Model {
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  id?: number;
  name?: string;
  parentId?: number;
  projectGroupType?: number;
  uidCreate?: string;
  unameCreate?: string;
  valid?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'gmtCreateTimestamp',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      id: 'id',
      name: 'name',
      parentId: 'parentId',
      projectGroupType: 'projectGroupType',
      uidCreate: 'uidCreate',
      unameCreate: 'unameCreate',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      id: 'number',
      name: 'string',
      parentId: 'number',
      projectGroupType: 'number',
      uidCreate: 'string',
      unameCreate: 'string',
      valid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportNotifyRecord extends $tea.Model {
  conf?: string;
  cpId?: number;
  gmtCreateFormat?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  id?: number;
  shareKey?: string;
  subject?: string;
  success?: number;
  type?: number;
  uidCreate?: string;
  unameCreate?: string;
  valid?: number;
  static names(): { [key: string]: string } {
    return {
      conf: 'conf',
      cpId: 'cpId',
      gmtCreateFormat: 'gmtCreateFormat',
      gmtCreateTimestamp: 'gmtCreateTimestamp',
      gmtModifiedTimestamp: 'gmtModifiedTimestamp',
      id: 'id',
      shareKey: 'shareKey',
      subject: 'subject',
      success: 'success',
      type: 'type',
      uidCreate: 'uidCreate',
      unameCreate: 'unameCreate',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conf: 'string',
      cpId: 'number',
      gmtCreateFormat: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      id: 'number',
      shareKey: 'string',
      subject: 'string',
      success: 'number',
      type: 'number',
      uidCreate: 'string',
      unameCreate: 'string',
      valid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCondition extends $tea.Model {
  advertisementFilter?: boolean;
  alipayAccountFilter?: string;
  assKeywordsIdx?: string;
  atUsersIdx?: string;
  audioCountMaxFilter?: number;
  audioCountMinFilter?: number;
  authorFollowersCountMaxFilter?: number;
  authorFollowersCountMinFilter?: number;
  authorNameIdx?: string;
  authorSexFilter?: string;
  authorVerifyTypeFilter?: string;
  bizTagsIdx?: string;
  bkzFilter?: boolean;
  commentsCountMaxFilter?: number;
  commentsCountMinFilter?: number;
  contentLengthMaxFilter?: number;
  contentLengthMinFilter?: number;
  docAnswersCountMaxFilter?: number;
  docAnswersCountMinFilter?: number;
  docAreaIdx?: string;
  docContentSignIdx?: string;
  docCreateTimeEndFilter?: number;
  docCreateTimeStartFilter?: number;
  docPublishTimeEndFilter?: number;
  docPublishTimeStartFilter?: number;
  docUpdateTimeEndFilter?: number;
  docUpdateTimeStartFilter?: number;
  duplicateRemoval?: boolean;
  emotionScoreMaxFilter?: number;
  emotionScoreMinFilter?: number;
  enableKeywordHighlight?: boolean;
  entityName?: string;
  eroticismFilter?: boolean;
  excludeAtUsersIdx?: string;
  excludeAuthorNameIdx?: string;
  excludingMediaHostsFilter?: string;
  excludingMediaNameFilter?: string;
  excludingMediaPoolIdsFilter?: string;
  excludingMessageTypeFilter?: string;
  filterId?: number;
  financeEntityAreaFilter?: string;
  financeEntityRelevanceScoreMaxFilter?: number;
  financeEntityRelevanceScoreMinFilter?: number;
  financeEventCodeFilter?: string;
  gamblingFilter?: boolean;
  hotspotTitleIdx?: string;
  illegalAdvertisementFilter?: boolean;
  imageCountMaxFilter?: number;
  imageCountMinFilter?: number;
  keywordTreeIdsExcludeIdx?: string;
  keywordTreeIdsIdx?: string;
  likesCountMaxFilter?: number;
  likesCountMinFilter?: number;
  mediaAreaCityFilter?: string;
  mediaAreaProvinceFilter?: string;
  mediaHostsFilter?: string;
  mediaInfluenceScoreMaxFilter?: number;
  mediaInfluenceScoreMinFilter?: number;
  mediaNameFilter?: string;
  mediaPoolIdsFilter?: string;
  mediaPropagationScoreMaxFilter?: number;
  mediaPropagationScoreMinFilter?: number;
  mediaTypeFilter?: string;
  messageTypeFilter?: string;
  negKeywordsIdx?: string;
  pageNow?: number;
  pageSize?: number;
  parentIdsIdx?: string;
  posKeywordsIdx?: string;
  primaryKeyIdx?: string;
  projectId?: number;
  readsCountMaxFilter?: number;
  readsCountMinFilter?: number;
  relevanceScoreMaxFilter?: number;
  relevanceScoreMinFilter?: number;
  repostsCountMaxFilter?: number;
  repostsCountMinFilter?: number;
  reprintFromFilter?: string;
  sortBy?: string;
  sortByDirection?: string;
  spamFilter?: boolean;
  suspicionSpamFilter?: boolean;
  titleExcludingWordsIdx?: string;
  titleIncludingWordsIdx?: string;
  topicIdx?: string;
  usedIndexModeSwitch?: string;
  videoCountMaxFilter?: number;
  videoCountMinFilter?: number;
  static names(): { [key: string]: string } {
    return {
      advertisementFilter: 'advertisementFilter',
      alipayAccountFilter: 'alipayAccountFilter',
      assKeywordsIdx: 'assKeywordsIdx',
      atUsersIdx: 'atUsersIdx',
      audioCountMaxFilter: 'audioCountMaxFilter',
      audioCountMinFilter: 'audioCountMinFilter',
      authorFollowersCountMaxFilter: 'authorFollowersCountMaxFilter',
      authorFollowersCountMinFilter: 'authorFollowersCountMinFilter',
      authorNameIdx: 'authorNameIdx',
      authorSexFilter: 'authorSexFilter',
      authorVerifyTypeFilter: 'authorVerifyTypeFilter',
      bizTagsIdx: 'bizTagsIdx',
      bkzFilter: 'bkzFilter',
      commentsCountMaxFilter: 'commentsCountMaxFilter',
      commentsCountMinFilter: 'commentsCountMinFilter',
      contentLengthMaxFilter: 'contentLengthMaxFilter',
      contentLengthMinFilter: 'contentLengthMinFilter',
      docAnswersCountMaxFilter: 'docAnswersCountMaxFilter',
      docAnswersCountMinFilter: 'docAnswersCountMinFilter',
      docAreaIdx: 'docAreaIdx',
      docContentSignIdx: 'docContentSignIdx',
      docCreateTimeEndFilter: 'docCreateTimeEndFilter',
      docCreateTimeStartFilter: 'docCreateTimeStartFilter',
      docPublishTimeEndFilter: 'docPublishTimeEndFilter',
      docPublishTimeStartFilter: 'docPublishTimeStartFilter',
      docUpdateTimeEndFilter: 'docUpdateTimeEndFilter',
      docUpdateTimeStartFilter: 'docUpdateTimeStartFilter',
      duplicateRemoval: 'duplicateRemoval',
      emotionScoreMaxFilter: 'emotionScoreMaxFilter',
      emotionScoreMinFilter: 'emotionScoreMinFilter',
      enableKeywordHighlight: 'enableKeywordHighlight',
      entityName: 'entityName',
      eroticismFilter: 'eroticismFilter',
      excludeAtUsersIdx: 'excludeAtUsersIdx',
      excludeAuthorNameIdx: 'excludeAuthorNameIdx',
      excludingMediaHostsFilter: 'excludingMediaHostsFilter',
      excludingMediaNameFilter: 'excludingMediaNameFilter',
      excludingMediaPoolIdsFilter: 'excludingMediaPoolIdsFilter',
      excludingMessageTypeFilter: 'excludingMessageTypeFilter',
      filterId: 'filterId',
      financeEntityAreaFilter: 'financeEntityAreaFilter',
      financeEntityRelevanceScoreMaxFilter: 'financeEntityRelevanceScoreMaxFilter',
      financeEntityRelevanceScoreMinFilter: 'financeEntityRelevanceScoreMinFilter',
      financeEventCodeFilter: 'financeEventCodeFilter',
      gamblingFilter: 'gamblingFilter',
      hotspotTitleIdx: 'hotspotTitleIdx',
      illegalAdvertisementFilter: 'illegalAdvertisementFilter',
      imageCountMaxFilter: 'imageCountMaxFilter',
      imageCountMinFilter: 'imageCountMinFilter',
      keywordTreeIdsExcludeIdx: 'keywordTreeIdsExcludeIdx',
      keywordTreeIdsIdx: 'keywordTreeIdsIdx',
      likesCountMaxFilter: 'likesCountMaxFilter',
      likesCountMinFilter: 'likesCountMinFilter',
      mediaAreaCityFilter: 'mediaAreaCityFilter',
      mediaAreaProvinceFilter: 'mediaAreaProvinceFilter',
      mediaHostsFilter: 'mediaHostsFilter',
      mediaInfluenceScoreMaxFilter: 'mediaInfluenceScoreMaxFilter',
      mediaInfluenceScoreMinFilter: 'mediaInfluenceScoreMinFilter',
      mediaNameFilter: 'mediaNameFilter',
      mediaPoolIdsFilter: 'mediaPoolIdsFilter',
      mediaPropagationScoreMaxFilter: 'mediaPropagationScoreMaxFilter',
      mediaPropagationScoreMinFilter: 'mediaPropagationScoreMinFilter',
      mediaTypeFilter: 'mediaTypeFilter',
      messageTypeFilter: 'messageTypeFilter',
      negKeywordsIdx: 'negKeywordsIdx',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      parentIdsIdx: 'parentIdsIdx',
      posKeywordsIdx: 'posKeywordsIdx',
      primaryKeyIdx: 'primaryKeyIdx',
      projectId: 'projectId',
      readsCountMaxFilter: 'readsCountMaxFilter',
      readsCountMinFilter: 'readsCountMinFilter',
      relevanceScoreMaxFilter: 'relevanceScoreMaxFilter',
      relevanceScoreMinFilter: 'relevanceScoreMinFilter',
      repostsCountMaxFilter: 'repostsCountMaxFilter',
      repostsCountMinFilter: 'repostsCountMinFilter',
      reprintFromFilter: 'reprintFromFilter',
      sortBy: 'sortBy',
      sortByDirection: 'sortByDirection',
      spamFilter: 'spamFilter',
      suspicionSpamFilter: 'suspicionSpamFilter',
      titleExcludingWordsIdx: 'titleExcludingWordsIdx',
      titleIncludingWordsIdx: 'titleIncludingWordsIdx',
      topicIdx: 'topicIdx',
      usedIndexModeSwitch: 'usedIndexModeSwitch',
      videoCountMaxFilter: 'videoCountMaxFilter',
      videoCountMinFilter: 'videoCountMinFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertisementFilter: 'boolean',
      alipayAccountFilter: 'string',
      assKeywordsIdx: 'string',
      atUsersIdx: 'string',
      audioCountMaxFilter: 'number',
      audioCountMinFilter: 'number',
      authorFollowersCountMaxFilter: 'number',
      authorFollowersCountMinFilter: 'number',
      authorNameIdx: 'string',
      authorSexFilter: 'string',
      authorVerifyTypeFilter: 'string',
      bizTagsIdx: 'string',
      bkzFilter: 'boolean',
      commentsCountMaxFilter: 'number',
      commentsCountMinFilter: 'number',
      contentLengthMaxFilter: 'number',
      contentLengthMinFilter: 'number',
      docAnswersCountMaxFilter: 'number',
      docAnswersCountMinFilter: 'number',
      docAreaIdx: 'string',
      docContentSignIdx: 'string',
      docCreateTimeEndFilter: 'number',
      docCreateTimeStartFilter: 'number',
      docPublishTimeEndFilter: 'number',
      docPublishTimeStartFilter: 'number',
      docUpdateTimeEndFilter: 'number',
      docUpdateTimeStartFilter: 'number',
      duplicateRemoval: 'boolean',
      emotionScoreMaxFilter: 'number',
      emotionScoreMinFilter: 'number',
      enableKeywordHighlight: 'boolean',
      entityName: 'string',
      eroticismFilter: 'boolean',
      excludeAtUsersIdx: 'string',
      excludeAuthorNameIdx: 'string',
      excludingMediaHostsFilter: 'string',
      excludingMediaNameFilter: 'string',
      excludingMediaPoolIdsFilter: 'string',
      excludingMessageTypeFilter: 'string',
      filterId: 'number',
      financeEntityAreaFilter: 'string',
      financeEntityRelevanceScoreMaxFilter: 'number',
      financeEntityRelevanceScoreMinFilter: 'number',
      financeEventCodeFilter: 'string',
      gamblingFilter: 'boolean',
      hotspotTitleIdx: 'string',
      illegalAdvertisementFilter: 'boolean',
      imageCountMaxFilter: 'number',
      imageCountMinFilter: 'number',
      keywordTreeIdsExcludeIdx: 'string',
      keywordTreeIdsIdx: 'string',
      likesCountMaxFilter: 'number',
      likesCountMinFilter: 'number',
      mediaAreaCityFilter: 'string',
      mediaAreaProvinceFilter: 'string',
      mediaHostsFilter: 'string',
      mediaInfluenceScoreMaxFilter: 'number',
      mediaInfluenceScoreMinFilter: 'number',
      mediaNameFilter: 'string',
      mediaPoolIdsFilter: 'string',
      mediaPropagationScoreMaxFilter: 'number',
      mediaPropagationScoreMinFilter: 'number',
      mediaTypeFilter: 'string',
      messageTypeFilter: 'string',
      negKeywordsIdx: 'string',
      pageNow: 'number',
      pageSize: 'number',
      parentIdsIdx: 'string',
      posKeywordsIdx: 'string',
      primaryKeyIdx: 'string',
      projectId: 'number',
      readsCountMaxFilter: 'number',
      readsCountMinFilter: 'number',
      relevanceScoreMaxFilter: 'number',
      relevanceScoreMinFilter: 'number',
      repostsCountMaxFilter: 'number',
      repostsCountMinFilter: 'number',
      reprintFromFilter: 'string',
      sortBy: 'string',
      sortByDirection: 'string',
      spamFilter: 'boolean',
      suspicionSpamFilter: 'boolean',
      titleExcludingWordsIdx: 'string',
      titleIncludingWordsIdx: 'string',
      topicIdx: 'string',
      usedIndexModeSwitch: 'string',
      videoCountMaxFilter: 'number',
      videoCountMinFilter: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StatisticPoint extends $tea.Model {
  key?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YuqingHotspotMessage extends $tea.Model {
  category?: string;
  commentsCount?: number;
  crawlerTimeFmt?: string;
  discussesCount?: number;
  docContent?: string;
  docId?: string;
  docTitle?: string;
  docUrl?: string;
  firstExistTimestamp?: number;
  firstHotValue?: number;
  firstRank?: number;
  followersCount?: number;
  hotValue?: number;
  hotspotType?: string;
  lastExistTimestamp?: number;
  lastRank?: number;
  maxHotValue?: number;
  maxRank?: number;
  mediaSubType?: string;
  mediaType?: string;
  originalCount?: number;
  rank?: number;
  readsCount?: number;
  screenName?: string;
  totalExistTimestamp?: number;
  userId?: string;
  videoCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      commentsCount: 'commentsCount',
      crawlerTimeFmt: 'crawlerTimeFmt',
      discussesCount: 'discussesCount',
      docContent: 'docContent',
      docId: 'docId',
      docTitle: 'docTitle',
      docUrl: 'docUrl',
      firstExistTimestamp: 'firstExistTimestamp',
      firstHotValue: 'firstHotValue',
      firstRank: 'firstRank',
      followersCount: 'followersCount',
      hotValue: 'hotValue',
      hotspotType: 'hotspotType',
      lastExistTimestamp: 'lastExistTimestamp',
      lastRank: 'lastRank',
      maxHotValue: 'maxHotValue',
      maxRank: 'maxRank',
      mediaSubType: 'mediaSubType',
      mediaType: 'mediaType',
      originalCount: 'originalCount',
      rank: 'rank',
      readsCount: 'readsCount',
      screenName: 'screenName',
      totalExistTimestamp: 'totalExistTimestamp',
      userId: 'userId',
      videoCount: 'videoCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commentsCount: 'number',
      crawlerTimeFmt: 'string',
      discussesCount: 'number',
      docContent: 'string',
      docId: 'string',
      docTitle: 'string',
      docUrl: 'string',
      firstExistTimestamp: 'number',
      firstHotValue: 'number',
      firstRank: 'number',
      followersCount: 'number',
      hotValue: 'number',
      hotspotType: 'string',
      lastExistTimestamp: 'number',
      lastRank: 'number',
      maxHotValue: 'number',
      maxRank: 'number',
      mediaSubType: 'string',
      mediaType: 'string',
      originalCount: 'number',
      rank: 'number',
      readsCount: 'number',
      screenName: 'string',
      totalExistTimestamp: 'number',
      userId: 'string',
      videoCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YuqingMessage extends $tea.Model {
  advertisement?: boolean;
  alipayAccount?: number;
  appStoreAppName?: string;
  appStoreAppScore?: number;
  appStoreName?: string;
  atAuthorNames?: string[];
  authorAvatarUrl?: string;
  authorFollowersCount?: number;
  authorFriendsCount?: number;
  authorId?: string;
  authorName?: string;
  authorProfileUrl?: string;
  authorStatusesCount?: number;
  authorVerifyType?: string;
  bkz?: boolean;
  contentAudioText?: string;
  contentAudioUrls?: string;
  contentEmotionType?: number;
  contentImageText?: string;
  contentImageUrls?: string;
  contentVideoText?: string;
  contentVideoUrls?: string;
  docAnswersCount?: number;
  docAreas?: string[];
  docCommentsCount?: number;
  docContent?: string;
  docContentBrief?: string;
  docContentSign?: string;
  docCreateTime?: number;
  docFocusArticleCount?: number;
  docId?: string;
  docLikesCount?: number;
  docMessageType?: string;
  docParentId?: string;
  docPublishTime?: number;
  docReadsCount?: number;
  docRepostsCount?: number;
  docSelfContentSign?: string;
  docTitle?: string;
  docTitleBrief?: string;
  docUrl?: string;
  docUserDefineJson?: string;
  emotionScore?: string;
  entityAlias?: string;
  entityRelevancyScore?: string;
  eroticism?: boolean;
  eroticismScoreFmt?: string;
  financeEvents?: FinanceEvent[];
  gambling?: boolean;
  highlightAssKeywords?: string[];
  highlightKeywords?: string[];
  highlightPosKeywords?: string[];
  imageCount?: number;
  mediaHosts?: string[];
  mediaInfluenceLevel?: number;
  mediaInfluenceScore?: string;
  mediaName?: string;
  mediaPropagationScore?: string;
  mediaQunName?: string;
  mediaResCity?: string;
  mediaResCountry?: string;
  mediaResProvince?: string;
  mediaType?: string;
  originalMedia?: string[];
  relevanceScoreFmt?: string;
  similarNumber?: number;
  spam?: boolean;
  ueEmotionScore?: string;
  weiboCommentId?: string;
  weiboMid?: string;
  static names(): { [key: string]: string } {
    return {
      advertisement: 'advertisement',
      alipayAccount: 'alipayAccount',
      appStoreAppName: 'appStoreAppName',
      appStoreAppScore: 'appStoreAppScore',
      appStoreName: 'appStoreName',
      atAuthorNames: 'atAuthorNames',
      authorAvatarUrl: 'authorAvatarUrl',
      authorFollowersCount: 'authorFollowersCount',
      authorFriendsCount: 'authorFriendsCount',
      authorId: 'authorId',
      authorName: 'authorName',
      authorProfileUrl: 'authorProfileUrl',
      authorStatusesCount: 'authorStatusesCount',
      authorVerifyType: 'authorVerifyType',
      bkz: 'bkz',
      contentAudioText: 'contentAudioText',
      contentAudioUrls: 'contentAudioUrls',
      contentEmotionType: 'contentEmotionType',
      contentImageText: 'contentImageText',
      contentImageUrls: 'contentImageUrls',
      contentVideoText: 'contentVideoText',
      contentVideoUrls: 'contentVideoUrls',
      docAnswersCount: 'docAnswersCount',
      docAreas: 'docAreas',
      docCommentsCount: 'docCommentsCount',
      docContent: 'docContent',
      docContentBrief: 'docContentBrief',
      docContentSign: 'docContentSign',
      docCreateTime: 'docCreateTime',
      docFocusArticleCount: 'docFocusArticleCount',
      docId: 'docId',
      docLikesCount: 'docLikesCount',
      docMessageType: 'docMessageType',
      docParentId: 'docParentId',
      docPublishTime: 'docPublishTime',
      docReadsCount: 'docReadsCount',
      docRepostsCount: 'docRepostsCount',
      docSelfContentSign: 'docSelfContentSign',
      docTitle: 'docTitle',
      docTitleBrief: 'docTitleBrief',
      docUrl: 'docUrl',
      docUserDefineJson: 'docUserDefineJson',
      emotionScore: 'emotionScore',
      entityAlias: 'entityAlias',
      entityRelevancyScore: 'entityRelevancyScore',
      eroticism: 'eroticism',
      eroticismScoreFmt: 'eroticismScoreFmt',
      financeEvents: 'financeEvents',
      gambling: 'gambling',
      highlightAssKeywords: 'highlightAssKeywords',
      highlightKeywords: 'highlightKeywords',
      highlightPosKeywords: 'highlightPosKeywords',
      imageCount: 'imageCount',
      mediaHosts: 'mediaHosts',
      mediaInfluenceLevel: 'mediaInfluenceLevel',
      mediaInfluenceScore: 'mediaInfluenceScore',
      mediaName: 'mediaName',
      mediaPropagationScore: 'mediaPropagationScore',
      mediaQunName: 'mediaQunName',
      mediaResCity: 'mediaResCity',
      mediaResCountry: 'mediaResCountry',
      mediaResProvince: 'mediaResProvince',
      mediaType: 'mediaType',
      originalMedia: 'originalMedia',
      relevanceScoreFmt: 'relevanceScoreFmt',
      similarNumber: 'similarNumber',
      spam: 'spam',
      ueEmotionScore: 'ueEmotionScore',
      weiboCommentId: 'weiboCommentId',
      weiboMid: 'weiboMid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertisement: 'boolean',
      alipayAccount: 'number',
      appStoreAppName: 'string',
      appStoreAppScore: 'number',
      appStoreName: 'string',
      atAuthorNames: { 'type': 'array', 'itemType': 'string' },
      authorAvatarUrl: 'string',
      authorFollowersCount: 'number',
      authorFriendsCount: 'number',
      authorId: 'string',
      authorName: 'string',
      authorProfileUrl: 'string',
      authorStatusesCount: 'number',
      authorVerifyType: 'string',
      bkz: 'boolean',
      contentAudioText: 'string',
      contentAudioUrls: 'string',
      contentEmotionType: 'number',
      contentImageText: 'string',
      contentImageUrls: 'string',
      contentVideoText: 'string',
      contentVideoUrls: 'string',
      docAnswersCount: 'number',
      docAreas: { 'type': 'array', 'itemType': 'string' },
      docCommentsCount: 'number',
      docContent: 'string',
      docContentBrief: 'string',
      docContentSign: 'string',
      docCreateTime: 'number',
      docFocusArticleCount: 'number',
      docId: 'string',
      docLikesCount: 'number',
      docMessageType: 'string',
      docParentId: 'string',
      docPublishTime: 'number',
      docReadsCount: 'number',
      docRepostsCount: 'number',
      docSelfContentSign: 'string',
      docTitle: 'string',
      docTitleBrief: 'string',
      docUrl: 'string',
      docUserDefineJson: 'string',
      emotionScore: 'string',
      entityAlias: 'string',
      entityRelevancyScore: 'string',
      eroticism: 'boolean',
      eroticismScoreFmt: 'string',
      financeEvents: { 'type': 'array', 'itemType': FinanceEvent },
      gambling: 'boolean',
      highlightAssKeywords: { 'type': 'array', 'itemType': 'string' },
      highlightKeywords: { 'type': 'array', 'itemType': 'string' },
      highlightPosKeywords: { 'type': 'array', 'itemType': 'string' },
      imageCount: 'number',
      mediaHosts: { 'type': 'array', 'itemType': 'string' },
      mediaInfluenceLevel: 'number',
      mediaInfluenceScore: 'string',
      mediaName: 'string',
      mediaPropagationScore: 'string',
      mediaQunName: 'string',
      mediaResCity: 'string',
      mediaResCountry: 'string',
      mediaResProvince: 'string',
      mediaType: 'string',
      originalMedia: { 'type': 'array', 'itemType': 'string' },
      relevanceScoreFmt: 'string',
      similarNumber: 'number',
      spam: 'boolean',
      ueEmotionScore: 'string',
      weiboCommentId: 'string',
      weiboMid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregateSearchYuqingRequest extends $tea.Model {
  aggregateFunction?: string;
  groupByKey?: string;
  groupLimits?: number;
  requestId?: string;
  searchCondition?: SearchCondition;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateFunction: 'aggregateFunction',
      groupByKey: 'groupByKey',
      groupLimits: 'groupLimits',
      requestId: 'requestId',
      searchCondition: 'searchCondition',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateFunction: 'string',
      groupByKey: 'string',
      groupLimits: 'number',
      requestId: 'string',
      searchCondition: SearchCondition,
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregateSearchYuqingResponseBody extends $tea.Model {
  aggResultList?: StatisticPoint[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggResultList: 'aggResultList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggResultList: { 'type': 'array', 'itemType': StatisticPoint },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregateSearchYuqingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AggregateSearchYuqingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AggregateSearchYuqingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  createUserId?: string;
  createUserName?: string;
  project?: Project;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      createUserId: 'createUserId',
      createUserName: 'createUserName',
      project: 'project',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUserId: 'string',
      createUserName: 'string',
      project: Project,
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
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

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  id?: number;
  modifiedUserId?: string;
  modifiedUserName?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      modifiedUserId: 'modifiedUserId',
      modifiedUserName: 'modifiedUserName',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      modifiedUserId: 'string',
      modifiedUserName: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisComponentResultRequest extends $tea.Model {
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

export class GetAnalysisComponentResultResponseBody extends $tea.Model {
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

export class GetAnalysisComponentResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAnalysisComponentResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAnalysisComponentResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailRequest extends $tea.Model {
  docId?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMessageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMessageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotspotMessageRequest extends $tea.Model {
  hotspotSearchCondition?: HotspotSearchCondition;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      hotspotSearchCondition: 'hotspotSearchCondition',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotSearchCondition: HotspotSearchCondition,
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotspotMessageResponseBody extends $tea.Model {
  hotspotMessages?: YuqingHotspotMessage[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotspotMessages: 'hotspotMessages',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotMessages: { 'type': 'array', 'itemType': YuqingHotspotMessage },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotspotMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotspotMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotspotMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYuqingMessagesRequest extends $tea.Model {
  requestId?: string;
  searchCondition?: SearchCondition;
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

export class ListYuqingMessagesResponseBody extends $tea.Model {
  requestId?: string;
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

export class ListYuqingMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListYuqingMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListYuqingMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmDataListRequest extends $tea.Model {
  alarmQuery?: AlarmQueryCondition;
  orderByKey?: string;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmQuery: 'alarmQuery',
      orderByKey: 'orderByKey',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmQuery: AlarmQueryCondition,
      orderByKey: 'string',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmDataListResponseBody extends $tea.Model {
  pages?: AlarmData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pages: 'pages',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pages: { 'type': 'array', 'itemType': AlarmData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAlarmDataListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAlarmDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnalysisComponentRequest extends $tea.Model {
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

export class QueryAnalysisComponentResponseBody extends $tea.Model {
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

export class QueryAnalysisComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAnalysisComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAnalysisComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFilterListRequest extends $tea.Model {
  filterId?: number;
  pageNow?: number;
  pageSize?: number;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      filterId: 'filterId',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterId: 'number',
      pageNow: 'number',
      pageSize: 'number',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFilterListResponseBody extends $tea.Model {
  filters?: Filter[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'filters',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': Filter },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFilterListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFilterListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFilterListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListRequest extends $tea.Model {
  pageNow?: number;
  pageSize?: number;
  projectGroupId?: number;
  projectId?: number;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      projectGroupId: 'projectGroupId',
      projectId: 'projectId',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNow: 'number',
      pageSize: 'number',
      projectGroupId: 'number',
      projectId: 'number',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBody extends $tea.Model {
  projectList?: Project[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectList: 'projectList',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectList: { 'type': 'array', 'itemType': Project },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProjectListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProjectListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportNotifiesRequest extends $tea.Model {
  cpId?: number;
  createEndTimestamp?: number;
  createStartTimestamp?: number;
  pageNow?: number;
  pageSize?: number;
  requestId?: string;
  subject?: string;
  teamHashId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cpId: 'cpId',
      createEndTimestamp: 'createEndTimestamp',
      createStartTimestamp: 'createStartTimestamp',
      pageNow: 'pageNow',
      pageSize: 'pageSize',
      requestId: 'requestId',
      subject: 'subject',
      teamHashId: 'teamHashId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpId: 'number',
      createEndTimestamp: 'number',
      createStartTimestamp: 'number',
      pageNow: 'number',
      pageSize: 'number',
      requestId: 'string',
      subject: 'string',
      teamHashId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportNotifiesResponseBody extends $tea.Model {
  reportNotifyRecordList?: ReportNotifyRecord[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      reportNotifyRecordList: 'reportNotifyRecordList',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportNotifyRecordList: { 'type': 'array', 'itemType': ReportNotifyRecord },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportNotifiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryReportNotifiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryReportNotifiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagNodesRequest extends $tea.Model {
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagNodesResponseBody extends $tea.Model {
  bizTagTreeList?: BizTagTree[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizTagTreeList: 'bizTagTreeList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTagTreeList: { 'type': 'array', 'itemType': BizTagTree },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTagNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTagNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  isInfo?: boolean;
  project?: Project;
  projectId?: number;
  requestId?: string;
  teamHashId?: string;
  updateUserId?: string;
  updateUserName?: string;
  static names(): { [key: string]: string } {
    return {
      isInfo: 'isInfo',
      project: 'project',
      projectId: 'projectId',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
      updateUserId: 'updateUserId',
      updateUserName: 'updateUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isInfo: 'boolean',
      project: Project,
      projectId: 'number',
      requestId: 'string',
      teamHashId: 'string',
      updateUserId: 'string',
      updateUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
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

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropagationRequest extends $tea.Model {
  requestId?: string;
  teamHashId?: string;
  weiboUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      teamHashId: 'teamHashId',
      weiboUrls: 'weiboUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      teamHashId: 'string',
      weiboUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropagationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropagationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePropagationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePropagationResponseBody,
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

  async aggregateSearchYuqing(request: AggregateSearchYuqingRequest): Promise<AggregateSearchYuqingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aggregateSearchYuqingWithOptions(request, headers, runtime);
  }

  async aggregateSearchYuqingWithOptions(request: AggregateSearchYuqingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AggregateSearchYuqingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregateFunction)) {
      body["aggregateFunction"] = request.aggregateFunction;
    }

    if (!Util.isUnset(request.groupByKey)) {
      body["groupByKey"] = request.groupByKey;
    }

    if (!Util.isUnset(request.groupLimits)) {
      body["groupLimits"] = request.groupLimits;
    }

    if (!Util.isUnset($tea.toMap(request.searchCondition))) {
      body["searchCondition"] = request.searchCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AggregateSearchYuqing",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/aggSearch.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AggregateSearchYuqingResponse>(await this.callApi(params, req, runtime), new AggregateSearchYuqingResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createUserId)) {
      body["createUserId"] = request.createUserId;
    }

    if (!Util.isUnset(request.createUserName)) {
      body["createUserName"] = request.createUserName;
    }

    if (!Util.isUnset($tea.toMap(request.project))) {
      body["project"] = request.project;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/createProject.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(request, headers, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["id"] = request.id;
    }

    if (!Util.isUnset(request.modifiedUserId)) {
      body["modifiedUserId"] = request.modifiedUserId;
    }

    if (!Util.isUnset(request.modifiedUserName)) {
      body["modifiedUserName"] = request.modifiedUserName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/deleteProject.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async getAnalysisComponentResult(request: GetAnalysisComponentResultRequest): Promise<GetAnalysisComponentResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnalysisComponentResultWithOptions(request, headers, runtime);
  }

  async getAnalysisComponentResultWithOptions(request: GetAnalysisComponentResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAnalysisComponentResultResponse> {
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
      action: "GetAnalysisComponentResult",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/getAnalysisComponentResult.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAnalysisComponentResultResponse>(await this.callApi(params, req, runtime), new GetAnalysisComponentResultResponse({}));
  }

  async getMessageDetail(request: GetMessageDetailRequest): Promise<GetMessageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageDetailWithOptions(request, headers, runtime);
  }

  async getMessageDetailWithOptions(request: GetMessageDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMessageDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      query["docId"] = request.docId;
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
      action: "GetMessageDetail",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/getMessageFromHbase.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMessageDetailResponse>(await this.callApi(params, req, runtime), new GetMessageDetailResponse({}));
  }

  async listHotspotMessage(request: ListHotspotMessageRequest): Promise<ListHotspotMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHotspotMessageWithOptions(request, headers, runtime);
  }

  async listHotspotMessageWithOptions(request: ListHotspotMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHotspotMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.hotspotSearchCondition))) {
      body["hotspotSearchCondition"] = request.hotspotSearchCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotspotMessage",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/searchHotspotDetail.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotspotMessageResponse>(await this.callApi(params, req, runtime), new ListHotspotMessageResponse({}));
  }

  async listYuqingMessages(request: ListYuqingMessagesRequest): Promise<ListYuqingMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listYuqingMessagesWithOptions(request, headers, runtime);
  }

  async listYuqingMessagesWithOptions(request: ListYuqingMessagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListYuqingMessagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.searchCondition))) {
      body["searchCondition"] = request.searchCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListYuqingMessages",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/searchMessages.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListYuqingMessagesResponse>(await this.callApi(params, req, runtime), new ListYuqingMessagesResponse({}));
  }

  async queryAlarmDataList(request: QueryAlarmDataListRequest): Promise<QueryAlarmDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAlarmDataListWithOptions(request, headers, runtime);
  }

  async queryAlarmDataListWithOptions(request: QueryAlarmDataListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryAlarmDataListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.alarmQuery))) {
      query["alarmQuery"] = request.alarmQuery;
    }

    if (!Util.isUnset(request.orderByKey)) {
      query["orderByKey"] = request.orderByKey;
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
      action: "QueryAlarmDataList",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryAlarmDataList.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryAlarmDataListResponse>(await this.callApi(params, req, runtime), new QueryAlarmDataListResponse({}));
  }

  async queryAnalysisComponent(request: QueryAnalysisComponentRequest): Promise<QueryAnalysisComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAnalysisComponentWithOptions(request, headers, runtime);
  }

  async queryAnalysisComponentWithOptions(request: QueryAnalysisComponentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryAnalysisComponentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analyseType)) {
      body["analyseType"] = request.analyseType;
    }

    if (!Util.isUnset($tea.toMap(request.searchCondition))) {
      body["searchCondition"] = request.searchCondition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAnalysisComponent",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryAnalysisComponent.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAnalysisComponentResponse>(await this.callApi(params, req, runtime), new QueryAnalysisComponentResponse({}));
  }

  async queryFilterList(request: QueryFilterListRequest): Promise<QueryFilterListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryFilterListWithOptions(request, headers, runtime);
  }

  async queryFilterListWithOptions(request: QueryFilterListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryFilterListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterId)) {
      query["filterId"] = request.filterId;
    }

    if (!Util.isUnset(request.pageNow)) {
      query["pageNow"] = request.pageNow;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
      action: "QueryFilterList",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryFilterList.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryFilterListResponse>(await this.callApi(params, req, runtime), new QueryFilterListResponse({}));
  }

  async queryProjectList(request: QueryProjectListRequest): Promise<QueryProjectListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectListWithOptions(request, headers, runtime);
  }

  async queryProjectListWithOptions(request: QueryProjectListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryProjectListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNow)) {
      query["pageNow"] = request.pageNow;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectGroupId)) {
      query["projectGroupId"] = request.projectGroupId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["projectId"] = request.projectId;
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
      action: "QueryProjectList",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryProjectList.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryProjectListResponse>(await this.callApi(params, req, runtime), new QueryProjectListResponse({}));
  }

  async queryReportNotifies(request: QueryReportNotifiesRequest): Promise<QueryReportNotifiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryReportNotifiesWithOptions(request, headers, runtime);
  }

  async queryReportNotifiesWithOptions(request: QueryReportNotifiesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryReportNotifiesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpId)) {
      query["cpId"] = request.cpId;
    }

    if (!Util.isUnset(request.createEndTimestamp)) {
      query["createEndTimestamp"] = request.createEndTimestamp;
    }

    if (!Util.isUnset(request.createStartTimestamp)) {
      query["createStartTimestamp"] = request.createStartTimestamp;
    }

    if (!Util.isUnset(request.pageNow)) {
      query["pageNow"] = request.pageNow;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.subject)) {
      query["subject"] = request.subject;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryReportNotifies",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryReportNotifies.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryReportNotifiesResponse>(await this.callApi(params, req, runtime), new QueryReportNotifiesResponse({}));
  }

  async queryTagNodes(request: QueryTagNodesRequest): Promise<QueryTagNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTagNodesWithOptions(request, headers, runtime);
  }

  async queryTagNodesWithOptions(request: QueryTagNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryTagNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "QueryTagNodes",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryTagNodes.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTagNodesResponse>(await this.callApi(params, req, runtime), new QueryTagNodesResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(request, headers, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isInfo)) {
      body["isInfo"] = request.isInfo;
    }

    if (!Util.isUnset($tea.toMap(request.project))) {
      body["project"] = request.project;
    }

    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.updateUserId)) {
      body["updateUserId"] = request.updateUserId;
    }

    if (!Util.isUnset(request.updateUserName)) {
      body["updateUserName"] = request.updateUserName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/updateProject.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updatePropagation(request: UpdatePropagationRequest): Promise<UpdatePropagationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePropagationWithOptions(request, headers, runtime);
  }

  async updatePropagationWithOptions(request: UpdatePropagationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePropagationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.weiboUrls)) {
      body["weiboUrls"] = request.weiboUrls;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePropagation",
      version: "2021-01-26",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/updatePropagation.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePropagationResponse>(await this.callApi(params, req, runtime), new UpdatePropagationResponse({}));
  }

}

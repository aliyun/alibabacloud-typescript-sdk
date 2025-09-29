// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * xx
   */
  eventInfo?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 1
   */
  responseTime?: number;
  /**
   * @example
   * x
   */
  sessionId?: string;
  /**
   * @example
   * x
   */
  taskId?: string;
  /**
   * @example
   * xx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      originSessionId: 'OriginSessionId',
      responseTime: 'ResponseTime',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      originSessionId: 'string',
      responseTime: 'number',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xxx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.9
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 2
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultClipInfos[];
  /**
   * @example
   * http://xxx
   */
  fileUrl?: string;
  /**
   * @example
   * xxx
   */
  mediaId?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      traceabilityId: 'TraceabilityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      traceabilityId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResult extends $dara.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * http://xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 1
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultClipInfos[];
  /**
   * @example
   * http://xx
   */
  fileUrl?: string;
  /**
   * @example
   * xxx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResult;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResult,
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.searchResult && typeof (this.searchResult as any).validate === 'function') {
      (this.searchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle,
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias extends $dara.Model {
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias[];
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.9
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics extends $dara.Model {
  audioSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResult;
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult;
  textSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult;
  /**
   * @example
   * xx
   */
  topic?: string;
  videoSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult;
  static names(): { [key: string]: string } {
    return {
      audioSearchResult: 'AudioSearchResult',
      imageSearchResult: 'ImageSearchResult',
      textSearchResult: 'TextSearchResult',
      topic: 'Topic',
      videoSearchResult: 'VideoSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResult,
      imageSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult,
      textSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult,
      topic: 'string',
      videoSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult,
    };
  }

  validate() {
    if(this.audioSearchResult && typeof (this.audioSearchResult as any).validate === 'function') {
      (this.audioSearchResult as any).validate();
    }
    if(this.imageSearchResult && typeof (this.imageSearchResult as any).validate === 'function') {
      (this.imageSearchResult as any).validate();
    }
    if(this.textSearchResult && typeof (this.textSearchResult as any).validate === 'function') {
      (this.textSearchResult as any).validate();
    }
    if(this.videoSearchResult && typeof (this.videoSearchResult as any).validate === 'function') {
      (this.videoSearchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult extends $dara.Model {
  clusterTopics?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics[];
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTopics: 'ClusterTopics',
      generateFinished: 'GenerateFinished',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTopics: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics },
      generateFinished: 'boolean',
      textGenerate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterTopics)) {
      $dara.Model.validateArray(this.clusterTopics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias extends $dara.Model {
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xxx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList extends $dara.Model {
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      docUuid: 'DocUuid',
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docUuid: 'string',
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMediaList)) {
      $dara.Model.validateArray(this.multimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult extends $dara.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  excerpt?: string;
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias[];
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList[];
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      excerpt: 'Excerpt',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      excerpt: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias },
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList },
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.textGenerateMultimodalMediaList)) {
      $dara.Model.validateArray(this.textGenerateMultimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  reasonTextGenerate?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateLevel: 'GenerateLevel',
      reasonTextGenerate: 'ReasonTextGenerate',
      searchResult: 'SearchResult',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateLevel: 'string',
      reasonTextGenerate: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult },
      textGenerate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      traceabilityId: 'TraceabilityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle,
      fileUrl: 'string',
      mediaId: 'string',
      traceabilityId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult extends $dara.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent extends $dara.Model {
  causeList?: string[];
  processList?: string[];
  resultList?: string[];
  static names(): { [key: string]: string } {
    return {
      causeList: 'CauseList',
      processList: 'ProcessList',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causeList: { 'type': 'array', 'itemType': 'string' },
      processList: { 'type': 'array', 'itemType': 'string' },
      resultList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.causeList)) {
      $dara.Model.validateArray(this.causeList);
    }
    if(Array.isArray(this.processList)) {
      $dara.Model.validateArray(this.processList);
    }
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList extends $dara.Model {
  /**
   * @example
   * task-started
   */
  event?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent;
  /**
   * @example
   * xx
   */
  location?: string;
  /**
   * @example
   * xx
   */
  people?: string;
  /**
   * @example
   * 时间
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      location: 'Location',
      people: 'People',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent,
      location: 'string',
      people: 'string',
      time: 'string',
    };
  }

  validate() {
    if(this.event && typeof (this.event as any).validate === 'function') {
      (this.event as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle;
  newsElementList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      newsElementList: 'NewsElementList',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle,
      newsElementList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList },
      textGenerate: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.newsElementList)) {
      $dara.Model.validateArray(this.newsElementList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  newsElementArticleList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList[];
  /**
   * @example
   * x
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      newsElementArticleList: 'NewsElementArticleList',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      newsElementArticleList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList },
      textGenerate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.newsElementArticleList)) {
      $dara.Model.validateArray(this.newsElementArticleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate extends $dara.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate extends $dara.Model {
  /**
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      mediaType: 'MediaType',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaType: 'string',
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates extends $dara.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate,
    };
  }

  validate() {
    if(this.generateCoordinate && typeof (this.generateCoordinate as any).validate === 'function') {
      (this.generateCoordinate as any).validate();
    }
    if(this.newsCoordinate && typeof (this.newsCoordinate as any).validate === 'function') {
      (this.newsCoordinate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability extends $dara.Model {
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates[];
  /**
   * @example
   * 0.9
   */
  duplicate?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      duplicate: 'Duplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates },
      duplicate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coordinates)) {
      $dara.Model.validateArray(this.coordinates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.1
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * xx
   */
  searchQuery?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult[];
  /**
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 时间脉络-时间
   */
  timelineDateStr?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchQuery: 'SearchQuery',
      searchResult: 'SearchResult',
      searchType: 'SearchType',
      size: 'Size',
      timelineDateStr: 'TimelineDateStr',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchQuery: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult },
      searchType: 'string',
      size: 'number',
      timelineDateStr: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList extends $dara.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList extends $dara.Model {
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMediaList)) {
      $dara.Model.validateArray(this.multimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability;
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList[];
  reasonTextGenerate?: string;
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateLevel: 'GenerateLevel',
      generateTraceability: 'GenerateTraceability',
      multimodalSearchResultList: 'MultimodalSearchResultList',
      reasonTextGenerate: 'ReasonTextGenerate',
      referenceList: 'ReferenceList',
      textGenerate: 'TextGenerate',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateLevel: 'string',
      generateTraceability: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability,
      multimodalSearchResultList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList },
      reasonTextGenerate: 'string',
      referenceList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList },
      textGenerate: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList },
    };
  }

  validate() {
    if(this.generateTraceability && typeof (this.generateTraceability as any).validate === 'function') {
      (this.generateTraceability as any).validate();
    }
    if(Array.isArray(this.multimodalSearchResultList)) {
      $dara.Model.validateArray(this.multimodalSearchResultList);
    }
    if(Array.isArray(this.referenceList)) {
      $dara.Model.validateArray(this.referenceList);
    }
    if(Array.isArray(this.textGenerateMultimodalMediaList)) {
      $dara.Model.validateArray(this.textGenerateMultimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResultSearchResult extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * xxx
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult extends $dara.Model {
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResultSearchResult[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate extends $dara.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate extends $dara.Model {
  /**
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      mediaType: 'MediaType',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaType: 'string',
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates extends $dara.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate,
    };
  }

  validate() {
    if(this.generateCoordinate && typeof (this.generateCoordinate as any).validate === 'function') {
      (this.generateCoordinate as any).validate();
    }
    if(this.newsCoordinate && typeof (this.newsCoordinate as any).validate === 'function') {
      (this.newsCoordinate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability extends $dara.Model {
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates[];
  /**
   * @example
   * 0.9
   */
  duplicate?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      duplicate: 'Duplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates },
      duplicate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coordinates)) {
      $dara.Model.validateArray(this.coordinates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList extends $dara.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult[];
  /**
   * @example
   * 2024-09-11
   */
  timelineDateStr?: string;
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
      timelineDateStr: 'TimelineDateStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult },
      timelineDateStr: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList extends $dara.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xxxx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList extends $dara.Model {
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMediaList)) {
      $dara.Model.validateArray(this.multimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability;
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList[];
  reasonTextGenerate?: string;
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateTraceability: 'GenerateTraceability',
      multimodalSearchResultList: 'MultimodalSearchResultList',
      reasonTextGenerate: 'ReasonTextGenerate',
      referenceList: 'ReferenceList',
      textGenerate: 'TextGenerate',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateTraceability: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability,
      multimodalSearchResultList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList },
      reasonTextGenerate: 'string',
      referenceList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList },
      textGenerate: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList },
    };
  }

  validate() {
    if(this.generateTraceability && typeof (this.generateTraceability as any).validate === 'function') {
      (this.generateTraceability as any).validate();
    }
    if(Array.isArray(this.multimodalSearchResultList)) {
      $dara.Model.validateArray(this.multimodalSearchResultList);
    }
    if(Array.isArray(this.referenceList)) {
      $dara.Model.validateArray(this.referenceList);
    }
    if(Array.isArray(this.textGenerateMultimodalMediaList)) {
      $dara.Model.validateArray(this.textGenerateMultimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle extends $dara.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.8
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      traceabilityId: 'TraceabilityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      traceabilityId: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult extends $dara.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent extends $dara.Model {
  audioSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResult;
  clusterTopicResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult;
  excerptResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult;
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult;
  newsElementResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult;
  textGenerateResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult;
  textSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult;
  timelineResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult;
  videoSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult;
  static names(): { [key: string]: string } {
    return {
      audioSearchResult: 'AudioSearchResult',
      clusterTopicResult: 'ClusterTopicResult',
      excerptResult: 'ExcerptResult',
      imageSearchResult: 'ImageSearchResult',
      newsElementResult: 'NewsElementResult',
      textGenerateResult: 'TextGenerateResult',
      textSearchResult: 'TextSearchResult',
      timelineResult: 'TimelineResult',
      videoSearchResult: 'VideoSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResult,
      clusterTopicResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult,
      excerptResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult,
      imageSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult,
      newsElementResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult,
      textGenerateResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult,
      textSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult,
      timelineResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult,
      videoSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult,
    };
  }

  validate() {
    if(this.audioSearchResult && typeof (this.audioSearchResult as any).validate === 'function') {
      (this.audioSearchResult as any).validate();
    }
    if(this.clusterTopicResult && typeof (this.clusterTopicResult as any).validate === 'function') {
      (this.clusterTopicResult as any).validate();
    }
    if(this.excerptResult && typeof (this.excerptResult as any).validate === 'function') {
      (this.excerptResult as any).validate();
    }
    if(this.imageSearchResult && typeof (this.imageSearchResult as any).validate === 'function') {
      (this.imageSearchResult as any).validate();
    }
    if(this.newsElementResult && typeof (this.newsElementResult as any).validate === 'function') {
      (this.newsElementResult as any).validate();
    }
    if(this.textGenerateResult && typeof (this.textGenerateResult as any).validate === 'function') {
      (this.textGenerateResult as any).validate();
    }
    if(this.textSearchResult && typeof (this.textSearchResult as any).validate === 'function') {
      (this.textSearchResult as any).validate();
    }
    if(this.timelineResult && typeof (this.timelineResult as any).validate === 'function') {
      (this.timelineResult as any).validate();
    }
    if(this.videoSearchResult && typeof (this.videoSearchResult as any).validate === 'function') {
      (this.videoSearchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate extends $dara.Model {
  firstTokenTime?: number;
  outputAvgTime?: number;
  searchTime?: number;
  time?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      firstTokenTime: 'FirstTokenTime',
      outputAvgTime: 'OutputAvgTime',
      searchTime: 'SearchTime',
      time: 'Time',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTokenTime: 'number',
      outputAvgTime: 'number',
      searchTime: 'number',
      time: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext extends $dara.Model {
  /**
   * @example
   * 您想了解关于xx的哪些信息？
   */
  askUser?: string;
  askUserKeywords?: string[];
  /**
   * @example
   * start
   */
  currentStep?: string;
  generatedContent?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent;
  modelId?: string;
  /**
   * @example
   * search
   */
  nextStep?: string;
  recommendSearchQueryList?: string[];
  searchKeywords?: string[];
  searchQueryList?: string[];
  /**
   * @example
   * searchQuery
   */
  supplementDataType?: string;
  /**
   * @example
   * true
   */
  supplementEnable?: boolean;
  tokenCalculate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      askUserKeywords: 'AskUserKeywords',
      currentStep: 'CurrentStep',
      generatedContent: 'GeneratedContent',
      modelId: 'ModelId',
      nextStep: 'NextStep',
      recommendSearchQueryList: 'RecommendSearchQueryList',
      searchKeywords: 'SearchKeywords',
      searchQueryList: 'SearchQueryList',
      supplementDataType: 'SupplementDataType',
      supplementEnable: 'SupplementEnable',
      tokenCalculate: 'TokenCalculate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      askUserKeywords: { 'type': 'array', 'itemType': 'string' },
      currentStep: 'string',
      generatedContent: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent,
      modelId: 'string',
      nextStep: 'string',
      recommendSearchQueryList: { 'type': 'array', 'itemType': 'string' },
      searchKeywords: { 'type': 'array', 'itemType': 'string' },
      searchQueryList: { 'type': 'array', 'itemType': 'string' },
      supplementDataType: 'string',
      supplementEnable: 'boolean',
      tokenCalculate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate,
    };
  }

  validate() {
    if(Array.isArray(this.askUserKeywords)) {
      $dara.Model.validateArray(this.askUserKeywords);
    }
    if(this.generatedContent && typeof (this.generatedContent as any).validate === 'function') {
      (this.generatedContent as any).validate();
    }
    if(Array.isArray(this.recommendSearchQueryList)) {
      $dara.Model.validateArray(this.recommendSearchQueryList);
    }
    if(Array.isArray(this.searchKeywords)) {
      $dara.Model.validateArray(this.searchKeywords);
    }
    if(Array.isArray(this.searchQueryList)) {
      $dara.Model.validateArray(this.searchQueryList);
    }
    if(this.tokenCalculate && typeof (this.tokenCalculate as any).validate === 'function') {
      (this.tokenCalculate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContext extends $dara.Model {
  bizContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext;
  static names(): { [key: string]: string } {
    return {
      bizContext: 'BizContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContext: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext,
    };
  }

  validate() {
    if(this.bizContext && typeof (this.bizContext as any).validate === 'function') {
      (this.bizContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultAudios extends $dara.Model {
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultImages extends $dara.Model {
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultTexts extends $dara.Model {
  /**
   * @example
   * xx
   */
  docUuid?: string;
  static names(): { [key: string]: string } {
    return {
      docUuid: 'DocUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultVideos extends $dara.Model {
  /**
   * @example
   * 1
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResult extends $dara.Model {
  audios?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultAudios[];
  images?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultImages[];
  /**
   * @example
   * xx
   */
  multimodalSearchQuery?: string;
  texts?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultTexts[];
  videos?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultVideos[];
  static names(): { [key: string]: string } {
    return {
      audios: 'Audios',
      images: 'Images',
      multimodalSearchQuery: 'MultimodalSearchQuery',
      texts: 'Texts',
      videos: 'Videos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audios: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultAudios },
      images: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultImages },
      multimodalSearchQuery: 'string',
      texts: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultTexts },
      videos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultVideos },
    };
  }

  validate() {
    if(Array.isArray(this.audios)) {
      $dara.Model.validateArray(this.audios);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(Array.isArray(this.videos)) {
      $dara.Model.validateArray(this.videos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputMessages extends $dara.Model {
  clarifications?: boolean;
  /**
   * @example
   * xx
   */
  content?: string;
  generateFinished?: boolean;
  /**
   * @example
   * xx
   */
  id?: string;
  /**
   * @example
   * generateStartStatement
   */
  nodeCode?: string;
  searchQueries?: string[];
  /**
   * @example
   * xx
   */
  searchQuery?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResult[];
  static names(): { [key: string]: string } {
    return {
      clarifications: 'Clarifications',
      content: 'Content',
      generateFinished: 'GenerateFinished',
      id: 'Id',
      nodeCode: 'NodeCode',
      searchQueries: 'SearchQueries',
      searchQuery: 'SearchQuery',
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clarifications: 'boolean',
      content: 'string',
      generateFinished: 'boolean',
      id: 'string',
      nodeCode: 'string',
      searchQueries: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchQueries)) {
      $dara.Model.validateArray(this.searchQueries);
    }
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutput extends $dara.Model {
  agentContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContext;
  messages?: RunSearchGenerationResponseBodyPayloadOutputMessages[];
  static names(): { [key: string]: string } {
    return {
      agentContext: 'AgentContext',
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationResponseBodyPayloadOutputAgentContext,
      messages: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputMessages },
    };
  }

  validate() {
    if(this.agentContext && typeof (this.agentContext as any).validate === 'function') {
      (this.agentContext as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @example
   * 3
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayload extends $dara.Model {
  output?: RunSearchGenerationResponseBodyPayloadOutput;
  usage?: RunSearchGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunSearchGenerationResponseBodyPayloadOutput,
      usage: RunSearchGenerationResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBody extends $dara.Model {
  header?: RunSearchGenerationResponseBodyHeader;
  payload?: RunSearchGenerationResponseBodyPayload;
  /**
   * @example
   * xx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunSearchGenerationResponseBodyHeader,
      payload: RunSearchGenerationResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


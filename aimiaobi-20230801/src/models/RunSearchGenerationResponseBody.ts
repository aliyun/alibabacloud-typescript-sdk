// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @remarks
   * SSE event.
   * 
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @remarks
   * Event description.
   * 
   * @example
   * xx
   */
  eventInfo?: string;
  /**
   * @remarks
   * Source session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * Response time, in milliseconds (ms).
   * 
   * @example
   * 1
   */
  responseTime?: number;
  /**
   * @remarks
   * Conversation ID.
   * 
   * @example
   * x
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * x
   */
  taskId?: string;
  /**
   * @remarks
   * Full link ID.
   * 
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Search source.
   * 
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xxx
   */
  summary?: string;
  /**
   * @remarks
   * List of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * URL.
   * 
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSourceName: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @remarks
   * Start position.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Threshold.
   * 
   * @example
   * 0.9
   */
  score?: number;
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * End position.
   * 
   * @example
   * 2
   */
  to?: number;
  /**
   * @remarks
   * Text type.
   * 
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
  /**
   * @remarks
   * Associated document.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultArticle;
  /**
   * @remarks
   * List of matching segments.
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResultSearchResultClipInfos[];
  /**
   * @remarks
   * URL.
   * 
   * @example
   * http://xxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * ID.
   * 
   * @example
   * xxx
   */
  mediaId?: string;
  /**
   * @remarks
   * Unique traceability identifier.
   * 
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
  /**
   * @remarks
   * Voice search result.
   */
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
   * @remarks
   * Category identity
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * docId
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * docUuid
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Unique identifier of the dataset
   * 
   * @example
   * xx
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source
   * 
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * The type of the dataset.
   * 
   * @example
   * xx
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Summary
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name
   */
  tags?: string[];
  /**
   * @remarks
   * Title
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * http://xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @remarks
   * Start position
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * Text content
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * The end position.
   * 
   * @example
   * 1
   */
  to?: number;
  /**
   * @remarks
   * Type
   * 
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
  /**
   * @remarks
   * Corresponding document
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultArticle;
  /**
   * @remarks
   * List of matching information
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResultClipInfos[];
  /**
   * @remarks
   * URL
   * 
   * @example
   * http://xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * The ID.
   * 
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
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Audio search results
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResultSearchResult;
  /**
   * @remarks
   * Size
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * Total count
   * 
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Dataset unique identifier.
   * 
   * @example
   * xx
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Dataset type.
   * 
   * @example
   * xx
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult extends $dara.Model {
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
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
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * List of search results.
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult[];
  /**
   * @remarks
   * Records per page.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * Total records.
   * 
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
   * @remarks
   * The URL of the file.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique ID of the multimodal data.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal data file type. Valid values:
   * 
   * - video: Video.
   * 
   * - image: Image.
   * 
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
   * @remarks
   * Category unique identifier
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * The custom unique ID of the document.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Unique identifier for internal documents.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * A list of multimodal information.
   */
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias[];
  /**
   * @remarks
   * Publication time, in the format yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @remarks
   * The unique identifier of the search source. This is the same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * The name of the search source.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type, same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Summary
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tags
   */
  tags?: string[];
  /**
   * @remarks
   * Title
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Search results list
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult[];
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
   * @remarks
   * Category
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Document: a custom unique ID
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * The unique identifier of the internal document.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * x
   */
  extend3?: string;
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * xx
   */
  searchSource?: string;
  /**
   * @remarks
   * The name of the search source.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Dataset type
   * 
   * @example
   * xx
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Summary
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tags
   */
  tags?: string[];
  /**
   * @remarks
   * Title
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Reference confidence level
   * 
   * @example
   * 0.9
   */
  score?: number;
  /**
   * @remarks
   * Corresponding text, such as ASR transcription results.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1
   */
  to?: number;
  /**
   * @remarks
   * Text type, such as ASR.
   * 
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
  /**
   * @remarks
   * Article
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle;
  /**
   * @remarks
   * A list of matching information.
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos[];
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique identifier for the multimodal data
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Search results
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult[];
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * Total records
   * 
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
  /**
   * @remarks
   * Audio result
   */
  audioSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsAudioSearchResult;
  /**
   * @remarks
   * Image search result.
   */
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult;
  /**
   * @remarks
   * Document search results
   */
  textSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult;
  /**
   * @remarks
   * Topic.
   * 
   * @example
   * xx
   */
  topic?: string;
  /**
   * @remarks
   * Video search results
   */
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
  /**
   * @remarks
   * List of clusters.
   */
  clusterTopics?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics[];
  /**
   * @remarks
   * Indicates whether the current agent has finished generating.
   * 
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * Text result.
   * 
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
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values:
   * 
   * - video: video
   * 
   * - image: image
   * 
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
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values: video, image.
   * 
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
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * End position.
   * 
   * @example
   * 1
   */
  end?: number;
  /**
   * @remarks
   * List of multimodal data.
   */
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @remarks
   * Start position.
   * 
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
  /**
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * List of chunks.
   */
  chunks?: string[];
  /**
   * @remarks
   * Body.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Content answered with original sentences.
   * 
   * @example
   * xx
   */
  excerpt?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * List of multimodal information items.
   */
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias[];
  /**
   * @remarks
   * Publication time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * Search source unique identifier. Same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type. Same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Indicates whether it is a reference.
   * 
   * @example
   * true
   */
  select?: boolean;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * List of accompanying images.
   */
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Traceability ID.
   * 
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      excerpt: 'Excerpt',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      tags: 'Tags',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      excerpt: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias },
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * @remarks
   * Indicates whether the current agent has finished generating.
   * 
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * Detailedness of the response:
   * 
   * - concise: Concise (default)
   * 
   * - enhance: Enhanced
   * 
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @remarks
   * Deep thinking content.
   * 
   * @example
   * xx
   */
  reasonTextGenerate?: string;
  /**
   * @remarks
   * List of search results.
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult[];
  /**
   * @remarks
   * Generated text.
   * 
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Article summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSourceName: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult extends $dara.Model {
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Media data unique identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Unique traceability identifier.
   * 
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
  /**
   * @remarks
   * List of search results.
   */
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Body.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Publication time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * Search source unique identifier. Same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type. Same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Indicates whether it is a reference.
   * 
   * @example
   * true
   */
  select?: boolean;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent extends $dara.Model {
  /**
   * @remarks
   * List of causes.
   */
  causeList?: string[];
  /**
   * @remarks
   * List of processes.
   */
  processList?: string[];
  /**
   * @remarks
   * List of results.
   */
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
   * @remarks
   * Event.
   * 
   * @example
   * task-started
   */
  event?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent;
  /**
   * @remarks
   * Location.
   * 
   * @example
   * xx
   */
  location?: string;
  /**
   * @remarks
   * People.
   * 
   * @example
   * xx
   */
  people?: string;
  /**
   * @remarks
   * Time.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle;
  /**
   * @remarks
   * List of news items.
   */
  newsElementList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList[];
  /**
   * @remarks
   * Generated text content.
   * 
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
   * @remarks
   * Indicates whether the current agent has finished generating.
   * 
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * List of news extractions.
   */
  newsElementArticleList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList[];
  /**
   * @remarks
   * Generated text content.
   * 
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
   * @remarks
   * Number, starting from 1.
   * 
   * @example
   * 1
   */
  x?: number;
  /**
   * @remarks
   * Start position.
   * 
   * @example
   * 1
   */
  y?: number;
  /**
   * @remarks
   * End position.
   * 
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
   * @remarks
   * Media asset type.
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * Number, starting from 1.
   * 
   * @example
   * 1
   */
  x?: number;
  /**
   * @remarks
   * Start position.
   * 
   * @example
   * 1
   */
  y?: number;
  /**
   * @remarks
   * End position.
   * 
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
  /**
   * @remarks
   * Coordinates of the generated document block.
   */
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  /**
   * @remarks
   * Coordinates of the reference document block.
   */
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
  /**
   * @remarks
   * List of traceability locations.
   */
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates[];
  /**
   * @remarks
   * Overall traceability relevance.
   * 
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
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
   * @remarks
   * Start time.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.1
   */
  score?: number;
  /**
   * @remarks
   * Corresponding text, such as ASR transcription.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1
   */
  to?: number;
  /**
   * @remarks
   * Type. Example: asr.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle;
  /**
   * @remarks
   * List of matching segments.
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Media asset ID.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values: video, image.
   * 
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
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Search query.
   * 
   * @example
   * xx
   */
  searchQuery?: string;
  /**
   * @remarks
   * List of search results.
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult[];
  /**
   * @remarks
   * Search type.
   * 
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @remarks
   * Items per page.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * Timeline date.
   * 
   * @example
   * 时间脉络-时间
   */
  timelineDateStr?: string;
  /**
   * @remarks
   * Total items.
   * 
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
  /**
   * @remarks
   * Category unique identifier
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * List of chunks.
   */
  chunks?: string[];
  /**
   * @remarks
   * Body.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Publication time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * Search source unique identifier. Same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type. Same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Indicates whether it is a reference.
   * 
   * @example
   * true
   */
  select?: boolean;
  /**
   * @remarks
   * Source.
   * 
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Traceability ID.
   * 
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $dara.Model {
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Media asset ID.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values: video, image.
   * 
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
   * @remarks
   * End position.
   * 
   * @example
   * 1
   */
  end?: number;
  /**
   * @remarks
   * List of multimodal data.
   */
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @remarks
   * Start position.
   * 
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
   * @remarks
   * Indicates whether the current agent has finished generating.
   * 
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * Detailedness of the response:
   * 
   * - concise: Concise (default)
   * 
   * - enhance: Enhanced
   * 
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @remarks
   * Traceability information.
   */
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability;
  /**
   * @remarks
   * List of multimodal search results.
   */
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList[];
  /**
   * @remarks
   * Deep thinking content.
   * 
   * @example
   * xx
   */
  reasonTextGenerate?: string;
  /**
   * @remarks
   * List of reference articles.
   */
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList[];
  /**
   * @remarks
   * Text generation result.
   * 
   * @example
   * xx
   */
  textGenerate?: string;
  /**
   * @remarks
   * List of accompanying images.
   */
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Body.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Unique document business identifier.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * System internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Publication time.
   * 
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @remarks
   * Data source unique identifier.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Data source description.
   * 
   * @example
   * xxx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Unique traceability identifier.
   * 
   * @example
   * 1
   */
  traceabilityId?: string;
  /**
   * @remarks
   * URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      traceabilityId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The structure of the search result.
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResultSearchResult[];
  /**
   * @remarks
   * Current page size.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * Number, starting from 1.
   * 
   * @example
   * 1
   */
  x?: number;
  /**
   * @remarks
   * Start position.
   * 
   * @example
   * 1
   */
  y?: number;
  /**
   * @remarks
   * End position.
   * 
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
   * @remarks
   * Media asset type.
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * Number, starting from 1.
   * 
   * @example
   * 1
   */
  x?: number;
  /**
   * @remarks
   * Start position.
   * 
   * @example
   * 1
   */
  y?: number;
  /**
   * @remarks
   * End position.
   * 
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
  /**
   * @remarks
   * Coordinates of the generated document block.
   */
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  /**
   * @remarks
   * Coordinates of the reference article.
   */
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
  /**
   * @remarks
   * Traceability location.
   */
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates[];
  /**
   * @remarks
   * Relevance score.
   * 
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
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
   * @remarks
   * Start time.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * Corresponding text, such as ASR transcription.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1
   */
  to?: number;
  /**
   * @remarks
   * Type. Example: asr.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle;
  /**
   * @remarks
   * List of matching segments.
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values: video, image.
   * 
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
  /**
   * @remarks
   * List of search results.
   */
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult[];
  /**
   * @remarks
   * Date string.
   * 
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
  /**
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * List of chunks.
   */
  chunks?: string[];
  /**
   * @remarks
   * Body.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Publication time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * Search source unique identifier. Same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type. Same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Selection status.
   * 
   * @example
   * true
   */
  select?: boolean;
  /**
   * @remarks
   * Source.
   * 
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Traceability ID.
   * 
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $dara.Model {
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xxxx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Multimodal file type. Valid values: video, image.
   * 
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
   * @remarks
   * End position.
   * 
   * @example
   * 1
   */
  end?: number;
  /**
   * @remarks
   * List of multimodal data.
   */
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @remarks
   * Start position.
   * 
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
   * @remarks
   * Indicates whether the current agent has finished generating.
   * 
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * Traceability information.
   */
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability;
  /**
   * @remarks
   * List of multimodal search results.
   */
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList[];
  /**
   * @remarks
   * Deep thinking content.
   * 
   * @example
   * xx
   */
  reasonTextGenerate?: string;
  /**
   * @remarks
   * List of reference articles.
   */
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList[];
  /**
   * @remarks
   * Text generation result.
   * 
   * @example
   * xx
   */
  textGenerate?: string;
  /**
   * @remarks
   * List of accompanying images.
   */
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
   * @remarks
   * Unique category identifier.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSourceName: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos extends $dara.Model {
  /**
   * @remarks
   * Start time of the segment.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Confidence score. For reference only.
   * 
   * @example
   * 0.8
   */
  score?: number;
  /**
   * @remarks
   * Corresponding text, such as ASR transcription.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1
   */
  to?: number;
  /**
   * @remarks
   * Type. Example: asr.
   * 
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
  /**
   * @remarks
   * Article.
   */
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle;
  /**
   * @remarks
   * List of matching segments.
   */
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos[];
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Unique multimodal data identifier.
   * 
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @remarks
   * Unique traceability identifier.
   * 
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
  /**
   * @remarks
   * List of search results.
   */
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
  /**
   * @remarks
   * Voice search result.
   */
  audioSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentAudioSearchResult;
  /**
   * @remarks
   * Clustering result.
   */
  clusterTopicResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult;
  /**
   * @remarks
   * Result of answering with original sentences.
   */
  excerptResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult;
  /**
   * @remarks
   * Image search result.
   */
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult;
  /**
   * @remarks
   * News extraction result.
   */
  newsElementResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult;
  /**
   * @remarks
   * Summarized answer.
   */
  textGenerateResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult;
  /**
   * @remarks
   * Text document search result.
   */
  textSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult;
  /**
   * @remarks
   * Result of summarizing by time.
   */
  timelineResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult;
  /**
   * @remarks
   * Video search result.
   */
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
  /**
   * @remarks
   * First token time.
   * 
   * @example
   * 1
   */
  firstTokenTime?: number;
  /**
   * @remarks
   * Average number of tokens output per second.
   * 
   * @example
   * 1
   */
  outputAvgTime?: number;
  /**
   * @remarks
   * Search time cost.
   * 
   * @example
   * 1
   */
  searchTime?: number;
  /**
   * @remarks
   * Total time cost.
   * 
   * @example
   * 1
   */
  time?: number;
  /**
   * @remarks
   * Total number of tokens.
   * 
   * @example
   * 1
   */
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
   * @remarks
   * Follow-up question.
   * 
   * @example
   * 您想了解关于xx的哪些信息？
   */
  askUser?: string;
  /**
   * @remarks
   * List of recommended keywords for follow-up questions.
   */
  askUserKeywords?: string[];
  /**
   * @remarks
   * Current step in the task.
   * 
   * @example
   * start
   */
  currentStep?: string;
  /**
   * @remarks
   * Generated content.
   */
  generatedContent?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent;
  /**
   * @remarks
   * Model ID.
   * 
   * @example
   * xx
   */
  modelId?: string;
  /**
   * @remarks
   * Next step: think, search, or generate.
   * 
   * @example
   * search
   */
  nextStep?: string;
  /**
   * @remarks
   * Generation - list of recommendations.
   */
  recommendSearchQueryList?: string[];
  /**
   * @remarks
   * Reasoning - list of query understanding keywords.
   */
  searchKeywords?: string[];
  /**
   * @remarks
   * List of text search queries.
   */
  searchQueryList?: string[];
  /**
   * @remarks
   * Reasoning - data type to supplement: searchQuery.
   * 
   * @example
   * searchQuery
   */
  supplementDataType?: string;
  /**
   * @remarks
   * Reasoning - whether supplementation is needed.
   * 
   * @example
   * true
   */
  supplementEnable?: boolean;
  /**
   * @remarks
   * Runtime performance statistics.
   */
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
  /**
   * @remarks
   * Business context.
   */
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
   * @remarks
   * ID.
   * 
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
   * @remarks
   * ID.
   * 
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
   * @remarks
   * ID.
   * 
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
   * @remarks
   * ID.
   * 
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
  /**
   * @remarks
   * List of audio results.
   */
  audios?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultAudios[];
  /**
   * @remarks
   * List of image searches.
   */
  images?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultImages[];
  /**
   * @remarks
   * Multimodal search query.
   * 
   * @example
   * xx
   */
  multimodalSearchQuery?: string;
  /**
   * @remarks
   * List of text searches.
   */
  texts?: RunSearchGenerationResponseBodyPayloadOutputMessagesSearchResultTexts[];
  /**
   * @remarks
   * List of video results.
   */
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
  /**
   * @remarks
   * Indicates whether clarification is needed.
   */
  clarifications?: boolean;
  /**
   * @remarks
   * Generated text.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the current node has finished.
   */
  generateFinished?: boolean;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * xx
   */
  id?: string;
  /**
   * @remarks
   * Node code:
   * 
   * - generateStartStatement
   * 
   * - generateSearchQueries
   * 
   * - multiSearch
   * 
   * - readSearchResult
   * 
   * - reflection
   * 
   * - generate
   * 
   * @example
   * generateStartStatement
   */
  nodeCode?: string;
  /**
   * @remarks
   * List of search queries.
   */
  searchQueries?: string[];
  /**
   * @remarks
   * Current node search query.
   * 
   * @example
   * xx
   */
  searchQuery?: string;
  /**
   * @remarks
   * Search result.
   */
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
  /**
   * @remarks
   * Context data.
   */
  agentContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContext;
  /**
   * @remarks
   * List of messages in research mode.
   */
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
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total token count
   * 
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
  /**
   * @remarks
   * Outputs.
   */
  output?: RunSearchGenerationResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
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
  /**
   * @remarks
   * Response header.
   */
  header?: RunSearchGenerationResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunSearchGenerationResponseBodyPayload;
  /**
   * @remarks
   * Unique request identifier.
   * 
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


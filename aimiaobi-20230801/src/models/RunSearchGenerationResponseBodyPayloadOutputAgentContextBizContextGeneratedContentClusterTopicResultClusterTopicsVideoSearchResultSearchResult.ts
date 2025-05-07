// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos";


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


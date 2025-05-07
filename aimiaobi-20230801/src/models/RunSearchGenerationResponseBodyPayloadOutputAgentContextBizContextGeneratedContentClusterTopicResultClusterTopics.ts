// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics extends $dara.Model {
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
      imageSearchResult: 'ImageSearchResult',
      textSearchResult: 'TextSearchResult',
      topic: 'Topic',
      videoSearchResult: 'VideoSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult,
      textSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult,
      topic: 'string',
      videoSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult,
    };
  }

  validate() {
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


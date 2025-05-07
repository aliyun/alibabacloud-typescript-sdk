// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextSearchResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent extends $dara.Model {
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList";


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


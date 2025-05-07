// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList";


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


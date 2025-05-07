// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext extends $dara.Model {
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


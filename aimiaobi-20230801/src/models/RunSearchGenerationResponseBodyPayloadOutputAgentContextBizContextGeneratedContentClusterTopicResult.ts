// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics";


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


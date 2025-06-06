// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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


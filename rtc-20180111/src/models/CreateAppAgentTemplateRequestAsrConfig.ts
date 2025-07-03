// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppAgentTemplateRequestAsrConfigWordWeights } from "./CreateAppAgentTemplateRequestAsrConfigWordWeights";


export class CreateAppAgentTemplateRequestAsrConfig extends $dara.Model {
  /**
   * @example
   * 300
   */
  maxSentenceSilence?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STT
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeights?: CreateAppAgentTemplateRequestAsrConfigWordWeights[];
  static names(): { [key: string]: string } {
    return {
      maxSentenceSilence: 'MaxSentenceSilence',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSentenceSilence: 'number',
      name: 'string',
      wordWeights: { 'type': 'array', 'itemType': CreateAppAgentTemplateRequestAsrConfigWordWeights },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


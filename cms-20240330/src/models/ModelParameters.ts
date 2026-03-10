// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelParameters extends $dara.Model {
  frequencyPenalty?: number;
  maxTokens?: number;
  presencePenalty?: number;
  stopSequences?: string[];
  temperature?: number;
  topK?: number;
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      frequencyPenalty: 'frequencyPenalty',
      maxTokens: 'maxTokens',
      presencePenalty: 'presencePenalty',
      stopSequences: 'stopSequences',
      temperature: 'temperature',
      topK: 'topK',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequencyPenalty: 'number',
      maxTokens: 'number',
      presencePenalty: 'number',
      stopSequences: { 'type': 'array', 'itemType': 'string' },
      temperature: 'number',
      topK: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stopSequences)) {
      $dara.Model.validateArray(this.stopSequences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


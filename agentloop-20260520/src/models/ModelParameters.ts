// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelParameters extends $dara.Model {
  /**
   * @remarks
   * The frequency penalty. Positive values reduce repetition. Valid values: -2.0 to 2.0.
   * 
   * @example
   * 0.2
   */
  frequencyPenalty?: number;
  /**
   * @remarks
   * The maximum number of output tokens.
   * 
   * @example
   * 1024
   */
  maxTokens?: number;
  /**
   * @remarks
   * The presence penalty. Positive values encourage new topics. Valid values: -2.0 to 2.0.
   * 
   * @example
   * 0.1
   */
  presencePenalty?: number;
  /**
   * @remarks
   * The stop sequences. Generation stops immediately when any of these sequences is encountered.
   * 
   * @example
   * ["END"]
   */
  stopSequences?: string[];
  /**
   * @remarks
   * The temperature parameter that controls the randomness of the output. Valid values: 0 to 2.
   * 
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @remarks
   * The top-k sampling parameter. Valid values: 1 to 100.
   * 
   * @example
   * 50
   */
  topK?: number;
  /**
   * @remarks
   * The top-p sampling parameter. Valid values: 0 to 1.
   * 
   * @example
   * 0.9
   */
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


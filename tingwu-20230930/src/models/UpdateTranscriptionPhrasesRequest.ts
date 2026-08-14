// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTranscriptionPhrasesRequest extends $dara.Model {
  /**
   * @remarks
   * A description of the hotword list.
   * 
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * The name of the hotword list.
   * 
   * This parameter is required.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * A JSON map string that defines hotwords and their weights.
   * 
   * This parameter is required.
   * 
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


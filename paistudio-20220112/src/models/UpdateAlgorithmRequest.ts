// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlgorithmRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm description.
   * 
   * @example
   * Large language model training.
   */
  algorithmDescription?: string;
  /**
   * @remarks
   * The display name of the algorithm.
   * 
   * @example
   * LLM Train
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


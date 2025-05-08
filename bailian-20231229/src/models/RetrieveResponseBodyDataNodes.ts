// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The metadata map of the chunk.
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the chunk. Valid values:[0-1].
   * 
   * @example
   * 0.3
   */
  score?: number;
  /**
   * @remarks
   * The text of the chunk.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      score: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


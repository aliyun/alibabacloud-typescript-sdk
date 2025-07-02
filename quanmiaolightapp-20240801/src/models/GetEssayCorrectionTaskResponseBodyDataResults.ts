// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEssayCorrectionTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * xxx
   * 
   * @example
   * 1
   */
  customId?: string;
  result?: string;
  /**
   * @example
   * 58
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      result: 'result',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      result: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


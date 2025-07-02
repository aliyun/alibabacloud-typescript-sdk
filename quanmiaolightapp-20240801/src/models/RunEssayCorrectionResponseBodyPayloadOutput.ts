// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEssayCorrectionResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 50
   */
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'score',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


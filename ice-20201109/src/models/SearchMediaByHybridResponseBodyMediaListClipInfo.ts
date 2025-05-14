// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridResponseBodyMediaListClipInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  from?: number;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * 4
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


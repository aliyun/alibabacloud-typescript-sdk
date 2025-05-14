// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByMultimodalResponseBodyMediaListClipInfo extends $dara.Model {
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 2
   */
  from?: number;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 1.2
   */
  score?: number;
  /**
   * @remarks
   * The end time of the clip.
   * 
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


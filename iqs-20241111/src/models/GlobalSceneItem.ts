// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalSceneItem extends $dara.Model {
  /**
   * @remarks
   * The detailed information in JSON format.
   * 
   * @example
   * {
   * "snippet": "As of March 7, 2025, SpaceX Starship has been launched 8 times, with 4 successes and 4 failures.",
   * "snippetHighlighted": ["8 times"],
   * "title": "List of Starship launch missions"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The type of vertical data.
   * 
   * @example
   * answerBox
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


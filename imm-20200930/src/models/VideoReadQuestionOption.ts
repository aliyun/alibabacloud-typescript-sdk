// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoReadQuestionOption extends $dara.Model {
  /**
   * @remarks
   * The number of keywords. Valid values: 0 to 10.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to fetch.
   * 
   * @example
   * true
   */
  extract?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      extract: 'Extract',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      extract: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseKeywordOption extends $dara.Model {
  /**
   * @remarks
   * The number of keywords to extract. The value must be an integer from 0 to 10.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to extract keywords.
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


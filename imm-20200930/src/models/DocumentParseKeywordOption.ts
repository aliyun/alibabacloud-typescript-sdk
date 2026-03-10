// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseKeywordOption extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
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


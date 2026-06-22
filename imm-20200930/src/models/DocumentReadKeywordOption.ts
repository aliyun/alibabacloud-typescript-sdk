// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentReadKeywordOption extends $dara.Model {
  /**
   * @remarks
   * The maximum number of keywords to return.
   */
  count?: number;
  /**
   * @remarks
   * Whether to extract keywords from the document.
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


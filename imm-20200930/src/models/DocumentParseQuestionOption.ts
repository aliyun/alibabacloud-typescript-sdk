// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseQuestionOption extends $dara.Model {
  /**
   * @remarks
   * Number of questions (range: 0 to 10)
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Whether to extract
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


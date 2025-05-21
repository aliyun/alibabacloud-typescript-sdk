// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTextResponseBodyCountTextCmdList extends $dara.Model {
  /**
   * @example
   * 4
   */
  count?: number;
  /**
   * @example
   * RED_BOOK
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      theme: 'theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiproEmbedConfigRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


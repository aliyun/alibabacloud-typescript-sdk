// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopilotEmbedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the embedded configuration module, supports fuzzy search.
   * 
   * @example
   * 06-ELive
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


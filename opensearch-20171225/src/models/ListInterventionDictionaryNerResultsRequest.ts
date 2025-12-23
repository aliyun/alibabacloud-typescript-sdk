// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionaryNerResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Query keywords.
   * 
   * This parameter is required.
   * 
   * @example
   * "hello world"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


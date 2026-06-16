// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextRequest extends $dara.Model {
  filter?: { [key: string]: any };
  formatted?: boolean;
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  retrievalOption?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      formatted: 'formatted',
      limit: 'limit',
      query: 'query',
      retrievalOption: 'retrievalOption',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatted: 'boolean',
      limit: 'number',
      query: 'string',
      retrievalOption: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


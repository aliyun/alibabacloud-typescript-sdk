// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestion } from "./Esingestion";


export class ListElasticsearchIngestionsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  results?: ESIngestion[];
  /**
   * @example
   * 80
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ESIngestion },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestion } from "./Gcsingestion";


export class ListGCSIngestionsResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  results?: GCSIngestion[];
  /**
   * @example
   * 100
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
      results: { 'type': 'array', 'itemType': GCSIngestion },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestion } from "./Gcsingestion";


export class ListGCSIngestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of jobs returned on the current page.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The details of the job configurations.
   */
  results?: GCSIngestion[];
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { S3Ingestion } from "./S3ingestion";


export class ListS3IngestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of tasks returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The details of the task configurations.
   */
  results?: S3Ingestion[];
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 3
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
      results: { 'type': 'array', 'itemType': S3Ingestion },
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


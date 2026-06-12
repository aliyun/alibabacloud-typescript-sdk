// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestion } from "./Esingestion";


export class ListElasticsearchIngestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of Elasticsearch/OpenSearch import jobs returned in the current request.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of Elasticsearch/OpenSearch import jobs.
   */
  results?: ESIngestion[];
  /**
   * @remarks
   * The total number of Elasticsearch/OpenSearch import jobs in the project.
   * 
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


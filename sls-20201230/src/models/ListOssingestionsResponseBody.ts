// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSIngestion } from "./Ossingestion";


export class ListOSSIngestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of OSS import tasks returned in this response.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * A list of OSS import tasks.
   */
  results?: OSSIngestion[];
  /**
   * @remarks
   * The total number of OSS import tasks in the Project.
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
      results: { 'type': 'array', 'itemType': OSSIngestion },
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


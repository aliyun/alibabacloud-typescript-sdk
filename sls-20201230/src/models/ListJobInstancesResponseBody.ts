// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobInstance } from "./JobInstance";


export class ListJobInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of jobs returned on the current page.
   * 
   * @example
   * 10
   */
  count?: string;
  /**
   * @remarks
   * The job configuration details.
   */
  results?: JobInstance[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
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
      count: 'string',
      results: { 'type': 'array', 'itemType': JobInstance },
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


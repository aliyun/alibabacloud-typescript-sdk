// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledSQL } from "./ScheduledSql";


export class ListScheduledSQLsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of Scheduled SQL jobs returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of Scheduled SQL jobs.
   */
  results?: ScheduledSQL[];
  /**
   * @remarks
   * The total number of Scheduled SQL jobs in the project.
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
      results: { 'type': 'array', 'itemType': ScheduledSQL },
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


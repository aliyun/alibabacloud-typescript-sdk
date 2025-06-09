// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETL } from "./Etl";


export class ListETLsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data transformation jobs that are returned.
   * 
   * @example
   * 10
   */
  count?: number;
  results?: ETL[];
  /**
   * @remarks
   * The total number of data transformation jobs in the project.
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
      results: { 'type': 'array', 'itemType': ETL },
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


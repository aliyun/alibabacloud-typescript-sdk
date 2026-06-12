// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Alert } from "./Alert";


export class ListAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of alerts returned in the current response.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of alert configurations.
   */
  results?: Alert[];
  /**
   * @remarks
   * The total number of alerts in the project.
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
      results: { 'type': 'array', 'itemType': Alert },
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


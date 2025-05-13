// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dataset } from "./Dataset";


export class ListDatasetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The datasets.
   */
  datasets?: Dataset[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


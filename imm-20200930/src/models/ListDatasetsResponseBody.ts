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
   * The pagination token. If the total number of datasets is greater than the value of MaxResults, you must specify this parameter. This parameter has a value only if not all the datasets that meet the conditions are returned.
   * 
   * Pass this value as the value of NextToken in the next call to query subsequent datasets.
   * 
   * @example
   * 12345678:immtest:dataset002
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEEDE356-C928-4A36-951A-6EB5A592****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      nextToken: 'string',
      requestId: 'string',
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


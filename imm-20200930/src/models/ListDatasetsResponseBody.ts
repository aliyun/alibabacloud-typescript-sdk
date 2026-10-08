// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dataset } from "./Dataset";


export class ListDatasetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dataset information.
   */
  datasets?: Dataset[];
  /**
   * @remarks
   * The pagination token. If the total number of datasets exceeds the value of MaxResults, this token is used for pagination. This parameter is returned only when not all matching datasets are returned.
   * 
   * Pass this value as NextToken in the next request to return the remaining datasets.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for retrieving the next page of results. A `nextToken` is included in the response when the result set is truncated. To continue pagination, provide the `nextToken` from the previous response.
   * 
   * @example
   * d9a48d977f45aa6fcf6981ed13b885b3fab0b124c12dcbbe70edce5d81ba****************
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'datasetName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


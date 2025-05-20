// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The name of the domain. Fuzzy search is supported.
   */
  name?: string;
  /**
   * @remarks
   * The sorting rule. Set the value to created_at, which specifies that the results are sorted based on the time when the domain was created.
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      name: 'name',
      orderBy: 'order_by',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      name: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


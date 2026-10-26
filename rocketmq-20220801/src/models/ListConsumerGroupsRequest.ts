// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If you do not specify this parameter, all consumer groups under the specified instance are queried.
   * 
   * @example
   * CID-TEST
   */
  filter?: string;
  /**
   * @remarks
   * The paging page number. Specifies which page of results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging size. The maximum number of results to return per page.
   * 
   * Valid values: [10,100].
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryItemsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition, filter by topicName
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * Page number, indicating which page of the results to query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


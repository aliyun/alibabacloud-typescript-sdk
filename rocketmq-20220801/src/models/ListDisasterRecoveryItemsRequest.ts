// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Filters by topicName.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic-test284
   */
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


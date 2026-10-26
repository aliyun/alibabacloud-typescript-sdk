// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If not specified, all topics in the instance are returned.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message type of the topic.
   */
  messageTypes?: string[];
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
   * The maximum number of results to display per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypes: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


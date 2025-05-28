// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If not provided, all topics under the instance will be queried.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message type of the topic.
   */
  messageTypesShrink?: string;
  /**
   * @remarks
   * Page number, indicating which page of results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results to display per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypesShrink: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypesShrink: 'string',
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


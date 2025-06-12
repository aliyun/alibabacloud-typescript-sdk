// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupChatMessagesRequest extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * b2ad450b116e4f8396e58108acf5c020
   */
  nextPageToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


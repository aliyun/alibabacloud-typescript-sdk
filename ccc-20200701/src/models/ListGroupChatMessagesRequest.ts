// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupChatMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud Contact Center instance.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Token for the next page. This is a 32-character UUID. Leave this parameter empty when requesting the first page. For subsequent pages, use the NextPageToken value from the previous response.
   * 
   * @example
   * b2ad450b116e4f8396e58108acf5c020
   */
  nextPageToken?: string;
  /**
   * @remarks
   * Page size. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting order. Default is descending.
   * 
   * Valid values:
   * 
   * ASC: ascending.
   * 
   * DESC: descending.
   * 
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


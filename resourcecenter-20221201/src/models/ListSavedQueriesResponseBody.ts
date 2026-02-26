// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSavedQueriesResponseBodySavedQueries extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-13T05:50:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * 查询我的所有资源，返回所有的列。
   */
  description?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * 查询我的所有资源。
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * cq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the template was last updated. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-14 10:27:07
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      queryId: 'QueryId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      queryId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedQueriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the custom query templates.
   */
  savedQueries?: ListSavedQueriesResponseBodySavedQueries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      savedQueries: 'SavedQueries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      savedQueries: { 'type': 'array', 'itemType': ListSavedQueriesResponseBodySavedQueries },
    };
  }

  validate() {
    if(Array.isArray(this.savedQueries)) {
      $dara.Model.validateArray(this.savedQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


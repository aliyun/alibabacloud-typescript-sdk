// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectNotifyReceiversResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The email address of the recipient.
   * 
   * @example
   * 6291****@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the recipient.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the recipient.
   * 
   * @example
   * 131****6412
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the notification recipient.
   * 
   * @example
   * 1
   */
  receiverId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      phone: 'Phone',
      receiverId: 'ReceiverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      phone: 'string',
      receiverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectNotifyReceiversResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of recipients.
   */
  items?: ListProjectNotifyReceiversResponseBodyItems[];
  /**
   * @remarks
   * The value of the MaxResults request parameter passed in the request if a valid parameter value was specified. Otherwise, the default value is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next request. Use this value for the NextToken request parameter in the next paged query. If this field is empty in the response, no more data is available. This parameter is used for paging.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 81500666-d7f5-4143-8329-0223cc738105
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of recipients returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListProjectNotifyReceiversResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


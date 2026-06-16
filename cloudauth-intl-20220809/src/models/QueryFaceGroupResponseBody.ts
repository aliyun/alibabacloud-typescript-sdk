// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceGroupResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The code of the face library.
   * 
   * @example
   * faceGroup001
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 162261
   */
  id?: number;
  /**
   * @remarks
   * The name of the face library.
   * 
   * @example
   * test-888
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of returned entries.
   */
  items?: QueryFaceGroupResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * N/zmQeG/x9TDWmaB/pbfBQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryFaceGroupResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
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


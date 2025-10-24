// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResponseBodyTagGroups extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  createTime?: string;
  /**
   * @example
   * 32323
   */
  createUserId?: number;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * 54545
   */
  groupId?: number;
  /**
   * @example
   * 7562321
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  modifyTime?: string;
  /**
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @example
   * 标签1
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      groupId: 'GroupId',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      groupId: 'number',
      id: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  tagGroups?: ListTagResponseBodyTagGroups[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagGroups: 'TagGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagGroups: { 'type': 'array', 'itemType': ListTagResponseBodyTagGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagGroups)) {
      $dara.Model.validateArray(this.tagGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


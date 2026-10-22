// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResponseBodyTagGroups extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * xxxx
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 32323
   */
  createUserId?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 54545
   */
  groupId?: number;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 7562321
   */
  id?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * xxx
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the updater.
   * 
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the updater.
   * 
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Tag 1
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
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The tag groups.
   */
  tagGroups?: ListTagResponseBodyTagGroups[];
  /**
   * @remarks
   * The total number of entries.
   * 
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


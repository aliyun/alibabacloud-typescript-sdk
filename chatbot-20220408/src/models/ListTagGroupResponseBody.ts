// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagGroupResponseBodyTagGroups extends $dara.Model {
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
   * The ID of the default tag.
   * 
   * @example
   * 232323
   */
  defaultTagId?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Tag 1
   */
  groupName?: string;
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
   * The modification time.
   * 
   * @example
   * xxx
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * xxx
   */
  modifyUserName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      defaultTagId: 'DefaultTagId',
      groupName: 'GroupName',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      defaultTagId: 'number',
      groupName: 'string',
      id: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagGroupResponseBody extends $dara.Model {
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
   * The tag group information.
   */
  tagGroups?: ListTagGroupResponseBodyTagGroups[];
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
      tagGroups: { 'type': 'array', 'itemType': ListTagGroupResponseBodyTagGroups },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of direct child nodes.
   * 
   * @example
   * 5
   */
  childCount?: number;
  /**
   * @remarks
   * The time when the label was created.
   * 
   * @example
   * 1748428991000
   */
  createTime?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 用于归集售后服务相关的所有意图与 FAQ
   */
  description?: string;
  /**
   * @remarks
   * The level of the current node.
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * The time when the label was last modified.
   * 
   * @example
   * 1748428991000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 售后问题
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent label node.
   * 
   * @example
   * -1
   */
  parentTagId?: number;
  /**
   * @remarks
   * The node path.
   */
  path?: string[];
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 128
   */
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      childCount: 'ChildCount',
      createTime: 'CreateTime',
      description: 'Description',
      level: 'Level',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentTagId: 'ParentTagId',
      path: 'Path',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childCount: 'number',
      createTime: 'number',
      description: 'string',
      level: 'number',
      modifyTime: 'number',
      name: 'string',
      parentTagId: 'number',
      path: { 'type': 'array', 'itemType': 'string' },
      tagId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTagResponseBodyData[];
  /**
   * @remarks
   * The actual number of records returned on the current page.
   * 
   * @example
   * 2
   */
  dataSize?: number;
  /**
   * @remarks
   * The error message, if any.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page size.
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
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: The call was successful. false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      dataSize: 'DataSize',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListTagResponseBodyData },
      dataSize: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


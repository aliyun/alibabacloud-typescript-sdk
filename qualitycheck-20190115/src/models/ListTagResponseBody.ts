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
   * The time when the tag was created.
   * 
   * @example
   * 1748428991000
   */
  createTime?: number;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * Used to collect all intents and FAQs related to after-sales service
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
   * The time when the tag was last modified.
   * 
   * @example
   * 1748428991000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * After-sales issues
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent tag node.
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
   * The tag ID.
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
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
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
   * The error message returned if an error occurs.
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
   * Indicates whether the call is successful. Valid values: true: The call is successful. false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
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


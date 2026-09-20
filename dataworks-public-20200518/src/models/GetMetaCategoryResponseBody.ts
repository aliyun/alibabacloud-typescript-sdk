// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaCategoryResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 133
   */
  categoryId?: number;
  /**
   * @remarks
   * The remarks of the category.
   * 
   * @example
   * category 1
   */
  comment?: string;
  /**
   * @remarks
   * The time when the category was created.
   * 
   * The value is a 13-digit number, such as `1541576644000`.
   * 
   * @example
   * 1541576644000
   */
  createTime?: number;
  /**
   * @remarks
   * The depth level of the category.
   * 
   * @example
   * 1
   */
  depth?: number;
  /**
   * @remarks
   * The ID of the user who last performed an operation.
   * 
   * @example
   * 12345
   */
  lastOperatorId?: string;
  /**
   * @remarks
   * The time when the category was last modified.
   * 
   * The value is a 13-digit number, such as `1541576644000`.
   * 
   * @example
   * 1541576644000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * category 1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the category owner.
   * 
   * @example
   * 123
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 12
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      comment: 'Comment',
      createTime: 'CreateTime',
      depth: 'Depth',
      lastOperatorId: 'LastOperatorId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ownerId: 'OwnerId',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      comment: 'string',
      createTime: 'number',
      depth: 'number',
      lastOperatorId: 'string',
      modifiedTime: 'number',
      name: 'string',
      ownerId: 'string',
      parentCategoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of data entities.
   */
  dataEntityList?: GetMetaCategoryResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The page number. Used for pagination.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of categories.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaCategoryResponseBodyDataDataEntityList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaCategoryResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaCategoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceAllUserIdsByGroupIdResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The user ID in the caller service.
   * 
   * @example
   * TestCustomUserId
   */
  customUserId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The user parameters.
   * 
   * @example
   * {"age":28, "sex":"male"}
   */
  params?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * TestUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of users.
   */
  list?: QueryFaceAllUserIdsByGroupIdResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of users.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserIdsByGroupIdResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryFaceAllUserIdsByGroupIdResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserIdsByGroupIdResponseBodyData,
      errorMessage: 'string',
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


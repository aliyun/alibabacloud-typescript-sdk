// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Collection } from "./Collection";


export class ListMetaCollectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collections.
   */
  collectionList?: Collection[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 37ae2053d87d380f28ce0dc0853ca51e
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      collectionList: 'CollectionList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionList: { 'type': 'array', 'itemType': Collection },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectionList)) {
      $dara.Model.validateArray(this.collectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListMetaCollectionsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Collection.NotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
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
   * E25887B7-579C-54A5-9C4F-83A0DE367DDE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ListMetaCollectionsResponseBodyData,
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

